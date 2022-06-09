<template>
  <div class="flex flex-col h-full">
    <Header :text="termsPage.PageTitle"/>
    <main class="p-4">
      <div v-html="content"></div>
    </main>
  </div>
</template>

<script setup>

import MarkdownIt from 'markdown-it'

definePageMeta({
  layout: "cityclub",
});

import { useContentStore } from '../stores/content'

const contentStore = useContentStore()
await contentStore.retrieveTermsAndConditions()
const termsPage = contentStore.getTermsAndConditions

const md = new MarkdownIt()
const content = md.render(termsPage.PageContent)

</script>

<style scoped>
</style>
