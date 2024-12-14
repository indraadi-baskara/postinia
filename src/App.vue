<script setup lang="ts">
import { onMounted } from 'vue';
import { RouterView, useRouter } from 'vue-router'; // Import RouterView
import { CUSTOMER_ROUTE, HOME_ROUTE } from './constants';
import { useCustomerStore } from './features/Customers/store/useCustomerStore';
import WelcomePage from './features/misc/components/WelcomePage.vue';
import { useRouterStore } from './router/store/useRouterStore';

const store = useCustomerStore();
const routerStore = useRouterStore();
onMounted(() => {
  store.getInitApp()
})

const router = useRouter();

const handleBack = () => {
  switch (router.currentRoute.value.name) {
    case CUSTOMER_ROUTE.INDEX:
      router.push('/')
      break
    default:
      router.back()
      break
  }
}

const currentRouteName = computed(() => {
  return router.currentRoute.value.name ?? HOME_ROUTE
})

</script>

<template>
  <div class="relative min-h-[100dvh] min-w-[100dvw] bg-[#F6F7F9]">
    <div class="w-full py-5 text-center bg-white shadow-inset relative">
      <div v-if="currentRouteName !== HOME_ROUTE" class="absolute left-5 top-5 text-blue font-sm text-[30px] leading-[26px]" @click="handleBack()"><</div>
      <h1 class="text-blue w-full font-medium text-[22px] leading-[26px]">{{ currentRouteName }}</h1>
    </div>

    <main class="h-full w-full">
      <router-view :is-rendered="routerStore.router.isVisited" />
      <WelcomePage :is-rendered="currentRouteName === HOME_ROUTE" />
    </main>
  </div>
</template>
