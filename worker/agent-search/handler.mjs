// Answers /.well-known/search for Mise from an index held in memory.
import {
  createAgentIndex,
  searchAgentIndex,
  renderMarkdown,
  renderJson,
  USAGE,
  MAX_QUERY_LENGTH,
} from '../../src/lib/agent-search.mjs';

// Anyone may call it from anywhere, since the recipes are public pages anyway.
const CORS = {
  'access-control-allow-origin': '*',
  'access-control-allow-methods': 'GET, HEAD, OPTIONS',
  'access-control-allow-headers': 'content-type',
};

function reply(body, status, type) {
  return new Response(body, {
    status,
    headers: {
      ...CORS,
      'content-type': `${type}; charset=utf-8`,
      'cache-control': status === 200 ? 'public, max-age=300' : 'no-store',
      'x-robots-tag': 'noindex',
    },
  });
}

/** A request handler over these index records. */
export function createHandler(records) {
  const index = createAgentIndex(records);
  // A first search at startup, where the time limit is far looser, so the first real request
  // doesn't pay to warm up the code.
  for (const q of ['brocolli pasta without nuts, meat or dairy', 'vegetarian dinner for kids under 30 minutes'])
    renderMarkdown(searchAgentIndex(index, q));
  return function handleRequest(request) {
    const url = new URL(request.url);
    if (request.method === 'OPTIONS') return new Response(null, { status: 204, headers: CORS });
    if (!['GET', 'HEAD'].includes(request.method)) return reply('Use GET.\n', 405, 'text/plain');
    if (!/^\/(?:mise\/)?\.well-known\/search\/?$/.test(url.pathname))
      return reply('Not found. Try /.well-known/search?q=dal\n', 404, 'text/plain');

    const q = (url.searchParams.get('q') || '').trim();
    const format = url.searchParams.get('format') === 'json' ? 'json' : 'markdown';
    if (!q) return reply(USAGE, 200, 'text/markdown');
    if (q.length > MAX_QUERY_LENGTH)
      return reply(`Keep q under ${MAX_QUERY_LENGTH} characters.\n`, 400, 'text/plain');

    const params = Object.fromEntries(
      ['max_minutes', 'role', 'cuisine', 'limit'].map((k) => [k, url.searchParams.get(k) || undefined])
    );
    params.diet = url.searchParams.getAll('diet');
    const result = searchAgentIndex(index, q, params);
    return format === 'json'
      ? reply(JSON.stringify(renderJson(result), null, 2), 200, 'application/json')
      : reply(renderMarkdown(result), 200, 'text/markdown');
  };
}
