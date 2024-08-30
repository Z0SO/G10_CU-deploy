// import adapter from '@sveltejs/adapter-auto';
// import preprocess from 'svelte-preprocess';

// /** @type {import('@sveltejs/kit').Config} */
// const config = {
//   // Consult the docs to learn more about preprocessors
//   // https://kit.svelte.dev/docs/integrations#preprocessors
//   preprocess: preprocess(),

//   kit: {
//     // adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapters
//     // for a full list of supported environments
//     adapter: adapter(),

//     // hydrate the <div id="svelte"> element in src/app.html
//     // target is no longer used in recent versions, so it should be removed
//   }
// };

// export default config;


import adapter from '@sveltejs/adapter-vercel';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: preprocess(),

  kit: {
    adapter: adapter({
      runtime: 'nodejs18.x', // Especifica la versión de Node.js aquí
    }),
  },
};

export default config;
