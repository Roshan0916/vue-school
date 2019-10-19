<template>
  <div>
    <tab></tab>
    <router-view/>
  </div>
</template>

<script>
import Tab from './pages/tab/Tab'
export default {
  name: 'App',
  components: {
    Tab
  }
}
</script>

<style>

</style>
