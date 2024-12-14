<script lang="ts" setup>
import { useRouterStore } from '@/router/store/useRouterStore'
import ServiceHistoryCard from '../components/ServiceHistoryCard.vue'
import type { TransactionDto } from '../types'
import FormFieldWrapper from '@/components/forms/FormFieldWrapper.vue'
import FormInputField from '@/components/forms/FormInputField.vue'

const routerStore = useRouterStore()
routerStore.updateRouterStatus()

const forms = ref({
  name: '',
  price: '',
  estimation: '',
  description: '',
})
</script>

<template>
  <div class="p-6 grid gap-y-2.5">
    <form>
      <FormFieldWrapper for="layanan.name" title="Nama layanan">
        <FormInputField v-model="forms.name" for="layanan.name" />
      </FormFieldWrapper>

      <FormFieldWrapper for="layanan.price" title="Harge">
        <FormInputField v-model="forms.price" for="layanan.price" />
      </FormFieldWrapper>

      <FormFieldWrapper for="layanan.estimation" title="Estimasi">
        <FormInputField v-model="forms.estimation" for="layanan.estimation" />
      </FormFieldWrapper>

      <FormFieldWrapper for="layanan.description" title="Deskripsi (opsional)">
        <FormInputField v-model="forms.description" for="layanan.description" />
      </FormFieldWrapper>
    </form>
  </div>
</template>
