<template>
<!--    <div style=" background-image: url('../../assets/resources/about-hero-banner.png'); background-size: contain; background-repeat: repeat;">-->
<!--    <div style="height: 40vh; background: url(../../assets/resources/about-hero-banner.png)">-->
<!--    <div class="wrapper" >-->
<!--&lt;!&ndash;      <img src="../../assets/resources/about-hero-banner.png">&ndash;&gt;-->
<!--&lt;!&ndash;        the about banner goes here&ndash;&gt;-->
<!--      <div class="absolute z-20 -bottom-3 inset-x-0 text-center" >-->
<!--        <code class="bg-white px-8 py-4 rounded-full shadow-md text-xl">what to know about biosteam</code>-->
<!--      </div>-->
<!--    </div>-->
  <div class="wrapper flex items-center justify-evenly">
    <div>
      <h1 class="text-5xl text-white pb-32 mt-32">Everything to Know About BioSTEAM</h1>
    </div>
  </div>

</template>

<script>
export default {
    name: 'AtomAboutBanner'
}
</script>

<style>
.wrapper {
  height: 60vh;
  /*background-color: red;*/
  background-image: url(../../assets/resources/about-banner.svg);
  background-size: cover;
  background-repeat: no-repeat;
  --tw-bg-opacity: 1;
  background-color: rgba(229, 231, 235, var(--tw-bg-opacity));
}
</style>
