

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.d4740b67.js","_app/immutable/chunks/scheduler.fe6f3ea4.js","_app/immutable/chunks/index.9bacf490.js","_app/immutable/chunks/singletons.f5685d1d.js"];
export const stylesheets = [];
export const fonts = [];
