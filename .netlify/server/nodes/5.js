

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/turnos/list/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/5.C7I3T913.js","_app/immutable/chunks/scheduler.CkRtTmwH.js","_app/immutable/chunks/index.BB8-Jmkb.js","_app/immutable/chunks/store.D22OMOaH.js","_app/immutable/chunks/index.Bc7iwneS.js"];
export const stylesheets = [];
export const fonts = [];
