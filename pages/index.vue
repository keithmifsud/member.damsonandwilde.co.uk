<template>
  <div class="flex flex-col h-screen">
    <Header :text="brandStore.brand.displayName"/>
    <main class="p-4 flex-grow bg-gray-200">Content</main>
  </div>
</template>

<script setup>

import Header from "../components/Header";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import { useBrandStore } from '../stores/brand'
import { useGuestStore } from '../stores/guest'
import { useAsyncData } from 'nuxt/app'

definePageMeta({
  layout: "cityclub",
});


const brandStore = useBrandStore()


</script>

<style scoped>
</style>
