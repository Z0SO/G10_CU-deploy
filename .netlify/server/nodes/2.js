

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.BBj0owex.js","_app/immutable/chunks/scheduler.D_9yqOoj.js","_app/immutable/chunks/index.BzFiGQGH.js","_app/immutable/chunks/store.jcB0GWO_.js","_app/immutable/chunks/index.DT4emJkJ.js"];
export const stylesheets = ["_app/immutable/assets/2.B_Mx1f8U.css"];
export const fonts = [];
