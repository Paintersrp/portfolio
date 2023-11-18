

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.e81196af.js","_app/immutable/chunks/scheduler.fe6f3ea4.js","_app/immutable/chunks/index.9bacf490.js","_app/immutable/chunks/Scroller.svelte_svelte_type_style_lang.4a207e83.js"];
export const stylesheets = ["_app/immutable/assets/2.f091eb7f.css","_app/immutable/assets/Scroller.32d83c67.css"];
export const fonts = [];
