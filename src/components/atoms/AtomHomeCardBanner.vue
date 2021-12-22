<template>
    <div class="relative flex flex-col justify-end items-center">
        <div class="absolute w-full h-2/5 z-0 left-0 top-0 bg-cover" :style="{'background-image': `url(${require('@/assets/home/hero-footer.svg')})`}"></div>
        <h1 class="text-6xl text-cblue pb-5 pt-16">What is BioSTEAM?</h1>
        <p class="text-cfontgrey text-center w-2/3">
            BioSTEAM is a fast and flexible package for the design, simulation,
            and techno-economic analysis of biorefineries under uncertainty 1.
            BioSTEAM’s framework is built to streamline and automate early-stage
            technology evaluations and to enable rigorous sensitivity and uncertainty
            analyses.
        </p>
    </div>
</template>

<script>
export default {
    name: 'AtomHomeCardBanner'
}
</script>

<style>

</style>
