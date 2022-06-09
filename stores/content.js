import { acceptHMRUpdate, defineStore } from 'pinia'
import { useAsyncData } from 'nuxt/app'

export const useContentStore = defineStore(
  'content-store',
  {

    state: () => {
      return {
        terms: null,
      }
    },
    actions: {
      async retrieveTermsAndConditions () {
        try {
          const { data } = await useAsyncData('termsAndConditions', () => GqlTerms())
          this.terms = data.value.termsAndCondition.data.attributes
        } catch (errors) {}
      },
    },
    getters: {
      getTermsAndConditions() {
        return this.terms
      }
    },

    persist: true,
  })

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useContentStore, import.meta.hot))
}


