<template>
    <div class="flex p-20">
        <div class="flex flex-col justify-center w-3/5">
            <h1 class="text-6xl text-cdark pb-4">Welcome to BioSTEAM</h1>
            <p class="text-cfontgrey pb-4">BioSTEAM is a fast and flexible package for the design, simulation, and techno-economic analysis of biorefineries under uncertainty 1. BioSTEAM’s framework is built to streamline and automate early-stage technology evaluations and to enable rigorous sensitivity and uncertainty analyses.</p>
            <atom-button class="bg-cgreenblue shadow-md w-1/3 text-white hover:shadow-lg">Explore More</atom-button>
        </div>
        <div class="w-2/5">
            <img src="@/assets/home/home-hero-logo.png" alt="biosteam logo">
        </div>
    </div>  
</template>

<script>
import AtomButton from "@/components/atoms/AtomButton.vue";

export default {
    name: 'MoleculeHomeHero',
    components: {
        AtomButton,
    }
}
</script>

