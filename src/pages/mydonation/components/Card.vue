<template>
  <div class="bg" ref="wrapper">
    <div>
     <div class="jz_wrapper">
      <div class="jz_total">
        <p class="jz_desc">捐赠总金额</p>
        <p class="jz_total_number">￥2000.00</p>
      </div>
    </div>
    <ul>
      <li class="jz_card">
        <p class="jz_card_title">捐赠金额</p>
        <p class="jz_card_number">￥1000.00</p>
        <div class="jz_card_intro">
          <div class="jz_card_intro_item">
            <p class="jz_intro_left">姓名</p>
            <p class="jz_intro_right">张三</p>
          </div>
          <div class="jz_card_intro_item">
            <p class="jz_intro_left">对象</p>
            <p class="jz_intro_right">浙江科技学院教育基金会</p>
          </div>
          <div class="jz_card_intro_item">
            <p class="jz_intro_left">日期</p>
            <p class="jz_intro_right">2019-10-01</p>
          </div>
        </div>
        <div class="jz_more">
          <div class="jz_more_title">
            <p>查看寄语</p>
          </div>
          <div class="jz_arrow" @click="OnMoreClick">
            <img src="@/assets/arrow-right.png"
            :class="[arrow ? 'jz_arrow' : 'jz_arrow_on']"
            />
          </div>
        </div>
        <div class="jz_more_content" v-show="message">
          <p>是非成败转头空，青山依旧在，惯看秋月春风。一壶浊酒喜相逢，古今多少事滚滚长江东逝水浪花淘尽英雄。
            几度夕阳红。白发渔樵江渚上，都付笑谈中滚滚长江东逝水，浪花淘尽英雄是非成败转头空，青山依旧在，几度夕阳红白发渔樵江渚上，惯看秋月春风。一壶浊酒喜相逢古今多少事都付笑谈中。</p>
        </div>
      </li>
      <li class="jz_card">
        <p class="jz_card_title">捐赠金额</p>
        <p class="jz_card_number">￥1000.00</p>
        <div class="jz_card_intro">
          <div class="jz_card_intro_item">
            <p class="jz_intro_left">姓名</p>
            <p class="jz_intro_right">张三</p>
          </div>
          <div class="jz_card_intro_item">
            <p class="jz_intro_left">对象</p>
            <p class="jz_intro_right">浙江科技学院教育基金会</p>
          </div>
          <div class="jz_card_intro_item">
            <p class="jz_intro_left">日期</p>
            <p class="jz_intro_right">2019-10-01</p>
          </div>
        </div>
        <div class="jz_more">
          <div class="jz_more_title">
            <p>查看寄语</p>
          </div>
          <div class="jz_arrow" @click="OnMoreClick">
            <img src="@/assets/arrow-right.png"
            :class="[arrow ? 'jz_arrow' : 'jz_arrow_on']"
            />
          </div>
        </div>
        <div class="jz_more_content" v-show="message">
          <p>是非成败转头空，青山依旧在，惯看秋月春风。一壶浊酒喜相逢，古今多少事滚滚长江东逝水浪花淘尽英雄。
            几度夕阳红。白发渔樵江渚上，都付笑谈中滚滚长江东逝水，浪花淘尽英雄是非成败转头空，青山依旧在，几度夕阳红白发渔樵江渚上，惯看秋月春风。一壶浊酒喜相逢古今多少事都付笑谈中。</p>
        </div>
      </li>
      <li class="jz_card">
        <p class="jz_card_title">捐赠金额</p>
        <p class="jz_card_number">￥1000.00</p>
        <div class="jz_card_intro">
          <div class="jz_card_intro_item">
            <p class="jz_intro_left">姓名</p>
            <p class="jz_intro_right">张三</p>
          </div>
          <div class="jz_card_intro_item">
            <p class="jz_intro_left">对象</p>
            <p class="jz_intro_right">浙江科技学院教育基金会</p>
          </div>
          <div class="jz_card_intro_item">
            <p class="jz_intro_left">日期</p>
            <p class="jz_intro_right">2019-10-01</p>
          </div>
        </div>
        <div class="jz_more">
          <div class="jz_more_title">
            <p>查看寄语</p>
          </div>
          <div class="jz_arrow" @click="OnMoreClick">
            <img src="@/assets/arrow-right.png"
            :class="[arrow ? 'jz_arrow' : 'jz_arrow_on']"
            />
          </div>
        </div>
        <div class="jz_more_content" v-show="message">
          <p>是非成败转头空，青山依旧在，惯看秋月春风。一壶浊酒喜相逢，古今多少事滚滚长江东逝水浪花淘尽英雄。
            几度夕阳红。白发渔樵江渚上，都付笑谈中滚滚长江东逝水，浪花淘尽英雄是非成败转头空，青山依旧在，几度夕阳红白发渔樵江渚上，惯看秋月春风。一壶浊酒喜相逢古今多少事都付笑谈中。</p>
        </div>
      </li>
    </ul>
    </div>
  </div>
</template>

<script>
import Bscroll from 'better-scroll'
export default {
  data () {
    return {
      arrow: true,
      message: false
    }
  },
  methods: {
    OnMoreClick () {
      this.arrow = !this.arrow
      this.message = !this.message
    }
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
  .jz_wrapper
    overflow: hidden
    .jz_total
      margin: .17rem
      padding: 0 .35rem
      background: #fff
      border-radius: .2rem
      height: 1.11rem
      line-height: 1.11rem
      display: flex
      justify-content: space-between
      .jz_desc
        font-size: .32rem
        letter-spacing: .04rem
        color: #2e2623
      .jz_total_number
        letter-spacing: .06rem
        font-size: .35rem
        color: #231815
  .jz_card
    display: flex
    flex-direction: column
    background: #fff
    margin: .17rem
    border-radius: .2rem
    .jz_card_title
      text-align: center
      letter-spacing: .03rem
      color: #717071
      font-size: .25rem
      padding: .36rem 0 0 .1rem
    .jz_card_number
      text-align: center
      letter-spacing: .04rem
      font-size: .5rem
      color: #231815
      padding-bottom: .58rem
    .jz_card_intro
      display: flex
      flex-direction: column
      border-bottom: .02rem solid #d5d6d7
      .jz_card_intro_item
        height: .45rem
        font-size: .25rem
        letter-spacing: .02rem
        display: flex
        margin: 0 0 .22rem .38rem
        .jz_intro_left
          margin-right: .6rem
          color: #717071
        .jz_intro_right
          color: #2e2623
    .jz_more
      display: flex
      justify-content: space-between
      height: .8rem
      line-height: .8rem
      padding: 0 .4rem
      .jz_more_title
        font-size: .25rem
        letter-spacing: .02rem
        color: #2e2623
      .jz_arrow
        img
          height: .26rem
          width: auto
      .jz_arrow_on
         transform: rotate(90deg)
    .jz_more_content
      padding: 0 .4rem .49rem
      font-size: .22rem
      line-height: .37rem
      letter-spacing: .02rem
      color: #717071
</style>
