<template>
  <div class="bg">
    <header-title></header-title>
    <drink-img :list="bannerlist"></drink-img>
    <drink-choose></drink-choose>
  </div>
</template>

<script>
import HeaderTitle from 'common/Header'
import DrinkImg from './components/Img'
import DrinkChoose from './components/Choose'
import {getBannerList} from '@/api/banner'
export default {
  created () {
    this._getBannerList()
  },
  data () {
    return {
      bannerlist: []
    }
  },
  name: 'Drink',
  components: {
    HeaderTitle,
    DrinkImg,
    DrinkChoose
  },
  methods: {
    _getBannerList () {
      getBannerList().then((res) => {
        res = res.data
        this.bannerlist = res
      })
    }
  }
}
</script>

<style lang="stylus" scoped>
.bg
  position: fixed
  padding-top: .88rem
  z-index: 100
  top: 0
  left: 0
  bottom: 0
  right: 0
  background: #f3f3f4
</style>
