<template>
    <div class="container">
        <simulate-button :type="mode">Select simulation mode</simulate-button>
        <simulate-button>Select a biorefinery</simulate-button>
    </div>
</template>

<script>
import SimulateButton from "@/components/SimulateButton.vue";

export default {
    name: 'SimulateButtonBar',
    components: {
        SimulateButton,
    },
    data() {
        return{
            mode: 'home-hero',
            simulate: [
                {name: 'Select simulation mode', link: '/simulate-single'},
                {name: 'Single point simulation', link: '/simulate-single'},
                {name: 'Simulation with uncertainty', link: '/simulate-uncertainty'},
            ],
            biorefineries: ['Lipidcane', 'Cornstover'],
        }
    },
    watch: {

    }
}
</script>

<style scoped lang="scss">
    .container {
        display: flex;
        justify-content: space-around;
        width: 100%;
        padding: {
            right: 5%;
            left: 5%;
        }
    }
</style>