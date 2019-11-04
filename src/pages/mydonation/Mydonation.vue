<template>
  <div>
    <return-header>我的捐赠</return-header>
    <my-card :list="newslist"></my-card>
  </div>
</template>

<script>
import axios from 'axios'
import ReturnHeader from 'common/ReturnHeader'
import MyCard from './components/Card'
export default {
  components: {
    ReturnHeader,
    MyCard
  },
  data () {
    return {
      newslist: []
    }
  },
  methods: {
    getDonationInfo () {
      axios.get('/api/member/donate-list-by-member')
        .then(this.getDonationInfoSucc)
    },
    getDonationInfoSucc (res) {
      res = res.data
      const data = res.data
      this.newslist = data
      console.log(res)
    }
  },
  mounted () {
    this.getDonationInfo()
  }
}
</script>

<style lang="stylus" scoped>
</style>
