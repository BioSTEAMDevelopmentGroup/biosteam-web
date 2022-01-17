<template>
    <div class="bg-cyellow bg-opacity-40 flex flex-col justify-between items-center rounded-xl shadow-lg">
        <div class="bg-cyellow rounded-md w-full px-8 py-10">
            <h1 class="text-cdark text-6xl pb-4 text-center">Visit the app docs</h1>
            <p class="text-cfontgrey text-center text-xl">For detailed information on how to use the BioSTEAM web app</p>
        </div>
        <div class="w-full h-full flex justify-center items-center">
            <atom-button :link="'/docs'" :type="'route'" class="text-xl text-cfontgrey bg-corange h-auto w-1/2 shadow-md hover:shadow-lg">View Documentation</atom-button>
        </div>
    </div>
</template>

<script>
import AtomButton from "@/components/atoms/AtomButton.vue";

export default {
    name: 'MoleculeToDocs',
    components: {
        AtomButton,
    },
    methods: {
        toRoute(link) {
            this.$router.push({path: link})
        }
    }
}
</script>

<style scoped>

</style>
