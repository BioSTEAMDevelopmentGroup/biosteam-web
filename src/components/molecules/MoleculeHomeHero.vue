<template>
    <div class="flex justify-around items-center">
        <div class="flex flex-col justify-center items-center w-1/2">
            <div class="text-7xl font-extrabold pb-3 w-4/5">
                <span class="bg-clip-text text-transparent bg-gradient-to-r from-cdarkgreenblue to-cblue">
                    Welcome to BioSTEAM.
                </span>
            </div>
            <p class="text-cfontgrey text-xl pb-5 ">An open-source biorefinery modeling tool.</p>
            <div class="w-full flex justify-center">
                <atom-button class="w-1/2 bg-cgreenblue shadow-md text-white text-xl hover:shadow-lg">Explore More</atom-button>
            </div>
        </div>
        <div class="flex justify-center items-center w-1/2">
            <img class="w-full" src="@/assets/home/home-hero-logo.png" alt="biosteam logo">
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

