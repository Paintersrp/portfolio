import * as universal from '../entries/pages/blog/_slug_/_page.ts.js';

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/blog/_slug_/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/blog/[slug]/+page.ts";
export const imports = ["_app/immutable/nodes/5.a7184a12.js","_app/immutable/chunks/preload-helper.a4192956.js","_app/immutable/chunks/control.f5b05b5f.js","_app/immutable/chunks/scheduler.fe6f3ea4.js","_app/immutable/chunks/index.c8da2d3c.js","_app/immutable/chunks/each.5347c708.js","_app/immutable/chunks/Content.dbacae05.js","_app/immutable/chunks/index.50c3b52d.js"];
export const stylesheets = [];
export const fonts = [];
