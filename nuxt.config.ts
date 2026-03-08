import { defineNuxtConfig } from 'nuxt/config';

export default defineNuxtConfig({
   compatibilityDate: '2025-01-01',
   devtools: { enabled: true },
   devServer: {
      port: 3000,
   },
   ssr: false,
   css: ['~/assets/styles/app.css'],
   components: [
      {
         path: '~/components',
         extensions: ['.vue'],
      },
   ],
   postcss: {
      plugins: {
         '@tailwindcss/postcss': {},
      },
   },
   typescript: {
      typeCheck: false,
   },
});
