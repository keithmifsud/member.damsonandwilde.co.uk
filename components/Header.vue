<template>
  <div class="text-lg font-bold flex w-full justify-around p-3 shadow items-center">
    <div class="ml-0"><a href="https://mryum.com">
      <outline-arrow-left-icon class="w-5 h-5"/>
    </a></div>
    <div class="m-auto">{{ brandStore.brand.displayName }}</div>
  </div>
</template>

<script setup>

import { useBrandStore } from '../stores/brand'

const props = defineProps({
  text: {
    type: String,
    required: true,
  }
})

const brandStore = useBrandStore()

brandStore.retrieveBrand()


</script>

<style scoped>
</style>
