import * as server from '../entries/pages/_layout.server.ts.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { server };
export const server_id = "src/routes/+layout.server.ts";
export const imports = ["_app/immutable/nodes/0.cf7f77b5.js","_app/immutable/chunks/scheduler.fe6f3ea4.js","_app/immutable/chunks/index.9bacf490.js","_app/immutable/chunks/Scroller.svelte_svelte_type_style_lang.4a207e83.js","_app/immutable/chunks/singletons.f5685d1d.js"];
export const stylesheets = ["_app/immutable/assets/0.b6fc53f0.css","_app/immutable/assets/Scroller.32d83c67.css"];
export const fonts = [];
