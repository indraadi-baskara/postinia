import type { RouteRecordRaw } from 'vue-router'

import { SERVICE_ROUTE } from '@/constants'

export function serviceRoutes(): Readonly<RouteRecordRaw[]> {
  return [
    {
      path: '/layanan',
      name: SERVICE_ROUTE.INDEX,
      component: () => import('./ServiceIndex.vue'),
    },
  ]
}
