<template>
  <div class="text-lg font-bold flex w-full justify-around p-3 shadow items-center">
    <div class="ml-0"><span v-on:click="goToLogin()">
      <outline-arrow-left-icon class="w-5 h-5"/>
    </span></div>
    <div class="m-auto">{{ text }}</div>
  </div>
</template>

<script setup>

import { useGuestStore } from '../stores/guest'

const config = useRuntimeConfig()
const guestStore = useGuestStore()

const props = defineProps({
  text: {
    type: String,
    required: true,
  }
})

function goToLogin() {
  if (process.client) window.location.assign(
      config.LOGIN_URL + "?venue_id=" + guestStore.venueId
  );
}


</script>

<style scoped>
</style>
