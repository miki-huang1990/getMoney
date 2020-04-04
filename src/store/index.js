import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const store = new Vuex.Store({

  state: {
    // 存储token
    Authorization: localStorage.getItem('Authorization') ? localStorage.getItem('Authorization') : '',
    token: localStorage.getItem('Authorization') ? localStorage.getItem('Authorization') : '',
    phone: localStorage.getItem('phone') ? localStorage.getItem('phone') : ''
  },
  mutations: {
    // 修改token，并将token存入localStorage
    changeLogin (state, user) {
      state.Authorization = user.Authorization
      localStorage.setItem('Authorization', user.Authorization)
    },
    loginSuccess (state, user) {
      state.phone = user.phone
      state.Authorization = user.Authorization
      localStorage.setItem('phone', user.phone)
      localStorage.setItem('Authorization', user.Authorization)
    }
  }
})

export default store
