<template>
  <div>
    <donation-header></donation-header>
    <donation-img></donation-img>
    <donation-money></donation-money>
  </div>
</template>

<script>
import DonationHeader from './components/Header'
import DonationImg from './components/Img'
import DonationMoney from './components/Money'
import DonationOption from './components/Option'
import DonationSend from './components/Send'
export default {
  name: 'Donation',
  components: {
    DonationHeader,
    DonationImg,
    DonationMoney,
    DonationOption,
    DonationSend
  }

}
</script>

<style>

</style>
