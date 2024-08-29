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

import preprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-vercel';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult the docs to learn more about preprocessors
  // https://kit.svelte.dev/docs/integrations#preprocessors
  preprocess: preprocess(),

  kit: {
    // Use the Vercel adapter
    adapter: adapter({
      // Options for the Vercel adapter can be set here if needed
    }),

    // hydrate the <div id="svelte"> element in src/app.html
    // target is no longer used in recent versions, so it should be removed
  }
};

export default config;


