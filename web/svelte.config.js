import fs from 'fs'
import path from 'path'
import adapter from '@sveltejs/adapter-static'
import preprocess from 'svelte-preprocess'

const getSlugList = () => {
	const slugListBuffer = fs.readFileSync(path.join(process.cwd(), 'slug-list.json'), 'utf-8')
	return JSON.parse(slugListBuffer).map(slug => `/poems/${slug}`)
}

const slugList = process.env.NODE_ENV === 'production' ? getSlugList() : []

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// options passed to svelte.compile (https://svelte.dev/docs#svelte_compile)
	compilerOptions: null,

	// an array of file extensions that should be treated as Svelte components
	extensions: ['.svelte'],

	kit: {
		adapter: adapter(),
		amp: false,
		files: {
			assets: 'static',
			hooks: 'src/hooks',
			lib: 'src/components',
			routes: 'src/routes',
			serviceWorker: 'src/service-worker',
			template: 'src/app.html'
		},
		hydrate: true,
		paths: {
			assets: '',
			base: ''
		},
		prerender: {
			crawl: false,
			enabled: true,
			entries: ['*', ...slugList],
		},
		router: true,
		ssr: true,
		trailingSlash: 'never'
	},

	// options passed to svelte.preprocess (https://svelte.dev/docs#svelte_preprocess)
	preprocess: preprocess()
};

export default config;