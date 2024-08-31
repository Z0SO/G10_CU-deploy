

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/turnos/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.me5JXZ_1.js","_app/immutable/chunks/scheduler.CkRtTmwH.js","_app/immutable/chunks/index.BB8-Jmkb.js"];
export const stylesheets = [];
export const fonts = [];
