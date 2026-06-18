import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
  output: 'server',
  adapter: vercel(),
  // The v0 preview serves the dev server through a proxied iframe on a
  // different origin. Astro's dev server blocks cross-origin requests for
  // security (the "Cross-origin request blocked" 403). Allow them here.
  server: {
    host: true,
    allowedHosts: true,
  },
  security: {
    // An empty pattern object matches any protocol/hostname/port, so all
    // cross-origin requests (like the v0 preview iframe) are permitted.
    allowedDomains: [{}],
  },
});
