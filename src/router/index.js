import Vue from 'vue'
import Router from 'vue-router'
//import HelloWorld from '@/components/HelloWorld'
import login from '@/components/login'
import dest from '@/components/dest'
import routeSelection from '@/components/routeSelection'
import navigate from '@/components/navigate'
import emergency from '@/components/emergency'

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
      path: '/routeSelection',
      name: 'routeSelection',
      component: routeSelection
    },
    {
      path: '/navigate',
      name: 'navigate',
      component: navigate
    },
    {
      path: '/emergency',
      name: 'emergency',
      component: emergency
    }
  ]
})
