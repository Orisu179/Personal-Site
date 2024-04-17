import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from "@astrojs/tailwind";

// https://astro.build/config

// https://astro.build/config
export default defineConfig({
  site: 'https://main.d3mm3w1q5h9ra0.amplifyapp.com/',
  integrations: [mdx(), sitemap(), tailwind()],
  outDir: "./dist"
});
