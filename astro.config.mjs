import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from "@astrojs/tailwind";

// https://astro.build/config

// https://astro.build/config
export default defineConfig({
  site: 'https://main.d2s4n1zaric3x6.amplifyapp.com',
  integrations: [mdx(), sitemap(), tailwind()],
  outDir: "./dist"
});
