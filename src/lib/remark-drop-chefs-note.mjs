// The chef's note is shown under the recipe title, so the rendered method leaves it out.
function headingText(node) {
  return (node.children || [])
    .map((child) => (typeof child.value === 'string' ? child.value : headingText(child)))
    .join('');
}

export default function remarkDropChefsNote() {
  return (tree, file) => {
    const path = String(file?.path || file?.history?.[0] || '');
    if (!/content[\\/]recipes[\\/]/.test(path)) return;
    const children = tree.children;
    const start = children.findIndex(
      (node) =>
        node.type === 'heading' &&
        node.depth === 2 &&
        /^chef[’']s note$/i.test(headingText(node).trim())
    );
    if (start < 0) return;
    let end = start + 1;
    while (end < children.length && !(children[end].type === 'heading' && children[end].depth <= 2))
      end++;
    children.splice(start, end - start);
  };
}
