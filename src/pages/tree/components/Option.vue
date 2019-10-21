<template>
  <div>
    <div class="tree_option_box">
    <van-cell-group>
      <van-field label="认养类型"/>
      <van-field label="姓名"/>
      <van-field label="手机"/>
      <van-field label="认养人"/>
      <van-field label="认养单位" class="final"/>
    </van-cell-group>
    </div>
    <div class="tree_explain">
      <van-field
      rows="3"
      autosize
      type="textarea"
      placeholder="申请说明"
      />
    </div>
    <div class="tree_button">
      <van-button round block>提交申请</van-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TreeOption'
}
</script>

<style lang="stylus">
.tree_option_box
  margin: .17rem
  background: #fff
  border-radius: .2rem
  font-size: .32rem
  overflow: hidden
  .van-field__label
   font-size: .32rem
  .van-cell:not(:last-child)::after
    position: absolute
    box-sizing: border-box
    content: ' '
    pointer-events: none
    right: 0
    bottom: 0
    border-bottom: 2px solid #d5d6d7
    left: 16px
    right: 16px
    -webkit-transform: scaleY(.5)
    transform: scaleY(.5)
  [class*=van-hairline]::after
    border: none
.tree_explain
  margin: .19rem .17rem 0 .17rem
  height: 1.96rem
  background: #fff
  border-radius: .2rem
  overflow: hidden
  .van-cell
    font-size:.32rem
    letter-spacing: .04rem
.tree_button
  margin:.2rem auto 0
  .van-button
    width: 2.3rem
    height: .85rem
    font-size: .32rem
    letter-spacing: .05rem
    margin: .2rem auto 0
    line-height: .85rem
    text-align: center
    border-radius: .6rem
    background: #fff
    border: .02rem solid #dbdbdd
</style>
