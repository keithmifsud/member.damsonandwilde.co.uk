import { defineStore } from 'pinia'
import { useAsyncData } from 'nuxt/app'

export const useBrandStore = defineStore({
  id: 'brand-store',

  state: () => {
    return {
      brand: null,
      terms: null,
    }
  },
  actions: {
    async retrieveBrand(brandId) {
      try {
        const { data }  = await useAsyncData('strapi', () => GqlBrand({brandId: brandId}))
        this.brand = data.value.brand.data.attributes
        console.log('brand', this.brand)
      } catch (errors) {
        console.log(errors)
      }
    },
  },
  getters: {}
})

