

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.031a8e5c.js","_app/immutable/chunks/scheduler.fe6f3ea4.js","_app/immutable/chunks/index.c8da2d3c.js","_app/immutable/chunks/Content.dbacae05.js","_app/immutable/chunks/index.50c3b52d.js","_app/immutable/chunks/Icon.071ba1ef.js","_app/immutable/chunks/each.5347c708.js"];
export const stylesheets = ["_app/immutable/assets/2.f091eb7f.css","_app/immutable/assets/Scroller.32d83c67.css"];
export const fonts = [];
