<template>
  <div class="bg">
    <return-header>我的资料</return-header>
    <form @submit.prevent="OnSendClick" >
      <div class="zi_xinxi">
      <p class="zi_p">个人信息</p>
      <div class="zi_box">
        <p class="zi_star">*</p>
        <div class="zi_desc">
          <p>姓名</p>
          <input v-validate="'required'" name="mm_name" v-model="newslist.mm_name" type="text" class="zi_input" />
        </div>
      </div>
      <div class="zi_box">
        <p class="zi_star">*</p>
        <div class="zi_desc">
          <p>手机</p>
          <input v-validate="'required'" name="mm_phone_number" v-model="newslist.mm_phone_number" class="zi_input" @input="handlePhone"/>
        </div>
      </div>
      <div class="zi_box">
        <p class="zi_star">*</p>
        <div class="zi_desc">
          <p>邮箱</p>
          <input v-validate="'required'" name="mm_email" v-model="newslist.mm_email" type="text" class="zi_input" />
        </div>
      </div>
      <div class="zi_box">
        <p class="zi_star">*</p>
        <div class="zi_desc">
          <p>地区</p>
          <input v-validate="'required'" @click="showPopup"  name="mm_province" type="text" class="zi_input_1" v-model="newslist.mm_province"/>
          <input v-validate="'required'" @click="showPopup"  name="mm_city" type="text" class="zi_input_1" v-model="newslist.mm_city"/>
         <van-popup v-model="show" position="bottom">
            <van-area :area-list="areaList" @confirm="onAddrConfirm" :columns-num="2" @cancel="onAddrCancel" title="标题"/>
        </van-popup>
        </div>
      </div>
      <div class="zi_box">
        <p class="zi_star"></p>
        <div class="zi_desc1">
          <p>单位</p>
          <input v-model="newslist.mm_company" type="text" class="zi_input" />
        </div>
      </div>
    </div>
    <div class="zi_xinxi">
      <p class="zi_p">校友信息</p>
      <div class="zi_box">
        <p class="zi_star"></p>
        <div class="zi_desc">
          <p>学院</p>
          <input v-model="newslist.mm_college" type="text" class="zi_input" />
        </div>
      </div>
      <div class="zi_box">
        <p class="zi_star"></p>
        <div class="zi_desc">
          <p>专业班级</p>
          <input v-model="newslist.mm_class" type="text" class="zi_input" />
        </div>
      </div>
      <div class="zi_box">
        <p class="zi_star"></p>
        <div class="zi_desc1">
          <p>入学时间</p>
          <input v-model="newslist.mm_entrance_data" type="text" class="zi_input" />
        </div>
      </div>
    </div>
    <div class="zi_button" @click="OnSendClick">提交</div>
    </form>
  </div>
</template>

<script>
import ReturnHeader from 'common/ReturnHeader'
import { Dialog } from 'vant'
import AddressInfo from 'common/areaList.js'
import axios from 'axios'
export default {
  components: {
    ReturnHeader
  },
  data () {
    return {
      mm_name: '',
      mm_phone_number: '',
      mm_email: '',
      mm_company: '',
      mm_college: '',
      mm_class: '',
      mm_entrance_data: '',
      show: false,
      areaList: AddressInfo,
      mm_province: '',
      mm_city: '',
      newslist: {}
    }
  },
  methods: {
    getDonationInfo () {
      axios.get('/api/member/memberFile-view')
        .then(this.getDonationInfoSucc)
    },
    getDonationInfoSucc (res) {
      res = res.data
      const data = res.data
      this.newslist = data
      console.log(data)
    },
    onSelAddr () {
      this.show = true
    },
    onAddrConfirm (val) {
      this.show = false
      this.newslist.mm_province = val[0].name
      this.newslist.mm_city = val[1].name
      console.log(val[0].name)
      console.log(val[1].name)
    },
    onAddrCancel () {
      this.show = false
    },
    showPopup () {
      this.show = true
    },
    OnSendClick () {
      this.$validator.validateAll().then((result) => {
        if (result) {
          this.OnDataClick()
        } else {
          Dialog.alert({
            title: '提交失败',
            message: '请输入必填项',
            width: '5.38rem',
            confirmButtonColor: '#231815'
          })
        }
      })
    },
    OnDataClick () {
      this.$http.post('/api/member/memberFile-edit',
        this.newslist
      )
        .then((response) => {
          alert('okok')
        },
        (response) => {
          alert('nono')
        }
        )
    },
    handlePhone (e) {
      this.mm_phone_number = e.target.value.replace(/[^\d]/g, '')
    }
  },
  mounted () {
    this.getDonationInfo()
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
  .zi_xinxi
    border-bottom: .02rem solid #d5d6d7
    .zi_p
      font-size: .25rem
      line-height: .43rem
      letter-spacing: .02rem
      color: #717071
      padding: .15rem .5rem
      border-bottom: .02rem solid #d5d6d7
    .zi_wrapper
      border-bottom: .02rem solid #d5d6d7
    .zi_box
      height: .98rem
      background: #fff
      line-height: .98rem
      display: flex
      justify-content: space-between
      .zi_star
        color: #d8281c
        margin: 0 0 0 .24rem
        font-size: .32rem
      .zi_desc
        width: 7rem
        border-bottom: .02rem solid #d5d6d7
        p
          float: left
          font-size: .3rem
          letter-spacing: .04rem
        .zi_input
          height: .98rem
          line-height: .98rem
          width: 5rem
          margin-right: .4rem
          background-color: transparent
          direction: rtl
          float: right
          letter-spacing: .03rem
          color: #2e2623
          font-size: .32rem
        .zi_input_1
          display: inline-block
          width: 2.5rem
          height: .98rem
          line-height: .98rem
          margin-right: .4rem
          background-color: transparent
          direction: rtl
          float: right
          letter-spacing: .03rem
          color: #2e2623
          font-size: .32rem
      .zi_desc1
        width: 7rem
        p
          float: left
          font-size: .3rem
          letter-spacing: .04rem
        .zi_input
          height: .98rem
          line-height: .98rem
          width: 5rem
          margin-right: .4rem
          background-color: transparent
          direction: rtl
          float: right
          letter-spacing: .03rem
          color: #2e2623
          font-size: .32rem
  .zi_button
    width: 2.3rem
    height: .85rem
    font-size: .32rem
    letter-spacing: .05rem
    margin: .2rem auto 1rem
    line-height: .85rem
    text-align: center
    border-radius: .6rem
    background: #fff
    border: .02rem solid #dbdbdd
</style>
