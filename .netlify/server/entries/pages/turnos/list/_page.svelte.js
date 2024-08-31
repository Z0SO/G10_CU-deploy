import { c as create_ssr_component, a as subscribe, g as get_store_value, b as each, d as add_attribute, e as escape } from "../../../../chunks/ssr.js";
import { l as listaTurnos, a as listaMecanicos } from "../../../../chunks/store.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $listaTurnos, $$unsubscribe_listaTurnos;
  $$unsubscribe_listaTurnos = subscribe(listaTurnos, (value) => $listaTurnos = value);
  function filtrarTurnosSinMecanico() {
    return get_store_value(listaTurnos).filter((turno) => turno.mecanico === null);
  }
  const turnosFiltrados = filtrarTurnosSinMecanico();
  const mecanicosLibres = get_store_value(listaMecanicos).filter((m) => m.estado === "libre");
  const todosOcupados = mecanicosLibres.length === 0;
  console.log("Turnos Filtrados:", turnosFiltrados);
  console.log("Mecánicos Libres:", mecanicosLibres);
  console.log("Todos Ocupados:", todosOcupados);
  $$unsubscribe_listaTurnos();
  return `<div class="max-w-md mx-auto p-4"><h1 class="text-2xl font-semibold mb-4" data-svelte-h="svelte-szetap">Turnos disponibles</h1> ${todosOcupados ? `<p class="text-red-600 dark:text-red-400 font-medium" data-svelte-h="svelte-2aoasj">Todos los mecánicos están ocupados. No se pueden asignar turnos en este momento.</p>` : `<p class="mb-4 text-gray-600 dark:text-gray-400" data-svelte-h="svelte-1g5vjpl">Selecciona un turno para asignar un mecánico</p> <ul class="space-y-2">${each(turnosFiltrados, (turno) => {
    return `<li><a${add_attribute("href", `/turnos/asignar-mecanico/${turno.id}`, 0)} class="block p-4 bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg shadow hover:bg-gray-100 dark:hover:bg-gray-600 transition">${escape(turno.fecha)} - ${escape(turno.hora)} - ${escape(turno.vehiculo)}</a> </li>`;
  })}</ul>`} <h2 class="text-xl font-semibold mt-6 mb-4" data-svelte-h="svelte-hah55g">Turnos con mecánico asignado</h2> <ul class="space-y-2">${each($listaTurnos, (turno) => {
    return `${turno.mecanico !== null ? `<li class="p-4 bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg shadow">${escape(turno.fecha)} - ${escape(turno.hora)} - ${escape(turno.vehiculo)} - ${escape(turno.mecanico)} </li>` : ``}`;
  })}</ul></div>`;
});
export {
  Page as default
};
