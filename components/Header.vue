<template>
  <div class="text-lg font-bold flex w-full justify-around p-3 shadow items-center">
    <div class="ml-0"><span v-on:click="goBack()">
      <outline-arrow-left-icon class="w-5 h-5"/>
    </span></div>
    <div class="m-auto">{{ text }}</div>
  </div>
</template>

<script setup>

import { useGuestStore } from '../stores/guest'

const guestStore = useGuestStore()
const router = useRouter()

const props = defineProps({
  text: {
    type: String,
    required: true,
  },
  backTo: {
    type: Object,
    default: {}
  }
})

function goBack() {
  if (!props.backTo.url) {
    router.back()
  } else if (props.backTo.url) {
    if (process.client) window.location.assign(
        props.backTo.url
    );
  }
}


</script>

<style scoped>
</style>
