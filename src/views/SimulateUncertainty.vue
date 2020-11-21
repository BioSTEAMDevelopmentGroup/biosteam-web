<template>
  <div class="simulate-single">
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
      <simulate-box type="uncertainty">
        <template #sidebar>
          <div class="parameter-container">
            <div v-if="selectedBiorefinery == 'Select a biorefinery'" style="display: flex; align-items: center;">
              <font-awesome-icon
                :icon="['far', 'hand-pointer']"
                size="2x"
                style="padding: 15px;"/>
              <p>Select a biorefinery to view parameters</p> 
            </div> 
            <div v-if="selectedBiorefinery == 'Cornstover'">
              <div class="parameter" v-for="parameter in parameters.cornstoverParameters" :key="parameter.name">
                <uncertain-parameter 
                  :value="parameter.values" 
                  :checked="parameter.checked" 
                  :distribution="parameter.distribution"
                  @checked="(newChecked) => {parameter.checked = newChecked}" 
                  @input="(newValues) => {parameter.values = newValues}" 
                  @select-distribution="(newDistribution) => {parameter.distribution = newDistribution}">
                  <template #name>{{parameter.name}}</template>
                </uncertain-parameter>
              </div>  
            </div> 
            <div v-if="selectedBiorefinery == 'Lipidcane'">
              <div class="parameter" v-for="parameter in parameters.lipidcaneParameters" :key="parameter.name">
                <uncertain-parameter 
                  :value="parameter.values" 
                  :checked="parameter.checked" 
                  :distribution="parameter.distribution"
                  @checked="(newChecked) => {parameter.checked = newChecked}" 
                  @input="(newValues) => {parameter.values = newValues}" 
                  @select-distribution="(newDistribution) => {parameter.distribution = newDistribution}">
                  <template #name>{{parameter.name}}</template>
                </uncertain-parameter>
              </div>  
            </div>        
          </div>
          <div class="set-sample-container">
            <set-number-samples v-model.number="sampleNumber"></set-number-samples>
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
                <p style="padding-top: 10px;">These parameters will be varied in your <b>{{sampleNumber}}</b> selected simulations</p>
              </div>             
              <checked-parameters :checked="checkedParameters"></checked-parameters>
            </div>            
          </div>
          <div class="biorefinery-diagram-container">
            <biorefinery-diagram :biorefinery="selectedBiorefinery"></biorefinery-diagram>
          </div>
          <div class="graphs">
            <div class="box-plot-container">
              <box-plot-info style="flex: 1;"></box-plot-info>
              <box-plot :options="spearman.cornstoverSpearmanOptions" style="flex: 2;"></box-plot>
            </div>
            <div class="spearman-graph-container">
              <spearman-info></spearman-info>
              <spearmans-graph :options="spearman.cornstoverSpearmanOptions"></spearmans-graph>
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
import parameters from "@/assets/simulation/parameters.json";
import spearman from "@/assets/simulation/spearman.json";

import SimulateDropdownBar from "@/components/SimulateDropdownBar.vue";
import SimulateBox from "@/components/SimulateBox.vue";
import SimulateInfo from "@/components/SimulateInfo.vue";
import UncertainParameter from "@/components/UncertainParameter.vue";
import SetNumberSamples from "@/components/SetNumberSamples.vue";
import AppButton from "@/components/AppButton.vue";
import CheckedParameters from "@/components/CheckedParameters.vue";
import BiorefineryDiagram from "@/components/BiorefineryDiagram.vue";
import BoxPlot from "@/components/BoxPlot.vue";
import BoxPlotInfo from "@/components/BoxPlotInfo.vue";
import SpearmansGraph from "@/components/SpearmansGraph.vue";
import SpearmanInfo from "@/components/SpearmanInfo.vue";

