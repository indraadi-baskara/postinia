<script setup lang="ts">
import { RouterView } from 'vue-router' // Import RouterView
import { useCustomerStore } from './features/Customers/store/useCustomerStore'

const store = useCustomerStore()

onMounted(() => {
  store.getInitApp()
})
</script>

<template>
  <div class="relative min-h-[100dvh] min-w-[100dvw] bg-[#F6F7F9]">
    <div class="w-full py-5 text-center bg-white shadow-inset">
      <h1 class="text-blue w-full font-medium text-[22px] leading-[26px]">Postinia</h1>
    </div>

    <main class="h-full w-full">
      <router-view />
    </main>
  </div>
</template>
