<template>
  <div>
    <atom-simulate-layout simulation="uncertainty">
      <!-- Sidebar content -->
      <template #sidebarContent>
        <atom-button @click="console.log('hello')" class="w-full bg-corange bg-opacity-70 hover:bg-opacity-100 text-white text-lg">Run simulation</atom-button>
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
        <atom-biorefinery-diagram :biorefinery="selectedBiorefinery" simulation="uncertainty"></atom-biorefinery-diagram>
      </template>
    </atom-simulate-layout>
  </div>

  <!-- <div class="simulate-single"> -->
<!--- Dropdown Bar --->
    <!-- <div class="dropdown-bar">
      <simulate-dropdown-bar 
        :simulate="selectedSimulate"
        :biorefinery="selectedBiorefinery"
        @select-simulate="(newSimulate) => {selectedSimulate = newSimulate}"
        @select-biorefinery="(newBiorefinery) => {selectedBiorefinery = newBiorefinery}"
        >
      </simulate-dropdown-bar>
    </div>
    <div class="simulate-box">
      <simulate-box type="uncertainty"> -->
<!--- Sidebar content ---> 
        <!-- <template #sidebar>
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
            <app-button v-if="loading == false" class="run-button" type="run-uncertainty" @click="runSimulation()">Run simulation</app-button>
            <app-button v-if="loading == true" class="run-button" type="run-uncertainty" @click="runSimulation()">Simulation running...</app-button>
          </div> 
        </template> -->
<!--- Main content --->
        <!-- <template #main-content>
          <div class="main-content-container-1" style="padding: 20px;"> -->
            <!-- <test-container>
              <h1>AWS serverless biosteam test!</h1>
              <button @click="runSimulation()">run biosteam job</button>
              <p>jobId: {{jobId}}</p>
              <p>jobTimestamp: {{jobTimestamp}}</p>
              <button @click="runGetResults()">get biosteam results</button>
              <p>gateway response: {{gatewayStatus}}</p>
              <p><b>results:</b> {{biosteamResults}}</p>
              <p><b>spearman results:</b> {{biosteamSpearmanResults}}</p>
            </test-container> -->
            <!-- <div class="checked-parameters-container">
              <div style="padding-bottom: 5px;">
                <h3>Selected Parameters</h3>
                <p style="padding-top: 10px;">These parameters will be varied in your <b>{{sampleNumber}}</b> selected simulations</p>
              </div>             
              <checked-parameters :checked="checkedParameters" style="padding-bottom: 10px;"></checked-parameters>
              <app-button :class="{ btnloading: gatewayStatus == 'no data' }" type="run-uncertainty" @click="runGetResults()" style="width: 50%;">Get job {{jobId}} results</app-button>              
            </div>            
          </div>
          <div class="biorefinery-diagram-container">
            <atom-biorefinery-diagram :biorefinery="selectedBiorefinery"></atom-biorefinery-diagram>
          </div>
          <div class="graphs">
            <div class="box-plot-container">
              <box-plot-info style="flex: 1;"></box-plot-info>
              <box-plot :boxplot="biosteamResults" :options="spearman.cornstoverSpearmanOptions" style="flex: 2;"></box-plot>
            </div>
            <div class="spearman-graph-container">
              <spearman-info></spearman-info>
              <spearmans-graph :spearman="biosteamSpearmanResults" :options="spearman.cornstoverSpearmanOptions"></spearmans-graph>
            </div>            
          </div>
        </template>
      </simulate-box>
    </div>    -->
<!--- Info section --->
    <!-- <div class="simulate-info">
      <simulate-info></simulate-info>
    </div> 
  </div> -->
</template>

<script>
//data imports
import parameters from "@/assets/simulation/parameters.json";
import spearman from "@/assets/simulation/spearman.json";

//component imports
import AtomSimulateLayout from '@/components/atoms/AtomSimulateLayout.vue';
import AtomBiorefineryDiagram from "@/components/atoms/AtomBiorefineryDiagram.vue";
import AtomButton from '@/components/atoms/AtomButton.vue';
import MoleculeDropdownNav from '@/components/molecules/MoleculeDropdownNav.vue';

// import UncertainParameter from "@/components/UncertainParameter.vue";
// import SetNumberSamples from "@/components/SetNumberSamples.vue";
// import AppButton from "@/components/AppButton.vue";
// import CheckedParameters from "@/components/CheckedParameters.vue";

// import BoxPlot from "@/components/BoxPlot.vue";
// import BoxPlotInfo from "@/components/BoxPlotInfo.vue";
// import SpearmansGraph from "@/components/SpearmansGraph.vue";
// import SpearmanInfo from "@/components/SpearmanInfo.vue";

