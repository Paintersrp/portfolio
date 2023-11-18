

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.d619ea77.js","_app/immutable/chunks/scheduler.fe6f3ea4.js","_app/immutable/chunks/index.c8da2d3c.js","_app/immutable/chunks/singletons.9c5809a4.js"];
export const stylesheets = [];
export const fonts = [];
