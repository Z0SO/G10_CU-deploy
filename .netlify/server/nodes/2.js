

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.BT3uEpXN.js","_app/immutable/chunks/scheduler.D_9yqOoj.js","_app/immutable/chunks/index.BzFiGQGH.js"];
export const stylesheets = [];
export const fonts = [];
