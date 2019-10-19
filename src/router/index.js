import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'
import Donation from '@/pages/donation/Donation'
import Tree from '@/pages/tree/Tree'
import Me from '@/pages/me/Me'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/donation',
      name: 'Donation',
      component: Donation
    },
    {
      path: '/tree',
      name: 'Tree',
      component: Tree
    },
    {
      path: '/me',
      name: 'Me',
      component: Me
    }
  ]
})
