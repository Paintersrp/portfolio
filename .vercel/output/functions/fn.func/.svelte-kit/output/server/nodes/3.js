import * as universal from '../entries/pages/blog/_page.ts.js';

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/blog/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/blog/+page.ts";
export const imports = ["_app/immutable/nodes/3.1f16b179.js","_app/immutable/chunks/scheduler.fe6f3ea4.js","_app/immutable/chunks/index.c8da2d3c.js","_app/immutable/chunks/each.5347c708.js","_app/immutable/chunks/navigation.52d70230.js","_app/immutable/chunks/singletons.9c5809a4.js","_app/immutable/chunks/Content.dbacae05.js","_app/immutable/chunks/index.50c3b52d.js"];
export const stylesheets = ["_app/immutable/assets/Scroller.32d83c67.css"];
export const fonts = [];
