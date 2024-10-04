import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', () => {
  const user = ref<any>(null)

  const setUser = (u: any) => {
    user.value = u
  }
  return { user, setUser }
})
