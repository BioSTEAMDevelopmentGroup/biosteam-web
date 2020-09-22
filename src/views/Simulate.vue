<template>
  <div class="simulate">
    <div class="dropdown-bar">
      <simulate-dropdown-bar></simulate-dropdown-bar>
    </div>
    <div class="simulate-box">
      <simulate-box></simulate-box>
    </div>   
    <div class="simulate-info">
      <simulate-info></simulate-info>
    </div> 
    <div class="component-test">
      <app-dropdown selected="Component test area"></app-dropdown>
    </div>
  </div>
</template>

<script>
import SimulateDropdownBar from "@/components/SimulateDropdownBar.vue";
import SimulateBox from "@/components/SimulateBox.vue";
import SimulateInfo from "@/components/SimulateInfo.vue";
import AppDropdown from "@/components/AppDropdown.vue";

export default {
  name: 'Simulate',
  components: {
    SimulateDropdownBar,
    SimulateBox,
    SimulateInfo,
    AppDropdown,
  },
  data() {
    return {
      
    }
  }
}
</script>

<style scoped> 

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

  .simulate-info {
    padding: 20px;
  }

  .component-test {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>