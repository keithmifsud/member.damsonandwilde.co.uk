<template>
  <div class="text-lg font-bold flex w-full justify-center p-3 shadow">
    <div>{{ text }}</div>
  </div>
</template>

<script setup>

const props = defineProps({
  text: {
    type: String,
    required: true,
  }
})

</script>

<style scoped>
</style>
