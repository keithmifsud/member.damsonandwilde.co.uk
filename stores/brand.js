import { acceptHMRUpdate, defineStore } from 'pinia'
import { useAsyncData } from 'nuxt/app'

export const useBrandStore = defineStore(
  'brand-store',
  {

    state: () => {
      return {
        brand: null,
      }
    },
    actions: {
      async retrieveBrand (brandId) {
        try {
          const { data } = await useAsyncData('brand', () => GqlBrand({ brandId: brandId }))
          this.brand = data.value.brand.data.attributes
        } catch (errors) {}
      },
    },
    getters: {},

    persist: true,
  })

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useBrandStore, import.meta.hot))
}
