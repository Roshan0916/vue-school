<template>
  <div>
    <van-nav-bar title="我的资料" left-arrow @click="back"></van-nav-bar>
  </div>
</template>

<script>
export default {
  name: 'InHeader',
  method: {
    back () {
      this.$router.back()
    }
  }
}
</script>

<style lang="stylus" scoped>
  .van-nav-bar__title
    font-size: .35rem
    letter-spacing: .07rem
    color: #2e2623
    font-weight: 1
  .van-nav-bar .van-icon
    color: #000
  // .van-nav-bar__left
  //   background-image: src('@/assets/f-shouye.png')
  //   height:.3rem
</style>
