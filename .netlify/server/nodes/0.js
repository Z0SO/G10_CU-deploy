

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.DiwHdYuE.js","_app/immutable/chunks/scheduler.D_9yqOoj.js","_app/immutable/chunks/index.CxqNTqUg.js"];
export const stylesheets = ["_app/immutable/assets/0.D8ek7Q4u.css"];
export const fonts = [];
