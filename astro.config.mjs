import { siteConfig } from './src/config/site.js';
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: siteConfig.url,
  devToolbar: {
    enabled: false
  },
  integrations: [tailwind(), sitemap()]
});