<template>
  <div>
    <header-title>基金捐赠</header-title>
    <donation-img :list="bannerlist"></donation-img>
    <div class="do_money">
      <p>捐赠金额</p>
      <div class="do_money_total">
        <div class="do_money_box">
          <div class="do_money_box_item" @click="OnMoneyClick">
            <input v-model="donate_number" type="radio" id="five" name="money" value="5"/>
            <label for="five">5元</label>
          </div>
          <div class="do_money_box_item" @click="OnMoneyClick">
            <input v-model="donate_number" type="radio" id="ten" name="money" value="10"/>
            <label for="ten">10元</label>
          </div>
          <div class="do_money_box_item" @click="OnMoneyClick">
            <input v-model="donate_number" type="radio" id="twenty" name="money" value="20"/>
            <label for="twenty">20元</label>
          </div>
          <div class="do_money_box_item" @click="OnOtherClick">
            <input type="radio" id="other" name="money" />
            <label for="other">其他</label>
          </div>
        </div>
          <div class="do_money_other" v-show="other">
            <p class="do_money_desc">输入金额</p>
            <input v-model="donate_number" class="do_money_input" @input="handlenumber"/>
          </div>
      </div>
    </div>
   <div class="do_option">
    <p>选填</p>
    <div class="do_option_box">
      <div class="do_option_box_item">
        <p class="do_option_desc"> 姓名</p>
        <input v-model="donor_name" class="do_option_input" type="text" />
      </div>
      <div class="do_option_box_item">
        <p class="do_option_desc">手机</p>
        <input v-model="d_phone_number" @input="dhandlephone"/>
      </div>
      <div class="do_option_box_item">
        <p class="do_option_desc">邮箱</p>
        <input v-model="d_email" class="do_option_input" type="text" />
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
            <input v-model="d_class" class="do_option_input" type="text" />
          </div>
          <div class="do_option_box_item" style="border:none">
            <p class="do_option_desc">工作单位</p>
            <input v-model="d_company" class="do_option_input" type="text" />
          </div>
        </div>
      </transition>
    </div>
  </div>
  <div>
    <div class="do_send">
    <textarea v-model="d_remark" class="do_sendword" placeholder="捐赠寄语" rows="3"></textarea>
  </div>
  <div class="do_send_button" @click="OnDrinkClick">
    捐赠提交
  </div>
  </div>
    <router-view/>
  </div>
</template>

<script>
import {getBannerList} from '@/api/banner'
import HeaderTitle from 'common/Header'
import DonationImg from './components/Img'
import { Dialog } from 'vant'
export default {
  name: 'Donation',
  created () {
    this._getBannerList()
  },
  components: {
    HeaderTitle,
    DonationImg
  },
  data () {
    return {
      other: false,
      content: false,
      arrow: true,
      donate_number: '',
      donor_name: '',
      d_phone_number: '',
      d_email: '',
      d_class: '',
      d_company: '',
      d_remark: '',
      bannerlist: []
    }
  },
  methods: {
    OnOtherClick () {
      this.other = !this.other
    },
    OnMoneyClick () {
      this.other = false
    },
    OnContentClick () {
      this.content = !this.content
      this.arrow = !this.arrow
    },
    OnDrinkClick () {
      this.$http.post('/api/member/donate-add',
        {
          // id: this.id,
          // member_id: this.member_id,
          donate_number: this.donate_number,
          to_donate_people: this.to_donate_people,
          donor_name: this.donor_name,
          d_phone_number: this.d_phone_number,
          d_email: this.d_email,
          d_class: this.d_class,
          d_company: this.d_company,
          // d_state: this.d_state,
          // p_state: this.p_state,
          // p_id: this.p_id,
          d_remark: this.d_remark
        }
      )
        .then((response) => {
          alert('okok')
          Dialog.alert({
            title: '成功提交',
            message: '您已成功提交，感谢您对母校的建设发展提供支持。谨代表校友之家的全体人员向捐赠的校友致以最诚挚的谢意！',
            width: '5.38rem',
            confirmButtonColor: '#231815'
          }).then(() => {
            this.$router.replace('/donation/drink')
          })
        },
        (response) => {
          alert('nono')
        }
        )
    },
    handlenumber (e) {
      this.donate_number = e.target.value.replace(/[^\d]/g, '')
    },
    dhandlephone (e) {
      this.d_phone_number = e.target.value.replace(/[^\d]/g, '')
    },
    _getBannerList () {
      getBannerList().then((res) => {
        res = res.data
        this.bannerlist = res
      })
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
