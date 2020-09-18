<template>
  <div class="simulate">
    <div class="button-bar">
      <simulate-button-bar></simulate-button-bar>
    </div>
    <div class="simulate-box">
      <simulate-box></simulate-box>
    </div>   
    <div class="simulate-info">
      <simulate-info></simulate-info>
    </div> 
  </div>
</template>

<script>
import SimulateButtonBar from "@/components/SimulateButtonBar.vue";
import SimulateBox from "@/components/SimulateBox.vue";
import SimulateInfo from "@/components/SimulateInfo.vue";

export default {
  name: 'Simulate',
  components: {
    SimulateButtonBar,
    SimulateBox,
    SimulateInfo,
  }
}
</script>

<style scoped> 

  .simulate {
    background-color: #B2E0E5;
    background-size: cover;
  }

  .button-bar {
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