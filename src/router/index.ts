import { createRouter, createWebHistory } from 'vue-router'

import { serviceRoutes } from '@/features/Service'
import { customerRoutes } from '@/features/Customers'

import { HOME_ROUTE } from '@/constants'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: HOME_ROUTE,
      component: () => import('@/features/Misc/components/WelcomePage.vue'),
      meta: { title: 'Selamat datang' },
    },
    ...customerRoutes(),
    ...serviceRoutes(),
  ],
})

export { router }
