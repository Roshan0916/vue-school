<template>
<div class="do_money">
  <p>捐赠金额</p>
  <div class="do_money_total">
    <div class="do_money_box">
      <div class="do_money_box_item" @click="OnMoneyClick">
        <input type="radio" id="five" name="money" />
        <label for="five">5元</label>
      </div>
      <div class="do_money_box_item" @click="OnMoneyClick">
        <input type="radio" id="ten" name="money" />
        <label for="ten">10元</label>
      </div>
      <div class="do_money_box_item" @click="OnMoneyClick">
        <input type="radio" id="twenty" name="money" />
        <label for="twenty">20元</label>
      </div>
      <div class="do_money_box_item" @click="OnOtherClick">
        <input type="radio" id="other" name="money" />
        <label for="other">其他</label>
      </div>
    </div>
      <div class="do_money_other" v-show="other">
        <p class="do_money_desc">输入金额</p>
        <input class="do_money_input" />
      </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'DonationMoney',
  data () {
    return {
      other: false
    }
  },
  methods: {
    OnOtherClick () {
      this.other = !this.other
    },
    OnMoneyClick () {
      this.other = false
    }
  }
}
</script>

<style lang="stylus" scoped>
.money-enter-active,.money-leave-active
  transition: all .5s
.money-leave-active,.money-enter
  height: 0rem
.money-leave,.money-enter-to
  height: .79rem
.do_money
  margin: .19rem .17rem 0 .17rem
  p
    padding: 0 0 .16rem .3rem
    font-size: .3rem
    letter-spacing: .06rem
    color: #2e2623
  .do_money_total
    background: #fff
    border-radius: .2rem
    padding: 0 .44rem 0 .35rem
    .do_money_box
      line-height: .77rem
      font-size: .32rem
      display: flex
      justify-content: space-between
      .do_money_box_item
        input[type="radio"]+label::before
          content: "\a0"
          /*不换行空格*/
          display: inline-block
          vertical-align: middle
          width: .32rem
          height: .32rem
          margin: .1rem .25rem .1rem 0
          border-radius: 50%
          box-shadow: 0 0 .05rem #dcdcdc
          padding: .04rem
          background-color: #dcdcdc
          background-clip: content-box
        input[type="radio"]:checked+label::before
          background-color: #4c4949
          background-clip: content-box
        input[type="radio"]
          position: absolute
          clip: rect(0, 0, 0, 0)
    .do_money_other
      border-top: .02rem solid #dbdbdd
      height: .79rem
      line-height: .79rem
      // display: none
      .do_money_desc
        float: left
        padding-right: .2rem
        letter-spacing: .04rem
        margin-left: 0
      .do_money_input
        float: left
        font-size: .32rem
        height: .79rem
        line-height: .79rem
        flex: 1
        background-color: transparent
        border: none
</style>
