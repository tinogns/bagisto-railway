// vite.config.mjs
import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';

export default defineConfig({
  plugins: [
    laravel({
      input: ['resources/css/app.css','resources/js/app.js'],
      refresh: true,
    }),
  ],
  // สั่ง Vite ให้ pre-bundle plugin แทนการ externalize
  optimizeDeps: {
    include: ['laravel-vite-plugin'],
  },
});
