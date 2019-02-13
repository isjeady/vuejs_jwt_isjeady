import Vue from 'vue'
import Vuex from 'vuex'
import router from '@/router'

import auth from './auth.module'
import user from './user.module'
import settings from './settings.module'

Vue.use(Vuex)

export default new Vuex.Store({
  router,
  modules: {
    auth,
    user,
    settings
  }
})
