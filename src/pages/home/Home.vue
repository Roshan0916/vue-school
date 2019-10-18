<template>
  <div class="body_bg">
    <home-header></home-header>
    <home-img></home-img>
    <home-button></home-button>
    <home-swiper></home-swiper>
  </div>
</template>

<script>
import HomeHeader from './components/Header'
import HomeImg from './components/Img'
import HomeButton from './components/Button'
import HomeSwiper from './components/Swiper'
export default {
  name: 'Home',
  components: {
    HomeHeader,
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
