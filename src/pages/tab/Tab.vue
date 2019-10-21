<template>
  <van-tabbar v-model="active" active-color="#000">
    <van-tabbar-item to="/home">
      <span>首页</span>
      <img
        slot="icon"
        slot-scope="props"
        :src="props.active ? icon.homeactive : icon.homenormal"
      >
    </van-tabbar-item>
    <van-tabbar-item to="/donation">
      <span>基金捐赠</span>
      <img
        slot="icon"
        slot-scope="props"
        :src="props.active ? icon.donationactive : icon.donationnormal"
      >
    </van-tabbar-item>
    <van-tabbar-item to="/tree">
      <span>认养大树</span>
      <img
        slot="icon"
        slot-scope="props"
        :src="props.active ? icon.treeactive : icon.treenormal"
      >
    </van-tabbar-item>
    <van-tabbar-item to="/me">
      <span>我的</span>
      <img
        slot="icon"
        slot-scope="props"
        :src="props.active ? icon.meactive : icon.menormal"
      >
    </van-tabbar-item>
  </van-tabbar>
</template>

<script type="text/ecmascript-6">
export default {
  data () {
    return {
      active: 0,
      icon: {
        homenormal: require('@/assets/f-shouye.png'),
        homeactive: require('@/assets/f-shouye-on.png'),
        donationnormal: require('@/assets/f-juanzeng.png'),
        donationactive: require('@/assets/f-juanzeng-on.png'),
        treenormal: require('@/assets/f-tree.png'),
        treeactive: require('@/assets/f-tree-on.jpg'),
        menormal: require('@/assets/f-me.png'),
        meactive: require('@/assets/f-me-on.png')
      }
    }
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .tab
    width: 100%
    display: flex
    position: fixed
    font-size: .4rem
    bottom: 0
    left: 0;
    height: 1.08rem
    border-top: solid 1px #e8e5e5
    background-color: #fff
    .tab-item
      flex: 1
      display: flex
      flex-direction:column
      text-align: center
      .tab-link
        color: #7d7d7d;
        text-align: center
        font-size: .24rem
      .tab-bg1
        display: block
        margin: .1rem auto
        height: .45rem
      &.router-link-active
        .tab-link
          color: #000
</style>
