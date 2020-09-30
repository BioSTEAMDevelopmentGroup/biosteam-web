<template>
    <div class="container">
        <app-dropdown 
            :options="simulateOptions" 
            :selected="this.$route.path"
            icon="caret-down" 
            class="app-dropdown">
        </app-dropdown>
        <app-dropdown 
            :options="biorefineryOptions" 
            :selected="selectedBiorefinery"
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
    data() {
        return{
            selectedSimulate: 'Select simulation mode',
            selectedBiorefinery: 'Select a biorefinery',
            simulateOptions: [
                {name: 'Select simulation mode', link: '/simulate'},
                {name: 'Single point simulation', link: '/simulate-single'},
                {name: 'Simulation with uncertainty', link: '/simulate-uncertainty'},
            ],
            biorefineryOptions: [
                {name: 'Select a biorefinery'},
                {name: 'Lipidcane'},
                {name: 'Cornstover'}, 
            ]
        }
    },
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