import { createRouter, createWebHistory } from 'vue-router';

import store from '@/store/index';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/coaches' },
    {
      path: '/coaches',
      component: () => import('@/pages/coaches/CoachesList.vue'),
    },
    {
      path: '/coaches/:id',
      component: () => import('@/pages/coaches/CoachDetail.vue'),
      props: true,
      children: [
        {
          path: 'contact',
          component: () => import('@/pages/requests/ContactCoach.vue'),
        },
      ],
    },
    {
      path: '/register',
      component: () => import('@/pages/coaches/CoachRegister.vue'),
      meta: { requiresAuth: true },
    },
    {
      path: '/requests',
      component: () => import('@/pages/requests/RequestReceive.vue'),
      meta: { requiresAuth: true },
    },
    {
      path: '/auth',
      component: () => import('@/pages/auth/UserAuth.vue'),
      meta: { requiresUnauth: true },
    },
    { path: '/:notFound(.*)', component: () => import('@/pages/NotFound.vue') },
  ],
});

router.beforeEach((to, _, next) => {
  if (to.meta.requiresAuth && !store.getters.isAuthenticated) {
    next('/auth');
  } else if (to.meta.requiresUnauth && store.getters.isAuthenticated) {
    next('/coaches');
  } else {
    next();
  }
});

export default router;
