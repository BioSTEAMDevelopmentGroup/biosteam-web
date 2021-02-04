<template>
    <div class="bg-cyellow flex flex-col justify-center items-center rounded-xl shadow-lg">
        <h1 class="text-cdark text-6xl pb-2">Visit the docs</h1>
        <p class="text-cfontgrey text-center pb-10">For detailed information on how to use the BioSTEAM web app</p>
        <atom-button @click="toRoute('/docs')" class="text-xl text-cfontgrey bg-corange w-2/3 shadow-md hover:shadow-lg">View Docs</atom-button>
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

<style>

</style>