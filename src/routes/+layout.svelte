
<script>
  import Navbar from '../components/layout/Navbar.svelte';
  import Footer from '../components/layout/Footer.svelte'; // Importa el componente Footer
</script>

<div class="min-h-screen flex flex-col bg-gray-100 dark:bg-gray-900">
  <Navbar />
  <main class="flex-grow">
    <slot />
  </main>
  <Footer /> <!-- Incluye el Footer aquí -->
</div>
