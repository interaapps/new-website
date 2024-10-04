import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', () => {
  const user = ref(null)

  const setUser = (u) => {
    user.value = u
  }
  return { user, setUser }
})
