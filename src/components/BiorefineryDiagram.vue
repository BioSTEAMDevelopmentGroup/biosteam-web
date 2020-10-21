<template>
    <div class="biorefinery-diagram">
        <div v-if="biorefinery == 'lipidcane'" class="diagram-container">
            <img :src="require('../assets/simulation/lipidcane_flowsheet.png')">
        </div>
        <div v-if="biorefinery == 'cornstover'" class="diagram-container">
            <img :src="require('../assets/simulation/cornstover_flowsheet.png')">
        </div>
    </div>
</template>

<script>
export default {
    name: "BiorefineryDiagram",
    props: ['biorefinery'],
    data() {
        return{
            lipidcane: '../assets/simulation/lipidcane_flowsheet.png',
            cornstover: '../assets/simulation/cornstover_flowsheet.png',
        }
    }

}
</script>

<style>
    img {
        height: 300px;
    }
</style>