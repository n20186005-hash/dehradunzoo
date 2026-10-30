import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// Single source of truth for the production domain.
// `SITE_URL` still wins when set (e.g. preview/staging), otherwise the real
// production domain is used so canonical/sitemap/OG absolute URLs are always emitted.
const site = process.env.SITE_URL?.trim() || 'https://dehradunzoo.com';

export default defineConfig({
  site,
  trailingSlash: 'ignore',
  output: 'static',
  integrations: [sitemap({filter: (page) => !/\/404(?:\.html|\/)?$/.test(new URL(page).pathname)})],
  vite: {
    plugins: [tailwindcss()]
  }
});