export default {
  name: 'SimulateUncertainty',
  components: {
    SimulateDropdownBar,
    SimulateBox,
    SimulateInfo,
    UncertainParameter,
    SetNumberSamples,
    AppButton,
    CheckedParameters,
    BiorefineryDiagram,
    BoxPlot,
    BoxPlotInfo,
    SpearmansGraph,
    SpearmanInfo
  },
  data() {
    return {
      selectedSimulate: 'Simulation with uncertainty',
      selectedBiorefinery: 'Select a biorefinery',
      sampleNumber: 0,
      parameters: parameters,
      spearman: spearman,
      // parameters: [
      //   {name: 'Lipid content', checked: false, distribution: 'Distribution', values: {value1: null, value2: null, value3: null}, info: 'Some description about the paramter'},
      //   {name: 'Plant size', checked: false, distribution: 'Distribution', values: {value1: null, value2: null, value3: null}, info: 'Some description about the paramter'},
      //   {name: 'Operating days', checked: false, distribution: 'Distribution', values: {value1: null, value2: null, value3: null}, info: 'Some description about the paramter'},
      //   {name: 'Ethanol price', checked: false, distribution: 'Distribution', values: {value1: null, value2: null, value3: null}, info: 'Some description about the paramter'},
      //   {name: 'Lipidcane price', checked: false, distribution: 'Distribution', values: {value1: null, value2: null, value3: null}, info: 'Some description about the paramter'},
      //   {name: 'Electricity price', checked: false, distribution: 'Distribution', values: {value1: null, value2: null, value3: null}, info: 'Some description about the paramter'},
      //   {name: 'IRR', checked: false, distribution: 'Distribution', values: {value1: null, value2: null, value3: null}, info: 'Some description about the paramter'},
      //   {name: 'LCA param1', checked: false, distribution: 'Distribution', values: {value1: null, value2: null, value3: null}, info: 'Some description about the paramter'},
      //   {name: 'LCA param2', checked: false, distribution: 'Distribution', values: {value1: null, value2: null, value3: null}, info: 'Some description about the paramter'},
      //   {name: 'Filler 1', checked: false, distribution: 'Distribution', values: {value1: null, value2: null, value3: null}, info: 'Some description about the paramter'},
      //   {name: 'Filler 2', checked: false, distribution: 'Distribution', values: {value1: null, value2: null, value3: null}, info: 'Some description about the paramter'},
      //   {name: 'Filler 3', checked: false, distribution: 'Distribution', values: {value1: null, value2: null, value3: null}, info: 'Some description about the paramter'},
      //   {name: 'Filler 4', checked: false, distribution: 'Distribution', values: {value1: null, value2: null, value3: null}, info: 'Some description about the paramter'},
      //   {name: 'Filler 5', checked: false, distribution: 'Distribution', values: {value1: null, value2: null, value3: null}, info: 'Some description about the paramter'},
      //   {name: 'Filler 6', checked: false, distribution: 'Distribution', values: {value1: null, value2: null, value3: null}, info: 'Some description about the paramter'},
      //   {name: 'Filler 7', checked: false, distribution: 'Distribution', values: {value1: null, value2: null, value3: null}, info: 'Some description about the paramter'},
      // ],
    }
  },
  computed: {
    checkedParameters: function() {
      let list = []
      if(this.selectedBiorefinery == 'Cornstover') {
        for(let i=0; i<this.parameters.cornstoverParameters.length; i++) {
          if(this.parameters.cornstoverParameters[i].checked == true) {
            list.push(this.parameters.cornstoverParameters[i].name)
          }
        }
      }

      if(this.selectedBiorefinery == 'Lipidcane') {
        for(let i=0; i<this.parameters.lipidcaneParameters.length; i++) {
          if(this.parameters.lipidcaneParameters[i].checked == true) {
            list.push(this.parameters.lipidcaneParameters[i].name)
          }
        }
      }
      return list
    }
  },
  methods: {
    selectSimulate(value) {
      console.log(value)
    },
    selectBiorefinery(value) {
      console.log(value)
    },
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
    z-index: 5;
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

  .set-sample-container {
    padding-bottom: 30px;
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
    padding-bottom: 30px;
  }

  // .graphs{
  //   display: flex;
  //   flex-direction: column;
  //   // justify-content: center;
  //   // align-items: center;
  //   padding: 15px;
  //   // width: 65vw;
  // }

  .box-plot-container {
    display: flex;
    justify-content: center;
    //width: 100%;
    padding: 20px;
  }

  .spearman-graph-container {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding: 20px;
  }

  .simulate-info {
    padding: 20px;
  }

</style>