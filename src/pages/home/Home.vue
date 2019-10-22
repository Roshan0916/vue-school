<template>
  <div class="body_bg">
    <header-title>校友之家</header-title>
    <home-img></home-img>
    <home-button></home-button>
    <home-swiper></home-swiper>
  </div>
</template>

<script>
import HeaderTitle from 'common/Header'
import HomeImg from './components/Img'
import HomeButton from './components/Button'
import HomeSwiper from './components/Swiper'
export default {
  name: 'Home',
  components: {
    HeaderTitle,
    HomeImg,
    HomeButton,
    HomeSwiper
  }
}
</script>

<style lang="stylus" scoped>
  html
    background: red

</style>
