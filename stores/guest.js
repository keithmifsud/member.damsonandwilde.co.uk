import { defineStore } from 'pinia'
import { useAsyncData } from 'nuxt/app'

export const useGuestStore = defineStore({
  id: 'guest-store',

  state: () => {
    return {
      guestId: null,
      venueId: null,
    }
  },
  actions: {
    initGuestState(guestId = null, venueId = null) {
      this.guestId = guestId
      this.venueId = venueId
    }
  },
  getters: {}
})

