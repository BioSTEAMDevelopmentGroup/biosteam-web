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
            <input type="checkbox" v-model="defaultChecked" @change="setDefaultValue()">
            <p>Default parameters</p>
          </div>
          <div class="parameter-container">
            <div class="parameter" v-for="parameter in parameters" :key="parameter.name">
              <single-parameter v-model.number="parameter.value">
                <template #name>{{parameter.name}}</template>
                <template #info>{{parameter.info}}</template>
              </single-parameter>
            </div>            
          </div>
          <div class="run">
            <app-button class="run-button" type="run-single" @click="runSimulation()">Run simulation</app-button>
          </div>       
        </template>
        <template #main-content>
          <div class="content-container">
            <div class="biorefinery-info-container">
              <lipidcane-diagram class="diagram"></lipidcane-diagram>
              <div class="flowchart">
                <p class="flowchart-content">Biorefinery flowchart goes here!</p>
              </div>
            </div>             
            <div class="table-container">
              <simulate-single-table :parameters="parameters"></simulate-single-table>
            </div>            
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
import SimulateSingleTable from "@/components/SimulateSingleTable.vue";

export default {
  name: 'SimulateSingle',
  components: {
    SimulateDropdownBar,
    SimulateBox,
    SimulateInfo,
    SingleParameter,
    AppButton,
    LipidcaneDiagram,
    SimulateSingleTable,
  },
  data() {
    return {
      parameters: [
        {name: 'Lipid content', value: null, defaultValue: 1, computedValue: null, unit: 'x/y', info: 'Some description about the paramter'},
        {name: 'Plant size', value: null, defaultValue: 1, computedValue: null,  unit: 'x/y', info: 'Some description about the paramter'},
        {name: 'Operating days', value: null, defaultValue: 1, computedValue: null,  unit: 'x/y', info: 'Some description about the paramter'},
        {name: 'Ethanol price', value: null, defaultValue: 1, computedValue: null,  unit: 'x/y', info: 'Some description about the paramter'},
        {name: 'Lipidcane price', value: null, defaultValue: 1, computedValue: null,  unit: 'x/y', info: 'Some description about the paramter'},
        {name: 'Electricity price', value: null, defaultValue: 1, computedValue: null,  unit: 'x/y', info: 'Some description about the paramter'},
        {name: 'IRR', value: null, defaultValue: 1, computedValue: null,  unit: 'x/y', info: 'Some description about the paramter'},
        {name: 'LCA param1', value: null, defaultValue: 1, computedValue: null,  unit: 'x/y', info: 'Some description about the paramter'},
        {name: 'LCA param2', value: null, defaultValue: 1, computedValue: null,  unit: 'x/y', info: 'Some description about the paramter'},
        {name: 'Filler 1', value: null, defaultValue: 1, computedValue: null,  unit: 'x/y', info: 'Some description about the paramter'},
        {name: 'Filler 2', value: null, defaultValue: 1, computedValue: null,  unit: 'x/y', info: 'Some description about the paramter'},
        {name: 'Filler 3', value: null, defaultValue: 1, computedValue: null,  unit: 'x/y', info: 'Some description about the paramter'},
        {name: 'Filler 4', value: null, defaultValue: 1, computedValue: null,  unit: 'x/y', info: 'Some description about the paramter'},
        {name: 'Filler 5', value: null, defaultValue: 1, computedValue: null,  unit: 'x/y', info: 'Some description about the paramter'},
        {name: 'Filler 6', value: null, defaultValue: 1, computedValue: null,  unit: 'x/y', info: 'Some description about the paramter'},
        {name: 'Filler 7', value: null, defaultValue: 1, computedValue: null,  unit: 'x/y', info: 'Some description about the paramter'},
      ],
      defaultChecked: '',
    }
  },
  methods: {
    setDefaultValue() {
      if(this.defaultChecked == true) {
        for(let i=0; i<this.parameters.length; i++) {
          this.parameters[i].value = this.parameters[i].defaultValue
        }
      }
    },

    runSimulation() { 
      for(let i=0; i<this.parameters.length; i++) {
        this.parameters[i].computedValue = this.parameters[i].value + (Math.random()*100)
      }
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
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
  }
  .biorefinery-info-container {
    display: flex;
  }
  .diagram {
    border: 1px $cabbi-grey dotted;
  }
  .flowchart {
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px $cabbi-grey dotted;
  }
  .flowchart-content {
    font-size: 20pt;
    text-align: center;
  }
  .table-container {
    width: 90%;
    padding: 20px;
  }
  .simulate-info {
    padding: 20px;
  }
</style>