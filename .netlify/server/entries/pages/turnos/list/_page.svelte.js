import { c as create_ssr_component, a as subscribe, g as get_store_value, b as each, d as add_attribute, e as escape } from "../../../../chunks/ssr.js";
import { l as listaTurnos, a as listaMecanicos } from "../../../../chunks/store.js";
const css = {
  code: "@tailwind base;@tailwind components;@tailwind utilities;a.svelte-1w5ps9t{transition:transform 0.3s ease, box-shadow 0.3s ease}a.svelte-1w5ps9t:hover{transform:scale(1.05);box-shadow:0 10px 20px rgba(0, 0, 0, 0.2)}",
  map: `{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["\\n<script>\\n  import { get } from 'svelte/store';\\n  import { listaTurnos, listaMecanicos } from '../../../store.js';\\n\\n  // Filtrar los turnos sin mecánico asignado\\n  function filtrarTurnosSinMecanico() {\\n    return get(listaTurnos).filter(turno => turno.mecanico === null);\\n  }\\n\\n  // Obtener turnos filtrados y mecánicos libres\\n  const turnosFiltrados = filtrarTurnosSinMecanico();\\n  const mecanicosLibres = get(listaMecanicos).filter(m => m.estado === 'libre');\\n  \\n  // Verificar si todos los mecánicos están ocupados\\n  const todosOcupados = mecanicosLibres.length === 0;\\n\\n  // Debugging\\n  console.log('Turnos Filtrados:', turnosFiltrados);\\n  console.log('Mecánicos Libres:', mecanicosLibres);\\n  console.log('Todos Ocupados:', todosOcupados);\\n<\/script>\\n\\n<div class=\\"max-w-6xl mx-auto p-4\\">\\n  <h1 class=\\"text-3xl font-bold mb-6 text-center text-gray-800 dark:text-gray-200\\">\\n    Seleccione un Turno para Asignar un Mecánico\\n  </h1>\\n\\n  <div class=\\"grid grid-cols-1 md:grid-cols-2 gap-6\\">\\n    <!-- Columna de Turnos Disponibles -->\\n    <div>\\n      <h2 class=\\"text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200 text-center\\">\\n        Turnos Disponibles\\n      </h2>\\n      {#if todosOcupados}\\n        <p class=\\"text-red-600 dark:text-red-400 font-medium text-center mb-6\\">\\n          Todos los mecánicos están ocupados. No se pueden asignar turnos en este momento.\\n        </p>\\n      {:else}\\n        <!-- <p class=\\"mb-4 text-gray-600 dark:text-gray-400 text-center\\"> -->\\n        <!--   Selecciona un turno para asignar un mecánico -->\\n        <!-- </p> -->\\n        <ul class=\\"space-y-4\\">\\n          {#each turnosFiltrados as turno}\\n            <li>\\n              <a href={\`/turnos/asignar-mecanico/\${turno.id}\`} class=\\"block p-4 bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg shadow-lg transform transition-all hover:scale-105 hover:bg-gray-100 dark:hover:bg-gray-600\\">\\n                <div class=\\"text-lg font-semibold\\">{turno.fecha} - {turno.hora}</div>\\n                <div class=\\"text-sm text-gray-500 dark:text-gray-400\\">{turno.vehiculo}</div>\\n              </a>\\n            </li>\\n          {/each}\\n        </ul>\\n      {/if}\\n    </div>\\n\\n    <!-- Columna de Turnos con Mecánico Asignado -->\\n    <div>\\n      <h2 class=\\"text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200 text-center\\">\\n        Turnos con Mecánico Asignado\\n      </h2>\\n      <ul class=\\"space-y-4\\">\\n        {#each $listaTurnos as turno}\\n          {#if turno.mecanico !== null}\\n            <li class=\\"p-4 bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg shadow-lg\\">\\n              <div class=\\"text-lg font-semibold\\">{turno.fecha} - {turno.hora}</div>\\n              <div class=\\"text-sm text-gray-500 dark:text-gray-400\\">{turno.vehiculo} - <span class=\\"font-medium text-gray-800 dark:text-gray-200\\">{turno.mecanico}</span></div>\\n            </li>\\n          {/if}\\n        {/each}\\n      </ul>\\n    </div>\\n  </div>\\n</div>\\n\\n<style>\\n  @tailwind base;\\n  @tailwind components;\\n  @tailwind utilities;\\n\\n  /* Estilo adicional para mejorar la animación y el aspecto visual */\\n  a {\\n    transition: transform 0.3s ease, box-shadow 0.3s ease;\\n  }\\n\\n  /* Mejora de efectos hover */\\n  a:hover {\\n    transform: scale(1.05);\\n    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);\\n  }\\n</style>\\n"],"names":[],"mappings":"AA2EE,UAAU,IAAI,CACd,UAAU,UAAU,CACpB,UAAU,SAAS,CAGnB,gBAAE,CACA,UAAU,CAAE,SAAS,CAAC,IAAI,CAAC,IAAI,CAAC,CAAC,UAAU,CAAC,IAAI,CAAC,IACnD,CAGA,gBAAC,MAAO,CACN,SAAS,CAAE,MAAM,IAAI,CAAC,CACtB,UAAU,CAAE,CAAC,CAAC,IAAI,CAAC,IAAI,CAAC,KAAK,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,GAAG,CAC3C"}`
};
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
  $$result.css.add(css);
  $$unsubscribe_listaTurnos();
  return `<div class="max-w-6xl mx-auto p-4"><h1 class="text-3xl font-bold mb-6 text-center text-gray-800 dark:text-gray-200" data-svelte-h="svelte-ps3bik">Seleccione un Turno para Asignar un Mecánico</h1> <div class="grid grid-cols-1 md:grid-cols-2 gap-6"> <div><h2 class="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200 text-center" data-svelte-h="svelte-12y46vu">Turnos Disponibles</h2> ${todosOcupados ? `<p class="text-red-600 dark:text-red-400 font-medium text-center mb-6" data-svelte-h="svelte-1ost72i">Todos los mecánicos están ocupados. No se pueden asignar turnos en este momento.</p>` : `   <ul class="space-y-4">${each(turnosFiltrados, (turno) => {
    return `<li><a${add_attribute("href", `/turnos/asignar-mecanico/${turno.id}`, 0)} class="block p-4 bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg shadow-lg transform transition-all hover:scale-105 hover:bg-gray-100 dark:hover:bg-gray-600 svelte-1w5ps9t"><div class="text-lg font-semibold">${escape(turno.fecha)} - ${escape(turno.hora)}</div> <div class="text-sm text-gray-500 dark:text-gray-400">${escape(turno.vehiculo)}</div></a> </li>`;
  })}</ul>`}</div>  <div><h2 class="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200 text-center" data-svelte-h="svelte-pkbg0v">Turnos con Mecánico Asignado</h2> <ul class="space-y-4">${each($listaTurnos, (turno) => {
    return `${turno.mecanico !== null ? `<li class="p-4 bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg shadow-lg"><div class="text-lg font-semibold">${escape(turno.fecha)} - ${escape(turno.hora)}</div> <div class="text-sm text-gray-500 dark:text-gray-400">${escape(turno.vehiculo)} - <span class="font-medium text-gray-800 dark:text-gray-200">${escape(turno.mecanico)}</span></div> </li>` : ``}`;
  })}</ul></div></div> </div>`;
});
export {
  Page as default
};
