<template>
  <div class="simulate-single">
    <div class="dropdown-bar">
      <simulate-dropdown-bar></simulate-dropdown-bar>
    </div>
<!---simulate area ---> 
    <div class="simulate-box">
      <simulate-box type="single">
        <template #sidebar>
          <div class="default-check">
            <input type="checkbox">
            <p>Default parameters</p>
          </div>
          <div class="parameter-container">
            <div class="parameter" v-for="parameter in parameters" :key="parameter.name">
              <single-parameter>
                <template #name>{{parameter.name}}</template>
                <template #info>{{parameter.info}}</template>
              </single-parameter>
            </div>            
          </div>
          <div class="run">
            <app-button class="run-button" type="run-single">Run simulation</app-button>
          </div>       
        </template>
        <template #main-content>
          <div class="content-container">
            <lipidcane-diagram></lipidcane-diagram> 
          </div>         
        </template>
      </simulate-box>
    </div> 

<!---simulate info ---> 
    <div class="simulate-info">
      <simulate-info></simulate-info>
    </div> 
  </div>
</template>

<script>
import SimulateDropdownBar from "@/components/SimulateDropdownBar.vue";
import SimulateBox from "@/components/SimulateBox.vue";
import SingleParameter from "@/components/SingleParameter.vue";
import SimulateInfo from "@/components/SimulateInfo.vue";
import AppButton from "@/components/AppButton.vue";
import LipidcaneDiagram from "@/components/LipidcaneDiagram.vue";

export default {
  name: 'SimulateSingle',
  components: {
    SimulateDropdownBar,
    SimulateBox,
    SimulateInfo,
    SingleParameter,
    AppButton,
    LipidcaneDiagram,
  },
  data() {
    return {
      parameters: [
        {name: 'Lipid content', value: 0, info: 'Some description about the paramter'},
        {name: 'Plant size', value: 0, info: 'Some description about the paramter'},
        {name: 'Operating days', value: 0, info: 'Some description about the paramter'},
        {name: 'Ethanol price', value: 0, info: 'Some description about the paramter'},
        {name: 'Lipidcane price', value: 0, info: 'Some description about the paramter'},
        {name: 'Electricity price', value: 0, info: 'Some description about the paramter'},
        {name: 'IRR', value: 0, info: 'Some description about the paramter'},
        {name: 'LCA param1', value: 0, info: 'Some description about the paramter'},
        {name: 'LCA param2', value: 0, info: 'Some description about the paramter'},
        {name: 'Filler 1', value: 0, info: 'Some description about the paramter'},
        {name: 'Filler 2', value: 0, info: 'Some description about the paramter'},
        {name: 'Filler 3', value: 0, info: 'Some description about the paramter'},
        {name: 'Filler 4', value: 0, info: 'Some description about the paramter'},
        {name: 'Filler 5', value: 0, info: 'Some description about the paramter'},
        {name: 'Filler 6', value: 0, info: 'Some description about the paramter'},
        {name: 'Filler 7', value: 0, info: 'Some description about the paramter'},
      ]    
    }
  },
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
  .default-check {
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: $cabbi-dark-green-blue;
    color: white;
    font-size: 11pt;
    padding: 10px;
    border-radius: 100px;
    width: 70%;
  }
  .parameter-container {
    padding-top: 30px;
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
  .content-container {
    display: flex;
    justify-content: center;
    width: 100%;
  }
  .simulate-info {
    padding: 20px;
  }
</style>