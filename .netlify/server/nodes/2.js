

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.9i_PGOC8.js","_app/immutable/chunks/scheduler.D_9yqOoj.js","_app/immutable/chunks/index.CxqNTqUg.js","_app/immutable/chunks/store.DbFXjVQw.js","_app/immutable/chunks/index.DT4emJkJ.js"];
export const stylesheets = ["_app/immutable/assets/2.CDMyOhMt.css"];
export const fonts = [];
