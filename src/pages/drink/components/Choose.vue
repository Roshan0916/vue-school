<template>
  <div>
    <div class="drink_choose">
    <div class="drink_choose_item">
      <input type="radio" id="coffee" name="drink" />
      <label for="coffee">咖啡/COFFEE</label>
      <div class="drink_choose_img">
        <img src="@/assets/coffee.png" />
      </div>
    </div>
    <div class="drink_choose_item">
      <input type="radio" id="green" name="drink" />
      <label for="green">绿茶/GREEN TEA</label>
      <div class="drink_choose_img">
        <img src="@/assets/green-tea.png">
      </div>
    </div>
    <div class="drink_choose_item">
      <input type="radio" id="black" name="drink" />
      <label for="black">红茶/BLACK TEA</label>
      <div class="drink_choose_img">
        <img src="@/assets/black-tea.png">
      </div>
    </div>
  </div>
  <div class="drink_button">
    <div class="drink_button_item">确定</div>
    <div class="drink_button_item">不需要</div>
  </div>
  <div class="drink_ps">
    <p> 校友之家是公益性场馆<br>
      感谢您向学校教育基金会捐赠资金支持学校建设发展<br>
      校友之家的志愿者为您准备了小食或茶饮请您选择</p>
  </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="stylus" scoped>
.drink_choose
  .drink_choose_item
    height: 1.18rem
    line-height: 1.18rem
    background: #fff
    border-radius: .3rem
    padding-left: .78rem
    margin: .2rem
    font-size: .37rem
    letter-spacing: .05rem
    overflow: hidden
    .drink_choose_img
      height: 1.18rem
      width: 1.18rem
      float: right
      display: flex
      justify-content: center
      align-items: center
      overflow: hidden
      img
        height: 1.18rem
        width: 1.18rem
        object-fit: cover
    input[type="radio"]+label::before
      content: "\a0"
      /*不换行空格*/
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
      position: absolute
      clip: rect(0, 0, 0, 0)
.drink_button
  display: flex
  justify-content: space-between
  margin: .4rem .97rem .7rem .97rem
  .drink_button_item
    width: 2.3rem
    height: .85rem
    font-size: .4rem
    letter-spacing: .07rem
    line-height: .85rem
    text-align: center
    border-radius: .6rem
    background: #fff
    border: .02rem solid #dbdbdd
.drink_ps
  font-size: .18rem
  line-height: .27rem
  letter-spacing: .03rem
  color: #7d7d7d
  margin: .5rem .1.31rem
  text-align: center
</style>
