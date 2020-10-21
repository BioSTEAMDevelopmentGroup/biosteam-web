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
              <uncertain-parameter 
                :value="parameter.values" 
                :checked="parameter.checked" 
                @checked="(newChecked) => {parameter.checked = newChecked}" 
                @input="(newValues) => {parameter.values = newValues}" 
                :selectedDistribution='parameter.distribution'>
                <template #name>{{parameter.name}}</template>
              </uncertain-parameter>
            </div>           
          </div>
          <div class="run">
            <app-button class="run-button" type="run-uncertainty">Run simulation</app-button>
          </div> 
        </template>
        <template #main-content>
          <div class="main-content-container-1" style="padding: 20px;">
            <div class="checked-parameters-container">
              <div style="padding-bottom: 5px;">
                <h3>Selected Parameters</h3>
              </div>             
              <checked-parameters :checked="checkedParameters"></checked-parameters>
            </div>            
          </div>
          <div class="biorefinery-diagram-container">
            <biorefinery-diagram :biorefinery="selectedBiorefinery"></biorefinery-diagram>
          </div>
          <div class="graphs">
            <div class="box-plot-container">
              <box-plot></box-plot>
            </div>
            <div class="line-graph-container">
              <line-graph></line-graph>
            </div>            
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
import CheckedParameters from "@/components/CheckedParameters.vue";
import BiorefineryDiagram from "@/components/BiorefineryDiagram.vue";
import BoxPlot from "@/components/BoxPlot.vue";
import LineGraph from "@/components/LineGraph.vue";

export default {
  name: 'SimulateUncertainty',
  components: {
    SimulateDropdownBar,
    SimulateBox,
    SimulateInfo,
    UncertainParameter,
    AppButton,
    CheckedParameters,
    BiorefineryDiagram,
    BoxPlot,
    LineGraph,
  },
  data() {
    return {
      selectedBiorefinery: 'cornstover',
      parameters: [
        {name: 'Lipid content', checked: false, distribution: 'Distribution', values: {value1: 0, value2: 0, value3: 0}, info: 'Some description about the paramter'},
        {name: 'Plant size', checked: false, distribution: 'Distribution', values: {value1: 0, value2: 0, value3: 0}, info: 'Some description about the paramter'},
        {name: 'Operating days', checked: false, distribution: 'Distribution', values: {value1: 0, value2: 0, value3: 0}, info: 'Some description about the paramter'},
        {name: 'Ethanol price', checked: false, distribution: 'Distribution', values: {value1: 0, value2: 0, value3: 0}, info: 'Some description about the paramter'},
        {name: 'Lipidcane price', checked: false, distribution: 'Distribution', values: {value1: 0, value2: 0, value3: 0}, info: 'Some description about the paramter'},
        {name: 'Electricity price', checked: false, distribution: 'Distribution', values: {value1: 0, value2: 0, value3: 0}, info: 'Some description about the paramter'},
        {name: 'IRR', checked: false, distribution: 'Distribution', values: {value1: 0, value2: 0, value3: 0}, info: 'Some description about the paramter'},
        {name: 'LCA param1', checked: false, distribution: 'Distribution', values: {value1: 0, value2: 0, value3: 0}, info: 'Some description about the paramter'},
        {name: 'LCA param2', checked: false, distribution: 'Distribution', values: {value1: 0, value2: 0, value3: 0}, info: 'Some description about the paramter'},
        {name: 'Filler 1', checked: false, distribution: 'Distribution', values: {value1: 0, value2: 0, value3: 0}, info: 'Some description about the paramter'},
        {name: 'Filler 2', checked: false, distribution: 'Distribution', values: {value1: 0, value2: 0, value3: 0}, info: 'Some description about the paramter'},
        {name: 'Filler 3', checked: false, distribution: 'Distribution', values: {value1: 0, value2: 0, value3: 0}, info: 'Some description about the paramter'},
        {name: 'Filler 4', checked: false, distribution: 'Distribution', values: {value1: 0, value2: 0, value3: 0}, info: 'Some description about the paramter'},
        {name: 'Filler 5', checked: false, distribution: 'Distribution', values: {value1: 0, value2: 0, value3: 0}, info: 'Some description about the paramter'},
        {name: 'Filler 6', checked: false, distribution: 'Distribution', values: {value1: 0, value2: 0, value3: 0}, info: 'Some description about the paramter'},
        {name: 'Filler 7', checked: false, distribution: 'Distribution', values: {value1: 0, value2: 0, value3: 0}, info: 'Some description about the paramter'},
      ],
    }
  },
  computed: {
    checkedParameters: function() {
      let list = []
      for(let i=0; i<this.parameters.length; i++) {
        if(this.parameters[i].checked == true) {
          list.push(this.parameters[i].name)
        }
      }
      return list
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

  .checked-parameters-container {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    background-color: $cabbi-grey;
    border-radius: 15px;
    padding: 20px;
  }

  .biorefinery-diagram-container {
    display: flex;
    height: 300px;
    justify-content: center;
    align-items: center;
    border: 1px grey dotted;
  }

  .graphs{
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 15px;
  }

  .box-plot-container {
    width: 100%;
    height: 300px;
    border: 1px grey dotted;
  }

  .line-graph-container {
    width: 100%;
    height: 300px;
    border: 1px grey dotted;
  }

  .simulate-info {
    padding: 20px;
  }

</style>