import { c as create_ssr_component, a as subscribe, g as get_store_value, e as escape, b as each, d as add_attribute } from "../../../../../chunks/ssr.js";
import { p as page } from "../../../../../chunks/stores.js";
import { l as listaTurnos, a as listaMecanicos } from "../../../../../chunks/store.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let { id } = $page.params;
  let turno = null;
  const turnoId = parseInt(id);
  const turnos = get_store_value(listaTurnos);
  turno = turnos.find((t) => t.id === turnoId);
  if (!turno) {
    console.error("Turno no encontrado");
  }
  let mecanicosLibres = get_store_value(listaMecanicos).filter((m) => m.estado === "libre");
  $$unsubscribe_page();
  return `<div class="max-w-lg mx-auto p-6 bg-white dark:bg-gray-900 shadow-xl rounded-lg border border-gray-200 dark:border-gray-600"><h1 class="text-2xl font-bold mb-6 text-gray-900 dark:text-gray-100">${turno ? `Asignar Mecánico al Turno ${escape(turno.fecha)} - ${escape(turno.hora)}` : `Turno no encontrado`}</h1> ${turno ? `<div class="mb-6"><label for="mecanico" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2" data-svelte-h="svelte-fub96e">Selecciona un Mecánico:</label> <select id="mecanico" class="block w-full p-3 border border-gray-300 rounded-lg bg-gradient-to-r from-gray-50 via-gray-100 to-gray-200 dark:from-gray-800 dark:via-gray-700 dark:to-gray-600 dark:border-gray-600 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-teal-500"><option value="" disabled data-svelte-h="svelte-1m45p04">Seleccione un mecánico</option>${each(mecanicosLibres, (mecanico) => {
    return `<option${add_attribute("value", mecanico.nombre, 0)}>${escape(mecanico.nombre)}</option>`;
  })}</select></div> <button class="w-full px-8 py-4 bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 text-white font-semibold rounded-lg shadow-xl transform transition-all hover:scale-105 hover:shadow-2xl hover:bg-gradient-to-r hover:from-teal-500 hover:via-teal-600 hover:to-teal-700 dark:bg-gradient-to-r dark:from-cyan-400 dark:via-cyan-500 dark:to-cyan-600 dark:hover:from-cyan-500 dark:hover:via-cyan-600 dark:hover:to-cyan-700 focus:outline-none focus:ring-2 focus:ring-teal-500" data-svelte-h="svelte-rn2lk4">Asignar Mecánico</button>` : ``}</div>`;
});
export {
  Page as default
};
