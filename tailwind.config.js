/** @type {import('tailwindcss').Config} */
//para poner un color en especifico llamado azulcobalto como #1f2937 se debe agregar en el archivo tailwind.config.js en la seccion extend el siguiente codigo

//module.exports = {
//  content: [
//    './src/**/*.{js,svelte,html}', // Asegúrate de incluir tus archivos .svelte
//  ],
//  darkMode: 'class', // or 'media' or 'class'
//  theme: {
//    extend: {
//      colors:{
//        azulcobalto: '#1f2937',
//        'dark-bg': '#1f2937', // Color de fondo oscuro
//        'light-bg': '#ffffff', // Color de fondo claro
//        'dark-text': '#e5e7eb', // Color del texto oscuro
//        'light-text': '#000000' // Color del texto claro
//      }
//    },
//  },
//  plugins: [],
//}
//

/** @type {import('tailwindcss').Config} */
//para poner un color en especifico llamado azulcobalto como #1f2937 se debe agregar en el archivo tailwind.config.js en la seccion extend el siguiente codigo

export default {
  content: [
    './src/**/*.{js,svelte,html}', // Asegúrate de incluir tus archivos .svelte
  ],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        azulcobalto: '#1f2937',
        'dark-bg': '#1f2937', // Color de fondo oscuro
        'light-bg': '#ffffff', // Color de fondo claro
        'dark-text': '#e5e7eb', // Color del texto oscuro
        'light-text': '#000000' // Color del texto claro
      }
    },
  },
  plugins: [],
}
