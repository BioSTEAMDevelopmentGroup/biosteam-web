<template>
  <div class="simulate-single">
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
  name: 'SimulateSingle',
  components: {
    SimulateButtonBar,
    SimulateBox,
    SimulateInfo,
  }
}
</script>
