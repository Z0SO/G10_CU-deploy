

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/turnos/list/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/5.WlMwjxNx.js","_app/immutable/chunks/scheduler.D_9yqOoj.js","_app/immutable/chunks/index.BzFiGQGH.js","_app/immutable/chunks/store.fkWw4NKk.js","_app/immutable/chunks/index.DT4emJkJ.js"];
export const stylesheets = [];
export const fonts = [];
