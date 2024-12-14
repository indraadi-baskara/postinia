<script setup lang="ts">
type Props = {
  for: string
}

defineProps<Props>()
const modelValue = defineModel<string | number>()
</script>

<template>
  <input v-model="modelValue" :id="for" :name="for" />
</template>