//library imports 
import axios from 'axios';

export default {
  name: 'SimulateUncertainty',
  components: {
    AtomSimulateLayout,
    AtomButton,
    AtomBiorefineryDiagram,
    MoleculeDropdownNav,

    // UncertainParameter,
    // SetNumberSamples,
    // AppButton,
    // CheckedParameters,
    
    // BoxPlot,
    // BoxPlotInfo,
    // SpearmansGraph,
    // SpearmanInfo
  },
  data() {
    return {
      selectedSimulate: 'Simulation with uncertainty',
      selectedBiorefinery: 'Select a biorefinery',
      sampleNumber: 0,
      parameters: parameters,
      spearman: spearman,
      biosteamResults: null,
      biosteamSpearmanResults: null,
      loading: false,
      biosteamDbResults: null,
      jobId: null,
      jobTimestamp: null,
      gatewayStatus: null,
      configHeaders: {
        "content-type": "application/json",
        "Accept": "application/json, access-control-allow-origin",
      },
    }
  },
  computed: {
    checkedParameters: function() {
      let list = []
      if(this.selectedBiorefinery == 'Cornstover') {
        for(let i=0; i<this.parameters.cornstoverParameters.length; i++) {
          if(this.parameters.cornstoverParameters[i].checked == true) {
            list.push(this.parameters.cornstoverParameters[i])
          }
        }
      }

      if(this.selectedBiorefinery == 'Lipidcane') {
        for(let i=0; i<this.parameters.lipidcaneParameters.length; i++) {
          if(this.parameters.lipidcaneParameters[i].checked == true) {
            list.push(this.parameters.lipidcaneParameters[i])
          }
        }
      }
      return list;
    },
  },
  methods: {
    selectSimulate(value) {
      console.log(value)
    },

    selectBiorefinery(value) {
      console.log(value)
    },

    getBiosteamData() {
      axios({
        url: "https://lh94msd306.execute-api.us-east-1.amazonaws.com/default/biosteamGetter",
        method: "post",
        data: this.jobId,
        headers: this.configHeaders
      })
      .then(response => {
        let gatewayResponse = JSON.parse(response.data.body);
        this.gatewayStatus = gatewayResponse.item;
        if(this.gatewayStatus !== 'no data') {
          this.biosteamResults = JSON.parse(gatewayResponse.item.results.S);
          this.biosteamSpearmanResults = JSON.parse(gatewayResponse.item.spearmanResults.S);          
        }
      })
      .catch((error) => {
        console.log(error);
      });
    },

    runSimulation() {
      //set loading visuals 
      this.loading = true;
      //set axios configs 
      let payload = {
        params: this.checkedParameters,
        samples: this.sampleNumber,
      };
      //call biosteamHelper lambda with payload
      axios({
        url: "https://lh94msd306.execute-api.us-east-1.amazonaws.com/default/biosteamHelper",
        method: "post",
        data: payload,
        headers: this.configHeaders
      })
      //accept and parse incoming jobId and jobTimestamp
      .then(response => {
        let biosteamHelperResults = JSON.parse(response.data.body);
        this.jobId = biosteamHelperResults.jobId;
        this.jobTimestamp = biosteamHelperResults.jobTimestamp;
      }).catch((error) => {
        console.log(error);
      }).finally(() => {
        this.loading =  false
      });
    },

//-----------------------------TEST FUNCTIONS---------------------------------//
    runGetResults() {
      //set axios configs 
      let payload = {
        jobId: this.jobId,
      };
      const configHeaders = {
        "content-type": "application/json",
        "Accept": "application/json, access-control-allow-origin",
      };

      //call lambda with payload
      axios({
        url: "https://lh94msd306.execute-api.us-east-1.amazonaws.com/default/biosteamGetter",
        method: "post",
        data: payload,
        headers: configHeaders
      })

      //accept and parse incoming data 
      .then(response=>{
        let csUncertaintyResults = JSON.parse(response.data.body);
        let gateway = JSON.parse(response.data.body);
        this.gatewayStatus = gateway.item;
        this.biosteamDbResults = csUncertaintyResults;
        this.biosteamResults = JSON.parse(csUncertaintyResults.item.results.S);
        this.biosteamSpearmanResults = JSON.parse(csUncertaintyResults.item.spearmanResults.S);
      })
      .catch(function (error) {
        console.log(error);
      });
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

  .btnloading {
    background-color: darkred;
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