export default [
    {
      path: '/:catchAll(.*)',
      name: 'not-found',
      component: () => import('./pages/404.vue'),
    }
  ]