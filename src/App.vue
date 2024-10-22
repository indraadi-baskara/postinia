<script setup lang="ts">
import { onMounted } from 'vue';
import { RouterView } from 'vue-router'; // Import RouterView
import { useCustomerStore } from './features/Customers/store/useCustomerStore';
import WelcomePage from './features/misc/components/WelcomePage.vue';
import { useRouterStore } from './router/store/useRouterStore';

const store = useCustomerStore();
const routerStore = useRouterStore();

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
      <router-view :is-rendered="routerStore.router.isVisited" />
      <WelcomePage :is-rendered="!routerStore.router.isVisited" />
    </main>
  </div>
</template>
