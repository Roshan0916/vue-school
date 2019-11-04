<template>
  <div>
    <return-header>我的认养</return-header>
    <my-card :list="adoptlist"></my-card>
  </div>
</template>

<script>
import ReturnHeader from 'common/ReturnHeader'
import MyCard from './components/Card'
import axios from 'axios'
export default {
  components: {
    ReturnHeader,
    MyCard
  },
  data () {
    return {
      adoptlist: []
    }
  },
  methods: {
    getAdoptInfo () {
      axios.get('/api/member/adopt-list-by-member')
        .then(this.getAdoptInfoSucc)
    },
    getAdoptInfoSucc (res) {
      res = res.data
      const data = res.data
      this.adoptlist = data
      console.log(res)
    }
  },
  mounted () {
    this.getAdoptInfo()
  }
}
</script>

<style lang="stylus" scoped>
</style>
