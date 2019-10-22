<template>
  <div>
    <div class="do_send">
    <textarea class="do_sendword" placeholder="捐赠寄语" rows="3"></textarea>
  </div>
  <div class="do_send_button" @click="OnDrinkClick">
    捐赠提交
  </div>
  </div>
</template>

<script>
import { Dialog } from 'vant'
export default {
  name: 'DonationSend',
  methods: {
    OnDrinkClick () {
      Dialog.alert({
        title: '成功提交',
        message: '您已成功提交，感谢您对母校的建设发展提供支持。谨代表校友之家的全体人员向捐赠的校友致以最诚挚的谢意！',
        width: '5.38rem',
        confirmButtonColor: '#231815'
      }).then(() => {
        this.$router.replace('/donation/drink')
      })
    }
  }
}
</script>

<style lang="stylus">
.do_send
  margin: .19rem .17rem 0 .17rem
  height: 1.68rem
  padding: .24rem .3rem .1rem .3rem
  background: #fff
  border-radius: .2rem
  .do_sendword
    font-size: .3rem
    line-height: .43rem
    letter-spacing: .04rem
    border: none
    padding:0
    width: 100%
.do_send_button
  touch-action: none
  width: 2.3rem
  height: .85rem
  font-size: .32rem
  letter-spacing: .05rem
  margin: .2rem auto 1.2rem
  line-height: .85rem
  text-align: center
  border-radius: .6rem
  background: #fff
  border: .02rem solid #dbdbdd
.van-dialog__message--has-title
  font-size: .24rem
</style>
