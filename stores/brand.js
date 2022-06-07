import { defineStore } from 'pinia'
import { useAsyncData } from 'nuxt/app'

export const useBrandStore = defineStore({
  id: 'brand-store',

  state: () => {
    return {
      brand: null,
    }
  },
  actions: {
    async retrieveBrand() {
      try {
        const { data }  = await useAsyncData('strapi', () => GqlBrand())
        this.brand = data.value.brand.data.attributes
      } catch (errors) {
        console.log(errors)
      }

    }
  },
  getters: {}
})

