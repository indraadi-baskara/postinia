<script lang="ts" setup>
import type { RouteRecordRaw } from 'vue-router'

import { CUSTOMER_ROUTE, SERVICE_ROUTE } from '@/constants'

const menuLists: {
  name: string
  description: string
  key: RouteRecordRaw['name']
}[] = [
  {
    name: 'Customer',
    description: 'Berisi tentang daftar pelanggan',
    key: CUSTOMER_ROUTE.INDEX,
  },
  {
    name: 'Service',
    description: 'Berisi tentang daftar transaksi',
    key: SERVICE_ROUTE.INDEX,
  },
]
</script>

<template>
  <div class="w-full">
    <div class="p-6 grid gap-y-5">
      <RouterLink
        v-for="menu in menuLists"
        :key="menu.key"
        v-slot="{ isActive, href, navigate }"
        custom
        :to="{
          name: menu.key,
        }"
      >
        <a
          class="py-[30px] px-5 bg-gradient-to-r from-[#0052D4] via-[#4364F7] to-[#6FB1FC] rounded-[20px] text-white grid gap-y-0.5"
          :href
          @click="navigate"
        >
          <p class="font-medium text-[22px] leading-[26px]">{{ menu.name }}</p>
          <p class="font-normal text-xs leading-[14px]">{{ menu.description }}</p>
        </a>
      </RouterLink>
    </div>
  </div>
</template>
