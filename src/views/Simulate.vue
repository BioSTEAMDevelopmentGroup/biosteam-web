<template>
  <div>
    <atom-simulate-layout simulation="default">
      <!-- Sidebar content -->
      <template #sidebarContent>

      </template>

      <!-- Simulation nav -->
      <template #simulationNav>
        <molecule-dropdown-nav class="w-full h-10 bg-gray-300"
          @select-simulate="(newSimulate)=>{selectedSimulate = newSimulate}" 
          @select-biorefinery="(newBiorefinery)=>{selectedBiorefinery = newBiorefinery}"
          :selectedSimulate="selectedSimulate" 
          :selectedBiorefinery="selectedBiorefinery">
        </molecule-dropdown-nav>        
      </template>

      <!-- Main content view -->
      <template #mainContent>

      </template>
    </atom-simulate-layout>
  </div>

  <!-- <div class="simulate">
    <div class="dropdown-bar">
      <simulate-dropdown-bar 
        :simulate="selectedSimulate"
        :biorefinery="selectedBiorefinery"
        @select-simulate="(newSimulate) => {selectedSimulate = newSimulate}"
        @select-biorefinery="(newBiorefinery) => {selectedBiorefinery = newBiorefinery}"
        >
      </simulate-dropdown-bar>
    </div>
    <div class="simulate-box">
      <simulate-box>
        <template #sidebar>
          <div class="sidebar">
            <font-awesome-icon
              :icon="['far', 'hand-pointer']"
              size="3x"
              style="padding: 15px;"/>
            <h2>Select simulation mode</h2>           
          </div>
        </template>
        <template #main-content>
          <div class="main-content">
            <font-awesome-icon
              :icon="['far', 'hand-pointer']"
              size="3x"
              style="padding: 15px;"/>
            <h2>Select a biorefinery</h2>
          </div>
        </template>
      </simulate-box>
    </div>   
    <div class="simulate-info">
      <simulate-info></simulate-info>
    </div> 
    <div class="component-test">
      <div class="component-container">
        <fetch-job></fetch-job>
      </div>       
    </div>
  </div> -->
</template>

<script>
import AtomSimulateLayout from '@/components/atoms/AtomSimulateLayout.vue';
import MoleculeDropdownNav from '@/components/molecules/MoleculeDropdownNav.vue';
// import SimulateDropdownBar from "@/components/SimulateDropdownBar.vue";
// import SimulateBox from "@/components/SimulateBox.vue";
// import SimulateInfo from "@/components/SimulateInfo.vue";
// import FetchJob from "@/components/FetchJob.vue";

export default {
  name: 'Simulate',
  components: {
    AtomSimulateLayout,
    MoleculeDropdownNav,
    // SimulateDropdownBar,
    // SimulateBox,
    // SimulateInfo,
    // FetchJob
  },
  data() {
    return {
      selectedSimulate: 'Select simulation mode',
      selectedBiorefinery: 'Select a biorefinery',     
    }
  }
}
</script>

<style scoped lang="scss"> 

  .simulate {
    background-color: #B2E0E5;
    background-size: cover;
  }
  .dropdown-bar {
    display: flex;
    justify-content: center;
    padding-bottom: 10px;
  }
  .simulate-box {
    padding: 20px;
  }
  .sidebar {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    color: #707070;
    border: 1px grey;   
  }
  .main-content {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    color: $cabbi-grey;
    border: 1px grey;
  }
  .simulate-info {
    padding: 20px;
  }
  .component-test {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .component-container{
    //border: 1px dotted grey;
    width: 300px;
  }
</style>
