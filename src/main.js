// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
import fastClick from 'fastclick'
import 'styles/reset.css'
import 'styles/border.css'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
/* eslint-disable */
import { Button } from 'vant'
import { Tabbar, TabbarItem } from 'vant'
import { NavBar } from 'vant'
import { Field } from 'vant'
// import '../build/common'

Vue.use(Field)
Vue.use(NavBar)
Vue.use(Tabbar).use(TabbarItem)
Vue.config.productionTip = false
fastClick.attach(document.body)
Vue.use(VueAwesomeSwiper)
Vue.use(Antd)
Vue.use(Button)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
