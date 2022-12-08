import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/login'
import dest from '@/components/dest'
import settings from'@/components/settings'
import routeSelection from '@/components/routeSelection'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: login
    },
    {
      path: '/dest',
      name: 'dest',
      component: dest
    },
    {
      path: '/settings',
      name: 'settings',
      component: settings
    },
    {
      path: '/routeSelection',
      name: 'routeSelection',
      component: routeSelection
    }
  ]
})
