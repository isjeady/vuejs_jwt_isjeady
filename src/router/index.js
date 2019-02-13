import Vue from 'vue'
import Router from 'vue-router'
import store from '../store' 

import Login from '@/views/Login.vue'
import Dashboard from '@/views/Dashboard.vue'
import Profile from '@/views/Profile.vue'

const protect = (to, from, next) => {
  if (store.getters.isAuthenticated) {
    next();
    return;
  }
  next('/login');
}

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/',
      name: 'Dashboard',
      component: Dashboard,
      beforeEnter: protect,
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile,
      beforeEnter: protect,
    }
  ]
})
