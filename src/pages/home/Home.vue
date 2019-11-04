<template>
  <div class="body_bg">
    <header-title>校友之家</header-title>
    <home-img :list="bannerlist"></home-img>
    <home-button></home-button>
    <home-swiper :list="newslist"></home-swiper>
  </div>
</template>

<script>
import {getBannerList} from '@/api/banner'
import HeaderTitle from 'common/Header'
import HomeImg from './components/Img'
import HomeButton from './components/Button'
import HomeSwiper from './components/Swiper'
import axios from 'axios'
export default {
  name: 'Home',
  created () {
    this._getBannerList()
  },
  data () {
    return {
      newslist: [],
      bannerlist: []
    }
  },
  components: {
    HeaderTitle,
    HomeImg,
    HomeButton,
    HomeSwiper
  },
  methods: {
    getHomeInfo () {
      axios.get('/api/member/news-list')
        .then(this.getHomeInfoSucc)
    },
    getHomeInfoSucc (res) {
      res = res.data
      const data = res.data
      this.newslist = data
    },
    _getBannerList () {
      getBannerList().then((res) => {
        res = res.data
        this.bannerlist = res
        console.log(res)
      })
    }
  },
  mounted () {
    this.getHomeInfo()
  }
}
</script>

<style lang="stylus" scoped>
  html
    background: red
</style>
