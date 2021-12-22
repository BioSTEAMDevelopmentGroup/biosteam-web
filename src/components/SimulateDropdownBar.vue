<template>
    <div class="container">
        <app-dropdown 
            :options="simulateOptions" 
            :selected="simulate"
            @select-option="selectSimulateOption"
            type="options-bar"
            icon="caret-down" 
            class="app-dropdown">
        </app-dropdown>
        <app-dropdown 
            :options="biorefineryOptions" 
            :selected="biorefinery"
            @select-option="selectBiorefineryOption"
            type="options-bar"
            icon="search" 
            class="app-dropdown">
        </app-dropdown>
    </div>
</template>

<script>
import AppDropdown from "@/components/AppDropdown.vue"

export default {
    name: 'SimulateDropdownBar',
    components: {
        AppDropdown,
    },
    props: {
        simulate: String,
        biorefinery: String,
    },
    data() {
        return{
            selectedSimulate: 'Select simulation mode',
            selectedBiorefinery: 'Select a biorefinery',
            simulateOptions: [
                {name: 'Select simulation mode', link: '/simulate'},
                {name: 'Single point simulation', link: '/simulate/simulate-single'},
                {name: 'Simulation with uncertainty', link: '/simulate/simulate-uncertainty'},
            ],
            biorefineryOptions: [
                {name: 'Select a biorefinery'},
                {name: 'Oilcane'},
                {name: 'Cornstover'}, 
            ]
        }
    },
    methods: {
        selectSimulateOption(value) {
            this.$router.push({path: value.link})
            this.$emit('select-simulate', value.name)
        },
        selectBiorefineryOption(value) {
            this.$emit('select-biorefinery', value.name)
        }
    }
}
</script>

<style scoped lang="scss">
    .container {
        z-index: 1000;
        display: flex;
        justify-content: space-around;
        width: 100%;
        padding: {
            right: 5%;
            left: 5%;
        }
    }
</style>
