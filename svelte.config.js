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
import adapter from '@sveltejs/adapter-netlify';
import preprocess from 'svelte-preprocess';

export default {
  preprocess: preprocess(),

  kit: {
		// default options are shown
		adapter: adapter({
			// if true, will create a Netlify Edge Function rather
			// than using standard Node-based functions
			edge: false,

			// if true, will split your app into multiple functions
			// instead of creating a single one for the entire app.
			// if `edge` is true, this option cannot be used
			split: false
		})
	}
};

// import adapter from '@sveltejs/adapter-vercel';
// import preprocess from 'svelte-preprocess';

// /** @type {import('@sveltejs/kit').Config} */
// const config = {
//   preprocess: preprocess(),

//   kit: {
//     adapter: adapter({ // No es necesario especificar runtime aquí
//     })
//   }

// };

// export default config;
