import { CUSTOMER_ROUTE } from '@/constants'
import type { RouteRecordRaw } from 'vue-router'

export function customerRoutes(): Readonly<RouteRecordRaw[]> {
  return [
    {
      path: '/customers',
      name: CUSTOMER_ROUTE.INDEX,
      component: () => import('./ListPage.vue'),
      meta: { title: 'Customers' },
    },
    {
      path: '/customers/create',
      name: CUSTOMER_ROUTE.CREATE,
      component: () => import('./UpsertPage.vue'),
      meta: { title: 'Create Customers' },
    },
    {
      path: '/customers/:id/update',
      name: CUSTOMER_ROUTE.UPDATE,
      component: () => import('./UpsertPage.vue'),
      meta: { title: 'Update Customers' },
    },
  ]
}
