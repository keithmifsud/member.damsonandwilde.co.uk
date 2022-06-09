<template>
  <div class="flex flex-col h-screen">
    <Header :text="brandStore.brand.displayName"/>
    <main class="p-4 flex-grow bg-gray-200">Content</main>
    <Footer />
  </div>
</template>

<script setup>

import Header from "../components/Header";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import { useBrandStore } from '../stores/brand'
import { useGuestStore } from '../stores/guest'
import { useAsyncData } from 'nuxt/app'

const route = useRoute()
const router = useRouter()
const config = useRuntimeConfig()

const brandStore = useBrandStore()
const guestStore = useGuestStore()

let venueId = route.query.venue_id

if (venueId === undefined) {
  venueId = config.FALLBACK_VENUE_ID
}

if (!route.query.guest_id) {
  if (process.client) window.location.assign(
      config.LOGIN_URL +
      "?venue_id=" + venueId
  );
} else {
  guestStore.initGuestState(
      route.query.guest_id,
      venueId,
  )
}
if (!brandStore.brand) {
  brandStore.retrieveBrand(config.CMS_BRAND_ID)
}

</script>

<style scoped>
</style>
