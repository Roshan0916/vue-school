<template>
  <div>
    <div class="zi_xinxi">
    <p class="zi_p">个人信息</p>

    <div class="zi_box">
      <p class="zi_star">*</p>
      <div class="zi_desc">
        <p>姓名</p>
        <input type="text" class="zi_input" />
      </div>
    </div>
    <div class="zi_box">
      <p class="zi_star">*</p>
      <div class="zi_desc">
        <p>手机</p>
        <input type="number" οncοpy="return false" οnpaste="return false" pattern="[0-9]*" class="zi_input" />
      </div>
    </div>
    <div class="zi_box">
      <p class="zi_star">*</p>
      <div class="zi_desc">
        <p>邮箱</p>
        <input type="text" class="zi_input" />
      </div>
    </div>
    <div class="zi_box">
      <p class="zi_star">*</p>
      <div class="zi_desc">
        <p>地区</p>
        <input type="text" class="zi_input" />
      </div>
    </div>
    <div class="zi_box">
      <p class="zi_star"></p>
      <div class="zi_desc1">
        <p>单位</p>
        <input type="text" class="zi_input" />
      </div>
    </div>
  </div>
  <div class="zi_xinxi">
    <p class="zi_p">校友信息</p>
    <div class="zi_box">
      <p class="zi_star"></p>
      <div class="zi_desc">
        <p>学院</p>
        <input type="text" class="zi_input" />
      </div>
    </div>
    <div class="zi_box">
      <p class="zi_star"></p>
      <div class="zi_desc">
        <p>专业班级</p>
        <input type="text" class="zi_input" />
      </div>
    </div>
    <div class="zi_box">
      <p class="zi_star"></p>
      <div class="zi_desc1">
        <p>入学时间</p>
        <input type="text" class="zi_input" />
      </div>
    </div>
  </div>
  </div>
</template>

<script>
export default {
  name: 'MyInfo'
}
</script>

<style lang="stylus" scoped>
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
</style>
