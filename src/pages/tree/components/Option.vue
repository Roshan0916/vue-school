<template>
  <div>
    <div class="tree_option_box">
      <div class="tree_option_box_item">
        <p class="tree_option_desc">认养类型</p>
        <div class="tree_choose">
          <div class="tree_box_item">
            <input type="radio" id="geren" name="people" />
            <label for="geren">个人</label>
          </div>
          <div class="tree_box_item">
            <input type="radio" id="jiti" name="people" />
            <label for="jiti">集体</label>
          </div>
        </div>
      </div>
      <div class="tree_option_box_item">
        <p class="tree_option_desc">姓名</p>
        <input class="tree_option_input" type="text" />
      </div>
      <div class="tree_option_box_item">
        <p class="tree_option_desc">手机</p>
        <input class="tree_option_input" type="number" οncοpy="return false" οnpaste="return false" pattern="[0-9]*" />
      </div>
      <div class="tree_option_box_item">
        <p class="tree_option_desc">认养人</p>
        <input class="tree_option_input" type="text" />
      </div>
      <div class="tree_option_box_item1">
        <p class="tree_option_desc">认养单位</p>
        <input class="tree_option_input" type="text" />
      </div>
    </div>
    <div class="tree_explain">
      <textarea class="tree_sendword" placeholder="申请说明" rows="3"></textarea>
    </div>
    <div class="tree_send_button">
      提交申请
    </div>
  </div>
</template>

<script>
export default {
  name: 'TreeOption'
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
  margin: .2rem auto 0
  line-height: .85rem
  text-align: center
  border-radius: .6rem
  background: #fff
  border: .02rem solid #dbdbdd
</style>
