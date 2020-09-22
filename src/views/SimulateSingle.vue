<template>
  <div class="simulate-single">
    <div class="dropdown-bar">
      <simulate-dropdown-bar></simulate-dropdown-bar>
    </div>
    <div class="simulate-box">
      <simulate-box type="single"></simulate-box>
    </div>   
    <div class="simulate-info">
      <simulate-info></simulate-info>
    </div> 
  </div>
</template>

<script>
import SimulateDropdownBar from "@/components/SimulateDropdownBar.vue";
import SimulateBox from "@/components/SimulateBox.vue";
import SimulateInfo from "@/components/SimulateInfo.vue";

export default {
  name: 'SimulateSingle',
  components: {
    SimulateDropdownBar,
    SimulateBox,
    SimulateInfo,
  }
}
</script>

<style lang="scss" scoped>
  .simulate-single {
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
</style>