

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/turnos/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.78rFHd4C.js","_app/immutable/chunks/scheduler.D_9yqOoj.js","_app/immutable/chunks/index.BzFiGQGH.js"];
export const stylesheets = [];
export const fonts = [];
