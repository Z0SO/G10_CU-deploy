
<script>
  import { page } from '$app/stores';
  import { listaTurnos, listaMecanicos } from '../../../../store.js';
  import { get } from 'svelte/store';
  import { goto } from '$app/navigation';

  let { id } = $page.params;
  let turno = null;
  let selectedMecanico = null;
  const turnoId = parseInt(id);
  const turnos = get(listaTurnos);
  turno = turnos.find(t => t.id === turnoId);

  if (!turno) {
    console.error('Turno no encontrado');
  }

  let mecanicosLibres = get(listaMecanicos).filter(m => m.estado === 'libre');

  function asignarMecanico() {
    listaTurnos.update(turnos => {
      const turnoIndex = turnos.findIndex(t => t.id === turnoId);
      if (turnoIndex !== -1) {
        turnos[turnoIndex].mecanico = selectedMecanico;
      }
      return turnos;
    });

    listaMecanicos.update(mecanicos => {
      const mecanicoIndex = mecanicos.findIndex(m => m.nombre === selectedMecanico);
      if (mecanicoIndex !== -1) {
        mecanicos[mecanicoIndex].estado = 'ocupado';
      }
      return mecanicos;
    });

    goto('/turnos/list');
  }
</script>

<div class="max-w-lg mx-auto p-6 bg-white dark:bg-gray-900 shadow-xl rounded-lg border border-gray-200 dark:border-gray-600">
  <h1 class="text-2xl font-bold mb-6 text-gray-900 dark:text-gray-100">
    {#if turno}
      Asignar Mecánico al Turno {turno.fecha} - {turno.hora}
    {:else}
      Turno no encontrado
    {/if}
  </h1>

  {#if turno}
    <div class="mb-6">
      <label for="mecanico" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Selecciona un Mecánico:</label>
      <select id="mecanico" bind:value={selectedMecanico} class="block w-full p-3 border border-gray-300 rounded-lg bg-gradient-to-r from-gray-50 via-gray-100 to-gray-200 dark:from-gray-800 dark:via-gray-700 dark:to-gray-600 dark:border-gray-600 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-teal-500">
        <option value="" disabled>Seleccione un mecánico</option>
        {#each mecanicosLibres as mecanico}
          <option value={mecanico.nombre}>{mecanico.nombre}</option>
        {/each}
      </select>
    </div>
    <button on:click={asignarMecanico} class="w-full px-8 py-4 bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 text-white font-semibold rounded-lg shadow-xl transform transition-all hover:scale-105 hover:shadow-2xl hover:bg-gradient-to-r hover:from-teal-500 hover:via-teal-600 hover:to-teal-700 dark:bg-gradient-to-r dark:from-cyan-400 dark:via-cyan-500 dark:to-cyan-600 dark:hover:from-cyan-500 dark:hover:via-cyan-600 dark:hover:to-cyan-700 focus:outline-none focus:ring-2 focus:ring-teal-500">
      Asignar Mecánico
    </button>
  {/if}
</div>
