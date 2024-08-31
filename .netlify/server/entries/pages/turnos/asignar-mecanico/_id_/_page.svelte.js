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
  return `<div class="max-w-md mx-auto p-4 bg-white dark:bg-gray-800 shadow-lg rounded-lg"><h1 class="text-2xl font-semibold mb-4">${turno ? `Asignar Mecánico al Turno ${escape(turno.fecha)} - ${escape(turno.hora)}` : `Turno no encontrado`}</h1> ${turno ? `<div class="mb-4"><select class="block w-full p-2 border border-gray-300 rounded-lg bg-white dark:bg-gray-700 dark:border-gray-600 text-gray-900 dark:text-gray-100"><option value="" disabled data-svelte-h="svelte-1m45p04">Seleccione un mecánico</option>${each(mecanicosLibres, (mecanico) => {
    return `<option${add_attribute("value", mecanico.nombre, 0)}>${escape(mecanico.nombre)}</option>`;
  })}</select></div> <button class="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600" data-svelte-h="svelte-1c2mjm5">Asignar Mecánico</button>` : ``}</div>`;
});
export {
  Page as default
};
