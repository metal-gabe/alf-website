import { defineNuxtConfig } from 'nuxt/config';

export default defineNuxtConfig({
   compatibilityDate: '2025-01-01',
   debug: process.env.NODE_ENV === 'development',
   devtools: { enabled: true },
   devServer: {
      port: 3701,
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
   vite: {
      server: {
         allowedHosts: ['alf.local'],
      },
   },
});
