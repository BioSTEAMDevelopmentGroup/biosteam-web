<template>
    <div class="w-5/6 py-6">
        <div :class="{
                'default': simulation=='default',
                'single-point': simulation=='single-point',
                'uncertainty': simulation=='uncertainty'
            }"
            class="p-6 border-2 rounded-md">
            <div class="pb-4">
                <h1 class="text-cfontgrey text-2xl text-center">Biorefinery overview</h1>
            </div>
            <div v-if="biorefinery == 'Lipidcane'" class="">
                <img :src="require('@/assets/simulation/lipidcane_flowsheet.png')">
            </div>
            <div v-if="biorefinery == 'Cornstover'" class="">
                <img :src="require('@/assets/simulation/cornstover_flowsheet.png')">
            </div>
            <div v-if="biorefinery == 'Select a biorefinery'" class="">
                <h2 class="text-2xl text-cfontgrey">Select a biorefinery</h2>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "AtomBiorefineryDiagram",
    props: ['biorefinery', 'simulation'],
}
</script>

<style scoped>
    .default {
        @apply bg-gray-200;
        @apply border-gray-400;
    }
    .single-point {
        @apply bg-cdarkgreenblue;
        @apply border-cdarkgreenblue;
        @apply bg-opacity-20;
    }
    .uncertainty {
        @apply bg-cyellow;
        @apply border-corange;
        @apply bg-opacity-20;
    }
</style>
