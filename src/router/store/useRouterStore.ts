import type { Router } from '@/global'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useRouterStore = defineStore('router', () => {
  const router = ref<Router>({
    isVisited: false,
  })

  const updateRouterStatus = () => {
    router.value = {
      isVisited: true,
    }
  }

  return {
    router,
    updateRouterStatus,
  }
})
