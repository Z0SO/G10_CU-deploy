import { c as create_ssr_component } from "../../chunks/ssr.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="max-w-md mx-auto p-4" data-svelte-h="svelte-16i0mul"><h1 class="text-2xl font-semibold mb-4">¡Hola! Director Técnico</h1> <ul class="space-y-2"><li><a href="/turnos/list" class="block text-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 transition">Visualizar turnos disponibles</a></li></ul></div>`;
});
export {
  Page as default
};
