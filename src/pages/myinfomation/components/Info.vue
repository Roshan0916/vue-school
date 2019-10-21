<template>
  <div>
    <p class="title">个人信息</p>
    <van-cell-group>
      <van-field
        v-model="username"
        required
        clearable
        label="姓名"
      />
      <van-field
        v-model="password"
        label="手机"
        required
      />
      <van-field
        v-model="username"
        required
        clearable
        label="邮箱"
      />
      <van-field
        v-model="password"
        type="password"
        label="密码"
        required
      />
    </van-cell-group>
  </div>
</template>

<script>
export default {
  name: 'MyInfo',
  data () {
    return {
      username: 'username',
      password: 'password'
    }
  }
}
</script>

<style lang="stylus" scoped>
.title
  font-size: .25rem
  line-height: .43rem
  letter-spacing: .02rem
  color: #717071
  padding: .15rem .5rem
</style>
