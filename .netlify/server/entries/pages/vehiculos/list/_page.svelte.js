import { c as create_ssr_component, a as subscribe, b as each, e as escape } from "../../../../chunks/ssr.js";
import { w as writable } from "../../../../chunks/index.js";
import { b as listaVehiculos } from "../../../../chunks/store.js";
const css = {
  code: "@tailwind base;@tailwind components;@tailwind utilities;",
  map: `{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<script>\\n  import { writable } from 'svelte/store';\\n  import { listaVehiculos } from '../../../store.js';\\n\\n  // Crear un store para el input de la búsqueda\\n  const searchInput = writable('');\\n\\n  // Función para filtrar vehículos por patente\\n  function filtrarVehiculos(patente) {\\n    const vehiculos = $listaVehiculos || [];\\n    return vehiculos.filter(vehiculo =>\\n      vehiculo.patente.toLowerCase().includes(patente.toLowerCase())\\n    );\\n  }\\n\\n  // Store para los vehículos filtrados\\n  const vehiculosFiltrados = writable($listaVehiculos);\\n\\n  // Actualizar los vehículos filtrados en base al input de búsqueda\\n  function actualizarFiltro(event) {\\n    searchInput.set(event.target.value);\\n    vehiculosFiltrados.set(filtrarVehiculos(event.target.value));\\n  }\\n<\/script>\\n\\n<div class=\\"max-w-6xl mx-auto p-6 bg-white dark:bg-gray-900 rounded-xl shadow-lg space-y-2 mb-6\\">\\n  <h1 class=\\"text-4xl font-extrabold text-center text-gray-800 dark:text-gray-200\\">\\n    Información de Vehículos\\n  </h1>\\n\\n  <div class=\\"flex justify-center\\">\\n    <input\\n      type=\\"text\\"\\n      placeholder=\\"Buscar por patente\\"\\n      class=\\"w-full max-w-md px-4 py-2 border border-gray-300 rounded-md dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300\\"\\n      on:input={actualizarFiltro}\\n    />\\n  </div>\\n\\n  <table class=\\"min-w-full divide-y divide-gray-200 dark:divide-gray-700 rounded-lg overflow-hidden\\">\\n    <thead class=\\"bg-gray-50 dark:bg-gray-700\\">\\n      <tr>\\n        <th class=\\"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider dark:text-gray-300\\">Patente</th>\\n        <th class=\\"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider dark:text-gray-300\\">Apoderado</th>\\n        <th class=\\"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider dark:text-gray-300\\">Periodicidad</th>\\n        <th class=\\"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider dark:text-gray-300\\">Estado</th>\\n        <th class=\\"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider dark:text-gray-300\\">Marca</th>\\n        <th class=\\"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider dark:text-gray-300\\">Modelo</th>\\n        <th class=\\"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider dark:text-gray-300\\">Año</th>\\n      </tr>\\n    </thead>\\n    <tbody class=\\"bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700\\">\\n      {#each $vehiculosFiltrados as vehiculo}\\n        <tr>\\n          <td class=\\"px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-300\\">{vehiculo.patente}</td>\\n          <td class=\\"px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-300\\">{vehiculo.apoderado}</td>\\n          <td class=\\"px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-300\\">{vehiculo.periodicidad}</td>\\n          <td class=\\"px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-300\\">{vehiculo.estado}</td>\\n          <td class=\\"px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-300\\">{vehiculo.marca}</td>\\n          <td class=\\"px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-300\\">{vehiculo.modelo}</td>\\n          <td class=\\"px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-300\\">{vehiculo.año}</td>\\n        </tr>\\n      {/each}\\n    </tbody>\\n  </table>\\n</div>\\n\\n<style>\\n  @tailwind base;\\n  @tailwind components;\\n  @tailwind utilities;\\n</style>\\n"],"names":[],"mappings":"AAoEE,UAAU,IAAI,CACd,UAAU,UAAU,CACpB,UAAU,SAAS"}`
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $listaVehiculos, $$unsubscribe_listaVehiculos;
  let $vehiculosFiltrados, $$unsubscribe_vehiculosFiltrados;
  $$unsubscribe_listaVehiculos = subscribe(listaVehiculos, (value) => $listaVehiculos = value);
  const vehiculosFiltrados = writable($listaVehiculos);
  $$unsubscribe_vehiculosFiltrados = subscribe(vehiculosFiltrados, (value) => $vehiculosFiltrados = value);
  $$result.css.add(css);
  $$unsubscribe_listaVehiculos();
  $$unsubscribe_vehiculosFiltrados();
  return `<div class="max-w-6xl mx-auto p-6 bg-white dark:bg-gray-900 rounded-xl shadow-lg space-y-2 mb-6"><h1 class="text-4xl font-extrabold text-center text-gray-800 dark:text-gray-200" data-svelte-h="svelte-goxs09">Información de Vehículos</h1> <div class="flex justify-center"><input type="text" placeholder="Buscar por patente" class="w-full max-w-md px-4 py-2 border border-gray-300 rounded-md dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300"></div> <table class="min-w-full divide-y divide-gray-200 dark:divide-gray-700 rounded-lg overflow-hidden"><thead class="bg-gray-50 dark:bg-gray-700" data-svelte-h="svelte-16adqyk"><tr><th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider dark:text-gray-300">Patente</th> <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider dark:text-gray-300">Apoderado</th> <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider dark:text-gray-300">Periodicidad</th> <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider dark:text-gray-300">Estado</th> <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider dark:text-gray-300">Marca</th> <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider dark:text-gray-300">Modelo</th> <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider dark:text-gray-300">Año</th></tr></thead> <tbody class="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700">${each($vehiculosFiltrados, (vehiculo) => {
    return `<tr><td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-300">${escape(vehiculo.patente)}</td> <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-300">${escape(vehiculo.apoderado)}</td> <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-300">${escape(vehiculo.periodicidad)}</td> <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-300">${escape(vehiculo.estado)}</td> <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-300">${escape(vehiculo.marca)}</td> <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-300">${escape(vehiculo.modelo)}</td> <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-300">${escape(vehiculo.año)}</td> </tr>`;
  })}</tbody></table> </div>`;
});
export {
  Page as default
};
