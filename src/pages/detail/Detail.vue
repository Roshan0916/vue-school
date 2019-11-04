<template>
  <div>
    <home-return>我的资料</home-return>
    <div>
      <div class="top">
        <div class="top_img">
          <img src="@/assets/banner-icon.png" />
        </div>
        <div class="top_desc">
          <p class="desc1">{{bannerlist.news_title}}</p>
          <p class="desc2">{{bannerlist.created_at}}</p>
        </div>
        <div class="top_zan">
          <img src="@/assets/goodgood.png" />
          <p class="zan_desc">{{bannerlist.likes_number}}</p>
        </div>
      </div>
      <div class="banner_img">
        <img :src="bannerlist.news_photo_url"/>
      </div>
      <div class="banner_desc">
        <p>{{bannerlist.news_content}}</p>
      </div>
    </div>
  </div>
</template>

<script>
import HomeReturn from 'common/HomeReturn'
import axios from 'axios'
export default {
  name: 'Detail',
  data () {
    return {
      bannerlist: {}
    }
  },
  components: {
    HomeReturn
  },
  methods: {
    getDetailInfo () {
      axios.get('/api/member/news-view', {
        params: {
          id: this.$route.params.id
        }
      })
        .then(this.getDetailInfoSucc)
    },
    getDetailInfoSucc (res) {
      res = res.data
      const data = res.data
      this.bannerlist = data
      console.log(this.$route.params.id)
    }
  },
  mounted () {
    this.getDetailInfo()
  },
  activated () {
    this.getDetailInfo()
  }
}
</script>

<style lang="stylus" scoped>
   .top
      box-sizing: border-box
      padding: .23rem .34rem 0 .41rem
      height: .96rem
      overflow: hidden
      .top_img
        float: left
        img
          height: .52rem
          width: .62rem
      .top_desc
        float: left
        min-width: 1rem
        margin-left: .12rem
        .desc1
          font-size: .26rem
          line-height .3rem
          letter-spacing: .04rem
          margin-bottom :0
          width: 4rem
          color: #231815
          overflow: hidden
          text-overflow: ellipsis
          white-space: nowrap
        .desc2
          font-size: .2rem
          margin:0
          padding: 0
          color: #9fa0a0;
      .top_zan
        margin: .1rem .01rem 0 0
        float: right
        display: flex
        img
          width: .37rem
          height: .36rem
          float: left
        .zan_desc
          float: left
          color: #9fa0a0
          font-size: .2rem
          margin-top: .1rem
          margin-left: .03rem
    .banner_img
      height: 3.34rem
      width: 100%
      background: #fff
      overflow: hidden
      img
        width: 100%
        object-fit: cover
    .banner_desc
      font-size: .22rem
      line-height: .33rem
      letter-spacing: .03rem
      color: #2e2623
      padding: .5rem .3rem 0 .3rem
      margin-bottom :1.2rem!important
</style>
