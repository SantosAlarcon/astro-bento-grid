import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	base: '/astro-bento-grid/',
	site: 'http://localhost:4321/astro-bento-grid/',
	integrations: [mdx(), sitemap()],
});
