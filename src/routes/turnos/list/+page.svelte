
<script>
  import { get } from 'svelte/store';
  import { listaTurnos, listaMecanicos } from '../../../store.js';

  // Filtrar los turnos sin mecánico asignado
  function filtrarTurnosSinMecanico() {
    return get(listaTurnos).filter(turno => turno.mecanico === null);
  }

  // Obtener turnos filtrados y mecánicos libres
  const turnosFiltrados = filtrarTurnosSinMecanico();
  const mecanicosLibres = get(listaMecanicos).filter(m => m.estado === 'libre');
  
  // Verificar si todos los mecánicos están ocupados
  const todosOcupados = mecanicosLibres.length === 0;

  // Debugging
  console.log('Turnos Filtrados:', turnosFiltrados);
  console.log('Mecánicos Libres:', mecanicosLibres);
  console.log('Todos Ocupados:', todosOcupados);
</script>

<div class="max-w-6xl mx-auto p-4">
  <h1 class="text-3xl font-bold mb-6 text-center text-gray-800 dark:text-gray-200">
    Seleccione un Turno para Asignar un Mecánico
  </h1>

  <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
    <!-- Columna de Turnos Disponibles -->
    <div>
      <h2 class="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200 text-center">
        Turnos Disponibles
      </h2>
      {#if todosOcupados}
        <p class="text-red-600 dark:text-red-400 font-medium text-center mb-6">
          Todos los mecánicos están ocupados. No se pueden asignar turnos en este momento.
        </p>
      {:else}
        <!-- <p class="mb-4 text-gray-600 dark:text-gray-400 text-center"> -->
        <!--   Selecciona un turno para asignar un mecánico -->
        <!-- </p> -->
        <ul class="space-y-4">
          {#each turnosFiltrados as turno}
            <li>
              <a href={`/turnos/asignar-mecanico/${turno.id}`} class="block p-4 bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg shadow-lg transform transition-all hover:scale-105 hover:bg-gray-100 dark:hover:bg-gray-600">
                <div class="text-lg font-semibold">{turno.fecha} - {turno.hora}</div>
                <div class="text-sm text-gray-500 dark:text-gray-400">{turno.vehiculo}</div>
              </a>
            </li>
          {/each}
        </ul>
      {/if}
    </div>

    <!-- Columna de Turnos con Mecánico Asignado -->
    <div>
      <h2 class="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200 text-center">
        Turnos con Mecánico Asignado
      </h2>
      <ul class="space-y-4">
        {#each $listaTurnos as turno}
          {#if turno.mecanico !== null}
            <li class="p-4 bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg shadow-lg">
              <div class="text-lg font-semibold">{turno.fecha} - {turno.hora}</div>
              <div class="text-sm text-gray-500 dark:text-gray-400">{turno.vehiculo} - <span class="font-medium text-gray-800 dark:text-gray-200">{turno.mecanico}</span></div>
            </li>
          {/if}
        {/each}
      </ul>
    </div>
  </div>
</div>

<style>
  @tailwind base;
  @tailwind components;
  @tailwind utilities;

  /* Estilo adicional para mejorar la animación y el aspecto visual */
  a {
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }

  /* Mejora de efectos hover */
  a:hover {
    transform: scale(1.05);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  }
</style>
