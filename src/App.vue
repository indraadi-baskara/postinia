<script setup lang="ts">
import { onMounted } from 'vue'

import { HOME_ROUTE } from './constants'
import { useCustomerStore } from './features/Customers/store/useCustomerStore'
import { router } from './router'

const store = useCustomerStore()

const currentRouteName = computed(() => {
  return router.currentRoute.value.name
})

function handleBack() {
  // if (currentRouteName.value === HOME_ROUTE) {
  //   router.back()
  //   return
  // }

  router.push({
    name: HOME_ROUTE,
  })
}

onMounted(() => {
  store.getInitApp()
})
</script>

<template>
  <div class="relative min-h-[100dvh] min-w-[100dvw] bg-[#F6F7F9]">
    <div class="w-full py-5 text-center bg-white shadow-inset relative">
      <div
        v-if="currentRouteName !== HOME_ROUTE"
        class="absolute left-5 top-5 text-blue font-sm text-[30px] leading-[26px] cursor-pointer"
        @click="handleBack"
      >
        <
      </div>
      <h1 class="text-blue w-full font-medium text-[22px] leading-[26px]">{{ currentRouteName }}</h1>
    </div>

    <main class="h-full w-full">
      <router-view />
    </main>
  </div>
</template>
