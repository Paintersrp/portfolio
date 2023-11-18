import * as server from '../entries/pages/_layout.server.ts.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { server };
export const server_id = "src/routes/+layout.server.ts";
export const imports = ["_app/immutable/nodes/0.49eb711a.js","_app/immutable/chunks/scheduler.fe6f3ea4.js","_app/immutable/chunks/index.c8da2d3c.js","_app/immutable/chunks/each.5347c708.js","_app/immutable/chunks/singletons.9c5809a4.js","_app/immutable/chunks/index.50c3b52d.js","_app/immutable/chunks/navigation.52d70230.js","_app/immutable/chunks/Icon.071ba1ef.js"];
export const stylesheets = ["_app/immutable/assets/0.6817320b.css","_app/immutable/assets/Scroller.32d83c67.css"];
export const fonts = [];
