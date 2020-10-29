<template>
    <div class="biorefinery-diagram">
        <div v-if="biorefinery == 'Lipidcane'" class="diagram-container">
            <img :src="require('../assets/simulation/lipidcane_flowsheet.png')">
        </div>
        <div v-if="biorefinery == 'Cornstover'" class="diagram-container">
            <img :src="require('../assets/simulation/cornstover_flowsheet.png')">
        </div>
        <div v-if="biorefinery == 'Select a biorefinery'" class="diagram-container diagram-default">
            <font-awesome-icon
              :icon="['far', 'hand-pointer']"
              size="3x"
              style="padding: 15px;"/>
            <h2>Select a biorefinery</h2>
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

<style lang="scss" scoped>
    .diagram-container {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .diagram-default {
        color: grey;
    }
    img {
        height: 300px;
    }
</style>