

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/tarifas/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.CzWE3irS.js","_app/immutable/chunks/scheduler.D_9yqOoj.js","_app/immutable/chunks/index.CxqNTqUg.js","_app/immutable/chunks/store.DbFXjVQw.js","_app/immutable/chunks/index.DT4emJkJ.js"];
export const stylesheets = [];
export const fonts = [];
