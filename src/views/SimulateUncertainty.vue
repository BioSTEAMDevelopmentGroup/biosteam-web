<template>
  <div class="simulate-single">
    <div class="dropdown-bar">
      <simulate-dropdown-bar></simulate-dropdown-bar>
    </div>
    <div class="simulate-box">
      <simulate-box type="uncertainty">
        <template #sidebar>
          <div class="parameter-container">
            <div class="parameter" v-for="parameter in parameters" :key="parameter.name">
              <uncertain-parameter v-model="parameter.values" :selectedDistribution='parameter.distribution'>
                <template #name>{{parameter.name}}</template>
              </uncertain-parameter>
            </div>           
          </div>
          <div class="run">
            <app-button class="run-button" type="run-uncertainty">Run simulation</app-button>
          </div> 
        </template>
        <template #main-content>
          <div class="added-parameters">
            Checked parameters go here 
          </div>
        </template>
      </simulate-box>
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
import UncertainParameter from "@/components/UncertainParameter.vue";
import AppButton from "@/components/AppButton.vue";

export default {
  name: 'SimulateUncertainty',
  components: {
    SimulateDropdownBar,
    SimulateBox,
    SimulateInfo,
    UncertainParameter,
    AppButton,
  },
  data() {
    return {
      parameters: [
        {name: 'Lipid content', distribution: 'Distribution', values: [0, 0, 0], info: 'Some description about the paramter'},
        {name: 'Plant size', distribution: 'Distribution', values: [0, 0, 0], info: 'Some description about the paramter'},
        {name: 'Operating days', distribution: 'Distribution', values: [0, 0, 0], info: 'Some description about the paramter'},
        {name: 'Ethanol price', distribution: 'Distribution', values: [0, 0, 0], info: 'Some description about the paramter'},
        {name: 'Lipidcane price', distribution: 'Distribution', values: [0, 0, 0], info: 'Some description about the paramter'},
        {name: 'Electricity price', distribution: 'Distribution', values: [0, 0, 0], info: 'Some description about the paramter'},
        {name: 'IRR', distribution: 'Distribution', values: [0, 0, 0], info: 'Some description about the paramter'},
        {name: 'LCA param1', distribution: 'Distribution', values: [0, 0, 0], info: 'Some description about the paramter'},
        {name: 'LCA param2', distribution: 'Distribution', values: [0, 0, 0], info: 'Some description about the paramter'},
        {name: 'Filler 1', distribution: 'Distribution', values: [0, 0, 0], info: 'Some description about the paramter'},
        {name: 'Filler 2', distribution: 'Distribution', values: [0, 0, 0], info: 'Some description about the paramter'},
        {name: 'Filler 3', distribution: 'Distribution', values: [0, 0, 0], info: 'Some description about the paramter'},
        {name: 'Filler 4', distribution: 'Distribution', values: [0, 0, 0], info: 'Some description about the paramter'},
        {name: 'Filler 5', distribution: 'Distribution', values: [0, 0, 0], info: 'Some description about the paramter'},
        {name: 'Filler 6', distribution: 'Distribution', values: [0, 0, 0], info: 'Some description about the paramter'},
        {name: 'Filler 7', distribution: 'Distribution', values: [0, 0, 0], info: 'Some description about the paramter'},
      ] 
    }
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

  .parameter-container {
    padding-bottom: 20px;
  }

  .parameter {
    padding-bottom: 15px;
  }

  .run {
    width: 100%;
    display: flex;
    justify-content: center;
  }

  .run-button {
    width: 85%;
  }

  .simulate-info {
    padding: 20px;
  }
</style>