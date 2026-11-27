// Cloudflare Worker that answers /.well-known/search for Mise.
//
// GitHub Pages can only serve files, so it can't answer a question. The free Workers plan
// allows 10 ms of CPU per request but a full second at startup, so the index is bundled into
// the Worker and prepared once at startup, leaving each request only the ranking.
// `pnpm run agent-search:worker` writes index.json here before a deploy.
import records from './index.json';
import { createHandler } from './handler.mjs';

const handleRequest = createHandler(records);

export default { fetch: (request) => handleRequest(request) };
