<template>
  <div class="bg">
    <in-header></in-header>
    <my-info></my-info>
  </div>
</template>

<script>
import InHeader from './components/Header'
import MyInfo from './components/Info'
export default {
  components: {
    InHeader,
    MyInfo
  }
}
</script>

<style lang="stylus" scoped>
.bg
  position: fixed
  z-index: 100
  top: 0
  left: 0
  bottom: 0
  right: 0
  background: #f3f3f4
</style>
