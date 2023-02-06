import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: null,
			precompress: false,
			strict: false
		}),
		paths: {
			// eslint-disable-next-line indent
			base: '/portfolio' // replace with your github repository name
		}
	}
};

export default config;
