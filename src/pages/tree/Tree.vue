<template>
  <div>
    <header-title>认养大树</header-title>
    <tree-img :list="bannerlist"></tree-img>
    <form>
      <div class="tree_option_box">
        <div class="tree_option_box_item">
          <p class="tree_option_desc">认养类型</p>
          <div class="tree_choose">
            <div class="tree_box_item">
              <input v-model="adopt_type" type="radio" id="geren" value="geren" name="people" />
              <label for="geren">个人</label>
            </div>
            <div class="tree_box_item">
              <input v-model="adopt_type" type="radio" id="jiti" value="jiti" name="people" />
              <label for="jiti">集体</label>
            </div>
          </div>
        </div>
        <div class="tree_option_box_item">
          <p class="tree_option_desc">姓名</p>
          <input v-model="adopter_name" class="tree_option_input" type="text"/>
        </div>
        <div class="tree_option_box_item">
          <p class="tree_option_desc">手机</p>
          <input v-model="a_phone_number" class="tree_option_input" @input="handlePhone"/>
        </div>
        <div class="tree_option_box_item">
          <p class="tree_option_desc">认养人</p>
          <input v-model="a_email" class="tree_option_input" type="text" />
        </div>
        <div class="tree_option_box_item1">
          <p class="tree_option_desc">认养单位</p>
          <input v-model="a_company" class="tree_option_input" type="text" />
        </div>
      </div>
      <div class="tree_explain">
        <textarea v-model="adopt_ask_reason" class="tree_sendword" placeholder="申请说明" rows="3"></textarea>
      </div>
      <button class="tree_send_button" @click="OnTreeClick">
        提交申请
      </button>
    </form>
  </div>
</template>

<script>
import HeaderTitle from 'common/Header'
import TreeImg from './components/Img'
import {getBannerList} from '@/api/banner'
export default {
  created () {
    this._getBannerList()
  },
  components: {
    HeaderTitle,
    TreeImg
  },
  data () {
    return {
      adopt_type: '',
      adopter_name: '',
      a_phone_number: '',
      a_email: '',
      a_company: '',
      adopt_ask_reason: '',
      bannerlist: []
    }
  },
  methods: {
    OnTreeClick () {
      this.$http.post('/api/member/adopt-add',
        {
          // id: this.id,
          // member_id: this.member_id,
          adopter_name: this.adopter_name,
          a_phone_number: this.a_phone_number,
          a_email: this.a_email,
          a_company: this.a_company,
          a_class: this.a_class,
          a_state: this.a_state,
          adopt_type: this.adopt_type,
          adopt_ask_reason: this.adopt_ask_reason,
          ask_result_reply: this.ask_result_reply,
          reply_id: this.reply_id
        }
      )
        .then((response) => {
          this.$router.replace('/me/myadoption')
        },
        (response) => {
          alert('nono')
        }
        )
    },
    handlePhone (e) {
      this.a_phone_number = e.target.value.replace(/[^\d]/g, '')
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
.tree_option_box
  margin: .17rem
  height: 4.61rem
  padding: 0 .38rem 0 .33rem
  background: #fff
  border-radius: .2rem
  font-size: .32rem
  .tree_option_box_item
    border-bottom: .02rem solid #d5d6d7
    height: .9rem
    line-height: .9rem
    display: flex
    justify-content: space-between
    .tree_choose
      margin-right: .4rem
      .tree_box_item
        float: left
        margin-left: .3rem
        input[type="radio"]+label::before
          content: "\a0"
          display: inline-block
          vertical-align: middle
          width: .32rem
          height: .32rem
          margin: .1rem .25rem
          border-radius: 50%
          box-shadow: 0 0 .05rem #dcdcdc
          padding: .04rem
          background-color: #dcdcdc
          background-clip: content-box
        input[type="radio"]:checked+label::before
          background-color: #4c4949
          background-clip: content-box
        input[type="radio"]
          position: absolute;
          clip: rect(0, 0, 0, 0)
    .tree_option_desc
      padding-right: .2rem
    .tree_option_input
      min-width: 4.5rem
      background-color: transparent
  .tree_option_box_item1
    height: .9rem
    line-height: .9rem
    display: flex
    justify-content: space-between
    .tree_option_desc
      padding-right: .2rem
    .tree_option_input
      min-width: 4.5rem
      background-color: transparent
.tree_explain
  margin: .19rem .17rem 0 .17rem
  height: 1.96rem
  padding: .24rem .35rem
  background: #fff
  border-radius: .2rem
  .tree_sendword
    font-size: .3rem
    line-height: .43rem
    letter-spacing: .04rem
    width: 100%
.tree_send_button
  width: 2.3rem
  height: .85rem
  font-size: .32rem
  letter-spacing: .05rem
  margin: .2rem 0 0 2.6rem
  line-height: .85rem
  text-align: center
  border-radius: .6rem
  background: #fff
  border: .02rem solid #dbdbdd
</style>
