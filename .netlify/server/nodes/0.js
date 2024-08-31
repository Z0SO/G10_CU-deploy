

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.hd6t20nW.js","_app/immutable/chunks/scheduler.CkRtTmwH.js","_app/immutable/chunks/index.BB8-Jmkb.js"];
export const stylesheets = ["_app/immutable/assets/0.CdnhYIKd.css"];
export const fonts = [];
