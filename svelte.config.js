import adapter from '@sveltejs/adapter-vercel';

/** @type {import('@sveltejs/kit').Config} */

import { mdsvex } from 'mdsvex';
import sveltePreprocess from 'svelte-preprocess';

export default {
	extensions: ['.svelte', '.md'], // Add .svx extension
	preprocess: [
		sveltePreprocess(),
		mdsvex({
			extension: '.md' // Use .svx as the file extension for MDsveX
		})
	],
	kit: {
		adapter: adapter()
	}
};
