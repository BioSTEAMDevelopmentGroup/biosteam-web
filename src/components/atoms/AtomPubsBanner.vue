<template>
  <div class="wrapper flex items-center justify-evenly">
    <div>
      <h1 class="text-5xl text-white pb-32 mt-32">Publications</h1>
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
  height: 60vh;
  /*background-color: red;*/
  background-image: url(../../assets/resources/about-banner.svg);
  background-size: cover;
  background-repeat: no-repeat;
  --tw-bg-opacity: 1;
  background-color: rgba(229, 231, 235, var(--tw-bg-opacity));
}
</style>
