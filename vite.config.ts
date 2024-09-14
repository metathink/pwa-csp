import { defineConfig } from 'vite';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.svg', 'robots.txt', 'apple-touch-icon.png'],
      manifest: {
        name: 'csp',
        short_name: 'csp',
        description: 'csp',
        theme_color: '#ffffff',
        icons: [
          {
            src: 'csp.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: 'csp.png',
            sizes: '512x512',
            type: 'image/png',
          },
          
        ],
      },
    }),
  ],
});
