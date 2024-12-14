

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/turnos/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/4.BS_qi8nN.js","_app/immutable/chunks/scheduler.D_9yqOoj.js","_app/immutable/chunks/index.CxqNTqUg.js"];
export const stylesheets = [];
export const fonts = [];
