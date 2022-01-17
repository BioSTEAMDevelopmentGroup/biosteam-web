<template>
    <div class="relative  items-center">
      <div class="absolute w-full h-2/5 z-0 left-0 top-0 bg-contain bg-no-repeat" :style="{'background-image': `url(${require('@/assets/home/hero-footer.svg')})`}"></div>
      <div class="relative flex flex-col justify-end items-center mb-32">
        <h1 class="text-6xl text-cgreenblue pb-5 mt-32">What is BioSTEAM?</h1>
        <p class="text-cfontgrey text-center w-2/3">
            BioSTEAM is a fast and flexible package for the design, simulation,
            and techno-economic analysis of biorefineries under uncertainty.
            BioSTEAM’s framework is built to streamline and automate early-stage
            technology evaluations and to enable rigorous sensitivity and uncertainty
            analyses.
        </p>
        <p class="mt-8 text-cfontgrey">
          One line on how to cite BioSTEAM (not the paper, the package)
        </p>
        <div class="flex items-center justify-evenly text-cfontgrey text-lg mt-8" style="width: 100%">
          <a href="https://biosteam.readthedocs.io/en/latest/index.html" target="_blank" class="w-1/5 bg-cgreenblue text-cdark shadow-md hover:shadow-lg rounded-full text-lg py-2 px-4" style="text-align: center">Read the Docs</a>
          <a href="http://github.com/bioSTEAMDevelopmentGroup/biosteam" target="_blank" class="w-1/5 bg-cgreenblue text-cdark shadow-md hover:shadow-lg rounded-full text-lg py-2 px-4" style="text-align: center">Git Source Code</a>
          <atom-button :link="'/resources'" target="_blank" class="w-1/5 bg-cgreenblue text-cdark shadow-md hover:shadow-lg">About BioSTEAM</atom-button>
          <atom-button :link="'/publications'" target="_blank" class="w-1/5 bg-cgreenblue text-cdark shadow-md hover:shadow-lg">Publications</atom-button>
<!--          <a href="https://biosteam.readthedocs.io/en/latest/index.html" target="_blank" class="w-1/5 bg-cgreenblue text-cdark shadow-md hover:shadow-lg rounded-full text-lg py-2 px-4" style="text-align: center">Read Publications</a>-->
        </div>
      </div>
    </div>
</template>

<script>
import AtomButton from "@/components/atoms/AtomButton";
export default {
    name: 'AtomHomeCardBanner',
  components: {AtomButton}
}
</script>

<style>

</style>
