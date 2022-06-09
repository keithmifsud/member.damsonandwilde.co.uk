<template>
  <div class="flex flex-col min-h-screen">
    <Header :text="brandStore.brand.displayName" :backTo="backTo"/>
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

const config = useRuntimeConfig()

definePageMeta({
  layout: "cityclub",
});


const brandStore = useBrandStore()
const guestStore = useGuestStore()

const backTo = {
  url: config.LOGIN_URL + "?venue_id=" + guestStore.venueId
}


</script>

<style scoped>
</style>
