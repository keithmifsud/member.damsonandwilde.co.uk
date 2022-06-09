import { defineStore } from 'pinia'
import { useCookie } from '#app'

export const useGuestStore = defineStore({
  id: 'guest-store',

  state: () => {
    return {
      guestId: useCookie('guestId').value,
      venueId: null,
    }
  },
  actions: {
    initGuestState (guestId = null, venueId = null) {
      const id = useCookie('guestId')
      id.value = guestId
      this.venueId = venueId
    }
  },
  getters: {
    isAuthenticated () {
      return this.guestId && this.guestId.value !== null
    }
  }
})

