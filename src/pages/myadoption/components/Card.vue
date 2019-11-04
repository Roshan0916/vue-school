<template>
  <div class="bg" ref="wrapper">
    <ul>
     <div class="ry_wrapper">
      <div class="ry_card" v-for="item in list" :key="item.id">
        <div class="ry_card_intro">
          <div class="ry_card_intro_item">
            <p class="ry_intro_left">姓名</p>
            <p class="ry_intro_right">{{item.adopter_name}}</p>
          </div>
          <div class="ry_card_intro_item">
            <p class="ry_intro_left">类型</p>
            <p class="ry_intro_right">{{item.adopt_type}}</p>
          </div>
          <div class="ry_card_intro_item">
            <p class="ry_intro_left">状态</p>
            <p class="ry_intro_right">{{item.a_state}}</p>
          </div>
          </div>
          <div class="ry_more">
            <p class="ry_more_title">你于{{item.created_at}}申请领养浙江科技学院的某树，正在审核中，感谢你对母校的支持。</p>
          </div>
        </div>
      </div>
    </ul>
  </div>
</template>

<script>
import Bscroll from 'better-scroll'
export default {
  props: {
    list: Array
  },
  mounted () {
    this.scroll = new Bscroll(this.$refs.wrapper)
  }
}
</script>

<style lang="stylus" scoped>
.bg
  position: fixed
  margin: .88rem 0 1rem 0
  z-index: 100
  top: 0
  left: 0
  bottom: 0
  right: 0
  background: #f3f3f4
  .ry_wrapper
    overflow: hidden
    .ry_card
      background: #fff
      margin: .17rem
      border-radius: .2rem
      .ry_card_intro
        display: flex
        flex-direction: column
        padding-top: .39rem
        .ry_card_intro_item
          height: .45rem
          font-size: .25rem
          letter-spacing: .02rem
          display: flex
          margin: 0 0 .25rem .38rem
          .ry_intro_left
            margin-right: .6rem
            color: #717071
          .ry_intro_right
            color: #2e2623
      .ry_more
        display: flex
        justify-content: space-between
        line-height: .41rem
        padding: 0 .4rem
        .ry_more_title
          border-top: .02rem solid #d5d6d7
          padding: .28rem 0 .41rem 0
          font-size: .25rem
          letter-spacing: .02rem
          color: #2e2623
</style>
