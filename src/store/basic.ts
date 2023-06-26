import { nextTick } from 'vue'
import { defineStore } from 'pinia'
import router from '@/router'
export const useBasicStore = defineStore('basic', {
  state: () => {
    return {
      token: '',
      getUserInfo: false,
      userInfo: { username: '', avatar: '' }, //user info
      settings: '王顺顺个人博客'
    }
  },
  persist: {
    storage: localStorage,
    paths: ['token']
  },
  actions: {
    setToken(data) {
      this.token = data
    },
    setUserInfo({ userInfo, roles, codes }) {
      const { username, avatar } = userInfo
      this.$patch((state) => {
        state.roles = roles
        state.codes = codes
        state.getUserInfo = true
        state.userInfo.username = username
        state.userInfo.avatar = avatar
      })
    },

    resetState() {
      this.$patch((state) => {
        state.token = '' //reset token
        state.codes = []
        //reset userInfo
        state.userInfo.username = ''
        state.userInfo.avatar = ''
      })
      this.getUserInfo = false
    },
    resetStateAndToLogin() {
      this.resetState()
      nextTick(() => {
        router.push({ path: '/login' })
      })
    },
  }
})