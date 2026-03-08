import type { RouterConfig } from '@nuxt/schema';

export default {
   routes: _routes => [
      ..._routes,
      {
         alias: '/',
         component: () => import('~/pages/index-page.vue'),
         name: 'index',
         path: '/index-page',
      },
   ],
} satisfies RouterConfig;
