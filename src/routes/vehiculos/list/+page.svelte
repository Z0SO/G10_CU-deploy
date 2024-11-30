<script>
  import { writable } from 'svelte/store';
  import { listaVehiculos } from '../../../store.js';

  // Crear un store para el input de la búsqueda
  const searchInput = writable('');

  // Función para filtrar vehículos por patente
  function filtrarVehiculos(patente) {
    const vehiculos = $listaVehiculos || [];
    return vehiculos.filter(vehiculo =>
      vehiculo.patente.toLowerCase().includes(patente.toLowerCase())
    );
  }

  // Store para los vehículos filtrados
  const vehiculosFiltrados = writable($listaVehiculos);

  // Actualizar los vehículos filtrados en base al input de búsqueda
  function actualizarFiltro(event) {
    searchInput.set(event.target.value);
    vehiculosFiltrados.set(filtrarVehiculos(event.target.value));
  }
</script>

<div class="max-w-6xl mx-auto p-6 bg-white dark:bg-gray-900 rounded-xl shadow-lg space-y-2 mb-6">
  <h1 class="text-4xl font-extrabold text-center text-gray-800 dark:text-gray-200">
    Información de Vehículos
  </h1>

  <div class="flex justify-center">
    <input
      type="text"
      placeholder="Buscar por patente"
      class="w-full max-w-md px-4 py-2 border border-gray-300 rounded-md dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300"
      on:input={actualizarFiltro}
    />
  </div>

  <table class="min-w-full divide-y divide-gray-200 dark:divide-gray-700 rounded-lg overflow-hidden">
    <thead class="bg-gray-50 dark:bg-gray-700">
      <tr>
        <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider dark:text-gray-300">Patente</th>
        <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider dark:text-gray-300">Apoderado</th>
        <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider dark:text-gray-300">Periodicidad</th>
        <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider dark:text-gray-300">Estado</th>
        <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider dark:text-gray-300">Marca</th>
        <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider dark:text-gray-300">Modelo</th>
        <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider dark:text-gray-300">Año</th>
      </tr>
    </thead>
    <tbody class="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700">
      {#each $vehiculosFiltrados as vehiculo}
        <tr>
          <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-300">{vehiculo.patente}</td>
          <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-300">{vehiculo.apoderado}</td>
          <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-300">{vehiculo.periodicidad}</td>
          <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-300">{vehiculo.estado}</td>
          <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-300">{vehiculo.marca}</td>
          <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-300">{vehiculo.modelo}</td>
          <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-300">{vehiculo.año}</td>
        </tr>
      {/each}
    </tbody>
  </table>
</div>

<style>
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
</style>
