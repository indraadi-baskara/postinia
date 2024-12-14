<script setup lang="ts">
type Props = {
  for: string
  title: string
}

defineProps<Props>()
</script>

<template>
  <fieldset class="grid grid-rows-[auto_1fr]">
    <label class="text-[#2A3256] text-base leading-5 font-normal" :for>{{ title }}</label>
    <slot />
  </fieldset>
</template>
