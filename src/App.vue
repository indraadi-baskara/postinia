<script setup lang="ts">
import { RouterView } from 'vue-router' // Import RouterView
import { useCustomerStore } from './store/useCustomerStore'

const store = useCustomerStore()

onMounted(() => {
  store.getInitApp()
})
</script>

<template>
  <div class="relative min-h-[100dvh] min-w-[100dvw] bg-[#F6F7F9]">
    <main class="h-full w-full">
      <router-view />
    </main>
  </div>
</template>
