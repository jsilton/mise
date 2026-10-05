import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkGfm from 'remark-gfm';

// Match Astro's CommonMark + GFM grammar. Parse nodes, never numbered-looking
// lines in prose/code, and never stop a section at an inline or deeper heading.
const parser = unified().use(remarkParse).use(remarkGfm);

function plain(node, includeLinks = false, definitions = new Map(), linkBaseUrl) {
  if (node.type === 'html') return ''; // Do not export markup or comments.
  if (node.type === 'image' || node.type === 'imageReference') return node.alt || '';
  if (node.type === 'break') return '\n';
  if (typeof node.value === 'string') return node.value;
  const children = node.children || [];
  const childText = (child) => plain(child, includeLinks, definitions, linkBaseUrl);
  if (includeLinks && ['link', 'linkReference'].includes(node.type)) {
    const label = children.map(childText).join('');
    let url = node.url || definitions.get(node.identifier);
    if (url && linkBaseUrl && !/^[a-z][a-z\d+.-]*:/i.test(url))
      url = new URL(url, linkBaseUrl).href;
    return url && label !== url ? `${label} (${url})` : label;
  }
  if (node.type === 'list') {
    return children
      .map((child, i) => `${node.ordered ? `${(node.start || 1) + i}.` : '-'} ${childText(child)}`)
      .join('\n');
  }
  const inline = ['paragraph', 'heading', 'strong', 'emphasis', 'delete', 'link', 'linkReference'];
  return children
    .map(childText)
    .join(inline.includes(node.type) ? '' : '\n\n')
    .trim();
}

function text(nodes, includeLinks = false, definitions, linkBaseUrl) {
  return nodes
    .map((node) => plain(node, includeLinks, definitions, linkBaseUrl))
    .filter(Boolean)
    .join('\n\n')
    .trim();
}

function section(nodes, name) {
  const start = nodes.findIndex(
    (node) => node.type === 'heading' && node.depth === 2 && plain(node).toLowerCase() === name
  );
  if (start < 0) return [];
  const rest = nodes.slice(start + 1);
  const end = rest.findIndex((node) => node.type === 'heading' && node.depth <= 2);
  return end < 0 ? rest : rest.slice(0, end);
}

export function parseRecipeContent(body = '', { linkBaseUrl } = {}) {
  const nodes = parser.parse(body).children;
  const directions = section(nodes, 'directions');
  const definitions = new Map(
    nodes.filter((node) => node.type === 'definition').map((node) => [node.identifier, node.url])
  );
  const root = { name: '', depth: 2, nodes: [], items: [] };
  const stack = [root];
  const steps = [];
  for (const node of directions) {
    if (node.type === 'heading') {
      while (stack.length > 1 && stack.at(-1).depth >= node.depth) stack.pop();
      const group = { name: plain(node), depth: node.depth, nodes: [], items: [] };
      stack.at(-1).items.push(group);
      stack.push(group);
    } else if (node.type === 'list' && node.ordered) {
      // Nested lists stay inside their parent step rather than being double-counted.
      for (const item of node.children) {
        const step = { '@type': 'HowToStep', text: plain(item).replace(/\s+/g, ' ').trim() };
        if (!step.text) throw new Error('Directions contains an empty ordered-list step');
        steps.push(step);
        stack.at(-1).items.push(step);
      }
    } else {
      stack.at(-1).nodes.push(node);
    }
  }
  function instructions(group) {
    const items = group.items.flatMap((item) =>
      item['@type'] === 'HowToStep' ? [item] : instructions(item)
    );
    if (!items.length) return [];
    const description = text(group.nodes);
    if (!group.name && !description) return items;
    return [
      {
        '@type': 'HowToSection',
        name: group.name || 'Directions',
        ...(description ? { description } : {}),
        itemListElement: items,
      },
    ];
  }
  const outsideDirections = nodes.filter((node) => !directions.includes(node));
  // The Directions heading itself carries no information in notes.
  const notes = outsideDirections.filter(
    (node) =>
      !(node.type === 'heading' && node.depth === 2 && plain(node).toLowerCase() === 'directions')
  );
  return {
    chefNote: text(section(nodes, "chef's note")),
    directionsText: text(directions, true, definitions, linkBaseUrl),
    notesText: text(notes, true, definitions, linkBaseUrl),
    steps,
    instructions: instructions(root),
  };
}

export function isIngredientDivider(value) {
  return /^-{3}\s+.+\s+-{3}$/.test(value);
}

export function recipeDescription(data, parsed) {
  if (data.description) return data.description;
  const sentences = parsed.chefNote.match(/[^.!?]*[.!?]+/g);
  return (
    sentences
      ?.slice(0, 2)
      .map((value) => value.trim())
      .join(' ') ||
    parsed.chefNote ||
    `${data.title} recipe`
  );
}
