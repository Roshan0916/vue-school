import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'
import Donation from '@/pages/donation/Donation'
import Tree from '@/pages/tree/Tree'
import Me from '@/pages/me/Me'
import Myinfomation from '@/pages/myinfomation/Myinfomation'
import Myadoption from '@/pages/myadoption/Myadoption'
import Mydonation from '@/pages/mydonation/Mydonation'
import Drink from '@/pages/drink/Drink'
import Detail from '@/pages/detail/Detail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/detail/:id',
      name: 'Detail',
      component: Detail
    },
    {
      path: '/donation',
      name: 'Donation',
      component: Donation,
      children: [
        {
          path: ':drink',
          component: Drink
        }
      ]
    },
    {
      path: '/tree',
      name: 'Tree',
      component: Tree
    },
    {
      path: '/me',
      name: 'Me',
      component: Me,
      children: [
        {
          path: 'myinfomation',
          component: Myinfomation
        },
        {
          path: 'mydonation',
          component: Mydonation
        },
        {
          path: 'myadoption',
          component: Myadoption
        }
      ]
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})
