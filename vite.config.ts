import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['csp.svg', 'robots.txt',],
      injectRegister: 'auto',
      manifest: {
        name: 'csp',
        short_name: 'csp',
        description: 'csp',
        start_url: "/",
        display: "standalone",
        theme_color: '#ffffff',
        icons: [
          {
            src: 'csp.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: 'C.png',
            sizes: '512x512',
            type: 'image/png',
          },

        ],
      },
    }),
  ],
});
