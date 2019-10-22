<template>
  <div class="do_option">
    <p>选填</p>
    <div class="do_option_box">
      <div class="do_option_box_item">
        <p class="do_option_desc"> 姓名</p>
        <input class="do_option_input" type="text" />
      </div>
      <div class="do_option_box_item">
        <p class="do_option_desc">手机</p>
        <input type="number" />
      </div>
      <div class="do_option_box_item">
        <p class="do_option_desc">邮箱</p>
        <input class="do_option_input" type="text" />
      </div>
      <div class="do_option_box_item_more">
        <p class="do_option_more">更多信息</p>
        <div class="more_img" @click="OnContentClick">
          <img src="@/assets/arrow-right.png"
          :class="[arrow ? 'more_img' : 'more_img_on']"
         />
        </div>
      </div>
      <transition name="mybox">
        <div class="do_more_content" v-show="content">
          <div class="do_option_box_item">
            <p class="do_option_desc">专业班级</p>
            <input class="do_option_input" type="text" />
          </div>
          <div class="do_option_box_item" style="border:none">
            <p class="do_option_desc">工作单位</p>
            <input class="do_option_input" type="text" />
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DonationOption',
  data () {
    return {
      content: false,
      arrow: true
    }
  },
  methods: {
    OnContentClick () {
      this.content = !this.content
      this.arrow = !this.arrow
    }
  }

}
</script>

<style lang="stylus" scoped>
.mybox-enter-active, .mybox-leave-active
  transition: all .5s
.mybox-leave-active,.mybox-enter
  height: 0rem
.mybox-leave,.mybox-enter-to
  height: 1.58rem
.do_option
  margin: .19rem .17rem 0 .17rem
  p
    padding: 0 0 .16rem .33rem
    font-size: .3rem
    letter-spacing: .06rem
    color: #2e2623
  .do_option_box
    padding: 0 .38rem 0 .33rem
    background: #fff
    border-radius: .2rem
    font-size: .32rem
    .do_more_content
      overflow: hidden
    .do_option_box_item
      border-bottom: .02rem solid #d5d6d7
      height: .79rem
      line-height: .79rem
      display: flex
      .do_option_desc
        padding-right: .2rem
        margin-left: 0
      .do_option_input
        font-size: .32rem
        height: .79rem
        line-height: .79rem
        flex: 1
        background-color: transparent
        border: none
    .do_option_box_item_more
      height: .79rem
      line-height: .79rem
      display: flex
      justify-content: space-between
      .do_option_more
        font-size: .22rem
        letter-spacing: .02rem
        color: #7d7d7d
        margin-left: 0
      .more_img
        img
          height: .26rem
          width: .15rem
      .more_img_on
         transform: rotate(90deg)
</style>
