import type { RouteRecordRaw } from 'vue-router'

import { SERVICE_ROUTE } from '@/constants'

export function serviceRoutes(): Readonly<RouteRecordRaw[]> {
  return [
    {
      path: '/layanan',
      name: SERVICE_ROUTE.INDEX,
      component: () => import('./ServiceIndex.vue'),
    },
    {
      path: '/layanan/tambah',
      name: SERVICE_ROUTE.CREATE,
      component: () => import('./ServiceCreate.vue'),
    },
  ]
}
