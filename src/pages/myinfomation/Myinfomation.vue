<template>
  <div class="bg">
    <return-header>我的资料</return-header>
    <my-info></my-info>
  </div>
</template>

<script>
import ReturnHeader from 'common/ReturnHeader'
import MyInfo from './components/Info'
export default {
  components: {
    ReturnHeader,
    MyInfo
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
</style>
