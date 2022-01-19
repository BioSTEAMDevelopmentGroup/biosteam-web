<template>
  <!--    <div style=" background-image: url('../../assets/resources/about-hero-banner.png'); background-size: contain; background-repeat: repeat;">-->
  <!--    <div style="height: 40vh; background: url(../../assets/resources/about-hero-banner.png)">-->
  <div class="wrapper" >
    <!--      <img src="../../assets/resources/about-hero-banner.png">-->
    <!--        the about banner goes here-->
    <div class="absolute z-20 -bottom-3 inset-x-0 text-center" >
      <code class="bg-white px-8 py-4 rounded-full shadow-md text-xl">In Publications</code>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AtomPubsBanner'
}
</script>

<style>
.wrapper {
  height: 50vh;
  /*background-color: red;*/
  background-image: url(../../assets/resources/about-hero-banner.png);
  background-size: contain;
  background-repeat: repeat;
}
</style>
