<template>
  <div class="money">
    <p>捐赠金额</p>
    <a-radio-group @change="onChange" v-model="value" class="money_total">
      <a-radio :value="1">5元</a-radio>
      <a-radio :value="2">10元</a-radio>
      <a-radio :value="3">20元</a-radio>
      <a-radio :value="4">其他</a-radio>
    </a-radio-group>
  </div>
</template>

<script>
export default {
  name: 'DonationMoney',
  data () {
    return {
      value: 1
    }
  },
  methods: {
    onChange (e) {
      console.log('radio checked', e.target.value)
    }
  }
}
</script>

<style lang="stylus" scoped>
  .money
    box-sizing: border-box
    margin: .19rem .17rem 0 .17rem
    p
      padding: 0 0 .16rem .3rem
      font-size: .3rem
      letter-spacing: .06rem
      color: #2e2623
    .money_total
      width: 100%
      background: #fff
      border-radius: .2rem
      padding: .1rem .44rem .1rem .35rem
      .ant-radio-wrapper
        font-size: .32rem
        margin: 0 .11rem
      .ant-radio-wrapper >>> .ant-radio-inner
        line-height:.4rem
        box-sizing: border-box
        font-size: .3rem
        position: relative
        top: 0
        left: 0
        display: block
        width: .4rem
        height: .4rem
        background-color: #fff
        border-width: .02rem
        border-style: solid
        border-color: #dcdcdc
        &::after
          height: .32rem
          width: .32rem
          margin: -0.04rem
          background : #4c4949
</style>
