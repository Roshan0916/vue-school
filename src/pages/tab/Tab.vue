<template>
  <div class="tab">
    <router-link tag="div" class="tab-item" to="/home">
      <span class="tab-link">推荐</span>
    </router-link>
    <router-link tag="div" class="tab-item" to="/donation">
      <span class="tab-link">歌手</span>
    </router-link>
    <router-link tag="div" class="tab-item" to="/tree">
      <span class="tab-link">排行</span>
    </router-link>
    <router-link tag="div" class="tab-item" to="/me">
      <span class="tab-link">搜索</span>
    </router-link>
  </div>
</template>

<script type="text/ecmascript-6">
export default {}
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
      text-align: center
      .tab-link
        color: #7d7d7d;
        text-align: center
        font-size: .24rem
      &.router-link-active
        .tab-link
          color: #000
</style>
