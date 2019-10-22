<template>
  <div>
    <header-title>基金捐赠</header-title>
    <donation-img></donation-img>
    <donation-money></donation-money>
    <donation-option></donation-option>
    <donation-send></donation-send>
    <router-view/>
  </div>
</template>

<script>
import HeaderTitle from 'common/Header'
import DonationImg from './components/Img'
import DonationMoney from './components/Money'
import DonationOption from './components/Option'
import DonationSend from './components/Send'
export default {
  name: 'Donation',
  components: {
    HeaderTitle,
    DonationImg,
    DonationMoney,
    DonationOption,
    DonationSend
  }

}
</script>

<style>

</style>
