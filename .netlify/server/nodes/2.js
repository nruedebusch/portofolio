

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.js_KrKSW.js","_app/immutable/chunks/scheduler.C7NkljfN.js","_app/immutable/chunks/index.D9yXyHGN.js","_app/immutable/chunks/stores.CBEmzvst.js","_app/immutable/chunks/entry.BOcpbEbK.js"];
export const stylesheets = ["_app/immutable/assets/2.B7ILW3mh.css"];
export const fonts = [];
