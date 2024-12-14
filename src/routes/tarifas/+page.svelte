<script>
    import { tarifasVehiculos } from '../../store.js';
    import { get } from 'svelte/store';

    let selectedModelo = '';
    let selectedUtilidad = '';
    let tarifa = null;
    let error = '';

    function consultarTarifa() {
        const tarifas = get(tarifasVehiculos);
        const tarifaEncontrada = tarifas.find(
            t => t.modelo === selectedModelo && t.utilidad === selectedUtilidad
        );

        if (tarifaEncontrada) {
            tarifa = tarifaEncontrada.costo;
            error = '';
        } else {
            tarifa = null;
            error = 'No existe información de tarifa para este vehículo';
        }
    }
</script>

<div class="max-w-lg mx-auto p-6 bg-white dark:bg-gray-900 shadow-xl rounded-lg">
    <h1 class="text-2xl font-bold mb-6">Consulta de Tarifas</h1>

    <div class="space-y-4">
        <div>
            <label for="modelo" class="block text-sm font-medium">Modelo del Vehículo</label>
            <select
                id="modelo"
                bind:value={selectedModelo}
                class="mt-1 block w-full p-2 border rounded-md"
            >
                <option value="">Seleccione un modelo</option>
                <option value="Sedan">Sedan</option>
                <option value="SUV">SUV</option>
                <option value="Pickup">Pickup</option>
                <option value="Van">Van</option>
                <option value="Camioneta">Camioneta</option>
                <option value="Camión">Camión</option>
                <option value="Motocicleta">Motocicleta</option>
            </select>
        </div>

        <div>
            <label for="utilidad" class="block text-sm font-medium">Utilidad</label>
            <select
                id="utilidad"
                bind:value={selectedUtilidad}
                class="mt-1 block w-full p-2 border rounded-md"
            >
                <option value="">Seleccione la utilidad</option>
                <option value="Particular">Particular</option>
                <option value="Comercial">Comercial</option>
                <option value="Taxi">Taxi</option>
                <option value="Remis">Remis</option>
            </select>
        </div>

        <button
            class="block w-full text-center px-8 py-4 bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 text-white font-semibold rounded-lg shadow-xl transform transition-all hover:scale-105 hover:shadow-2xl hover:bg-gradient-to-r hover:from-teal-500 hover:via-teal-600 hover:to-teal-700 dark:bg-gradient-to-r dark:from-cyan-400 dark:via-cyan-500 dark:to-cyan-600 dark:hover:from-cyan-500 dark:hover:via-cyan-600 dark:hover:to-cyan-700"
            on:click={consultarTarifa}
        >
            Consultar Tarifa
        </button>

        {#if tarifa !== null}
            <div class="mt-4 p-4 bg-green-100 text-green-800 rounded-md">
                <p>Costo de la revisión: ${tarifa}</p>
            </div>
        {/if}

        {#if error}
            <div class="mt-4 p-4 bg-red-100 text-red-800 rounded-md">
                <p>{error}</p>
            </div>
        {/if}
    </div>
</div>
