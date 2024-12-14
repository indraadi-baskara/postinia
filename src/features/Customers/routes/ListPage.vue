<script lang="ts" setup>
import { PencilSquareIcon } from '@heroicons/vue/24/outline'
import { storeToRefs } from 'pinia'
import { computed, ref } from 'vue'

import { CUSTOMER_ROUTE } from '@/constants'
import type { Customer } from '@/global'
import { router } from '@/router'

import { useRouterStore } from '@/router/store/useRouterStore'
import { useCustomerStore } from '../store'

const { customers } = storeToRefs(useCustomerStore())
const routerStore = useRouterStore()
const searchQuery = ref<string>()
const isVisible = ref(false);
const selectedCustomer = ref<Customer>();

routerStore.updateRouterStatus()

const filteredCustomers = computed(() => {
  if (!searchQuery.value) {
    return customers.value
  }

  return findCustomersByNameOrEmail(searchQuery.value, customers.value || [])
})

function findCustomersByNameOrEmail(searchQuery?: string, customers?: Customer[]) {
  if (!searchQuery || searchQuery.length <= 0 || !customers || customers.length <= 0) {
    return []
  }

  return customers.filter((customer) => {
    const hasMatchedName = customer.name.toLowerCase().includes(searchQuery.toLowerCase())
    const hasMatchedEmail = customer.email?.toLowerCase().includes(searchQuery.toLowerCase())

    return hasMatchedName || hasMatchedEmail
  })
}

function redirectToAddCustomer() {
  router.push({
    name: CUSTOMER_ROUTE.CREATE,
  })
}

function redirectToUpdateCustomer(id: number) {
  router.push({
    name: CUSTOMER_ROUTE.UPDATE,
    params: { id },
  })
}
</script>

<template>
  <div class="p-6 mx-auto prose md:px-6 prose-indigo sm:rounded-md h-[calc(100vh-80px)] relative">
    <div class="mb-6">
      <input
        v-model="searchQuery"
        placeholder="Search customers..."
        class="w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>

    <div class="space-y-4">
      <div
        v-for="customer in filteredCustomers"
        :key="customer.id"
        class="bg-gray-100 p-4 rounded-md shadow-sm hover:shadow-md transition-shadow duration-200 flex flex-row"
      >
        <div class="flex flex-row w-full" @click="isVisible = true; selectedCustomer = customer">
          <span class="font-semibold mr-2">{{ customer.name }}</span> <span>- {{ customer.phone }}</span> 
        </div>
        <PencilSquareIcon class="w-4 h-4 cursor-pointer ml-auto mt-auto mb-auto" @click="redirectToUpdateCustomer(customer.id)" />
      </div>
    </div>

    <Dialog v-model:visible="isVisible" modal header="Edit Profile" class="mx-6 bg-gray-100" :style="{ width: '500px', maxWidth: '100%' }">
      <template #header>
        <div class="inline-flex items-center justify-center gap-2">
          <span class="font-bold whitespace-nowrap">Informasi Pelanggan</span>
        </div>
      </template>
      <div class="flex items-center gap-4 mb-4">
        <label class="font-semibold w-[150px]">Nama Pelanggan</label>
        <label class="font-semibold">{{ selectedCustomer?.name }}</label>
      </div>
      <div class="flex items-center gap-4 mb-4">
        <label class="font-semibold w-[150px]">Nomor telepon</label>
        <label class="font-semibold">{{ selectedCustomer?.phone ?? '-' }}</label>
      </div>
      <div class="flex items-center gap-4 mb-4">
        <label class="font-semibold w-[150px]">Alamat</label>
        <label class="font-semibold">{{ selectedCustomer?.email ?? '-' }}</label>
      </div>
    </Dialog>

    <p v-if="filteredCustomers.length === 0" class="text-gray-500 text-center mt-4">Pelanggan tidak ditemukan.</p>

    <div class="mt-8 text-center absolute w-full bottom-5 left-0 right-0 px-6">
      <button @click="redirectToAddCustomer" class="text-base font-medium p-5 w-full mt-auto text-white bg-blue rounded">
        Tambah Pelanggan Baru
      </button>
    </div>
  </div>
</template>
