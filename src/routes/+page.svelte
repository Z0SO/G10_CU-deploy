
<script>
  import { get } from 'svelte/store';
  import { listaTurnos, listaMecanicos } from '../store.js';

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

<div class="max-w-lg mx-auto p-6 bg-white dark:bg-gray-900 rounded-xl shadow-lg space-y-6">
  <h1 class="text-4xl font-extrabold text-center text-gray-800 dark:text-gray-200">
        Seleccione una opción
  </h1>
  
  <ul class="space-y-6">
    <li>
      <a
        href="/turnos/list"
        class="block w-full text-center px-8 py-4 bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 text-white font-semibold rounded-lg shadow-xl transform transition-all hover:scale-105 hover:shadow-2xl hover:bg-gradient-to-r hover:from-teal-500 hover:via-teal-600 hover:to-teal-700 dark:bg-gradient-to-r dark:from-cyan-400 dark:via-cyan-500 dark:to-cyan-600 dark:hover:from-cyan-500 dark:hover:via-cyan-600 dark:hover:to-cyan-700">
        Visualizar turnos disponibles
      </a>
    </li>
    <!-- Puedes añadir más items aquí con el mismo estilo -->
    <!--- seccion de informacion de vehiculos -->
    <li>
      <a
        href="/vehiculos/list"
        class="block w-full text-center px-8 py-4 bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 text-white font-semibold rounded-lg shadow-xl transform transition-all hover:scale-105 hover:shadow-2xl hover:bg-gradient-to-r hover:from-teal-500 hover:via-teal-600 hover:to-teal-700 dark:bg-gradient-to-r dark:from-cyan-400 dark:via-cyan-500 dark:to-cyan-600 dark:hover:from-cyan-500 dark:hover:via-cyan-600 dark:hover:to-cyan-700">
                Información de vehículos
      </a>
    </li>
    
    <!-- añadimos la consultar informacion de tarifas --> 
    <li>
      <a
        href="/tarifas/"
        class="block w-full text-center px-8 py-4 bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 text-white font-semibold rounded-lg shadow-xl transform transition-all hover:scale-105 hover:shadow-2xl hover:bg-gradient-to-r hover:from-teal-500 hover:via-teal-600 hover:to-teal-700 dark:bg-gradient-to-r dark:from-cyan-400 dark:via-cyan-500 dark:to-cyan-600 dark:hover:from-cyan-500 dark:hover:via-cyan-600 dark:hover:to-cyan-700">
        Consultar tarifas
      </a>
  </ul>
</div>

<style>
  @tailwind base;
  @tailwind components;
  @tailwind utilities;

  /* Efecto de transformación y sombra */
  .block {
    transition: transform 0.3s ease, box-shadow 0.3s ease, background 0.3s ease;
  }

  /* Efectos de hover mejorados */
  .block:hover {
    transform: scale(1.05);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.3);
  }
</style>
