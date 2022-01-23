<template>
  <div>
    <atom-simulate-layout simulation="uncertainty">
      <!-- Sidebar content -->
      <template #sidebarContent>
<!--        <div v-if="selectedBiorefinery == 'Oilcane'" class="w-full">-->
<!--          <organism-uncertainty-parameter-form v-model="parameters.oilcaneParameters" :parameters="parameters.oilcaneParameters"></organism-uncertainty-parameter-form>-->
<!--        </div>-->
<!--        <div v-if="selectedBiorefinery == 'Cornstover'" class="w-full">-->
<!--          <organism-uncertainty-parameter-form v-model="parameters.cornstoverParameters" :parameters="parameters.cornstoverParameters"></organism-uncertainty-parameter-form>-->
<!--        </div>-->
        <div v-if="selectedBiorefinery == 'Select a biorefinery'" class="w-full py-4">
          <div class="rounded-md bg-corange py-4 px-2">
            <p class="text-lg text-cfontgrey text-center">Select a biorefinery</p>
          </div>
        </div>

        <div v-else class="w-full">
          <organism-uncertainty-parameter-form v-model="parameters[selectedBiorefinery].parameters" :parameters="parameters[selectedBiorefinery].parameters"></organism-uncertainty-parameter-form>
        </div>

        <atom-set-samples v-model.number="sampleNumber" :sampleNumber="sampleNumber"></atom-set-samples>
        <atom-button :type="'parentDef'" @click="runSimulation()" class="w-full bg-corange bg-opacity-70 hover:bg-opacity-100 text-white text-lg">Run simulation</atom-button>
<!--        <atom-button @click="runSimulation()" class="w-full bg-corange bg-opacity-70 hover:bg-opacity-100 text-white text-lg" :disabled="selectedBiorefinery == 'Select a biorefinery'">Run simulation</atom-button>-->
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
      <template v-if="selectedBiorefinery !=='Select a biorefinery'" #mainContent>
        <div v-if="loading" class="absolute z-100 top-0 left-0 bg-opacity-50 w-full h-full">
          <atom-loading-screen simulation="uncertainty"></atom-loading-screen>
        </div>
        <atom-display-job-number @click="runGetResults()" :jobId="jobId" :jobHasFinished="gatewayStatus" simulation="uncertainty"></atom-display-job-number>
        <atom-input-job-i-d @setJobId="setJobId" simulation="uncertainty"></atom-input-job-i-d>
<!--        <atom-display-job-number @click="runGetResults()" v-if="jobId" :jobId="jobId" :jobHasFinished="gatewayStatus" simulation="uncertainty"></atom-display-job-number>-->
        <atom-checked-parameters :checked="checkedParameters" :sampleNumber="sampleNumber" :biorefinery="selectedBiorefinery"></atom-checked-parameters>
        <atom-biorefinery-diagram v-if="selectedBiorefinery == 'Select a biorefinery'" :diagram="'Select a biorefinery'" simulation="uncertainty"></atom-biorefinery-diagram>
        <atom-biorefinery-diagram v-else :diagram="parameters[selectedBiorefinery].diagram" simulation="uncertainty"></atom-biorefinery-diagram>
<!--        <div v-if="biosteamResults!=null">-->
<!--          {{biosteamResults}}-->
<!--        </div>-->
        <div class="w-5/6 flex justify-between pb-10 pt-8">
          <atom-box-plot-info></atom-box-plot-info>
          <box-plot v-if="selectedBiorefinery !== 'Select a biorefinery'" :boxplot="biosteamResults" :options="parameters[selectedBiorefinery].metrics"></box-plot>
          <box-plot v-else :boxplot="biosteamResults" :options="['Select a biorefinery']"></box-plot>
        </div>
        <atom-spearman-info></atom-spearman-info>
        <spearmans-graph class="w-5/6 pb-10" :spearman="biosteamSpearmanResults" :options="parameters[selectedBiorefinery].metrics"></spearmans-graph>
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
            <div v-if="selectedBiorefinery == 'Oilcane'">
              <div class="parameter" v-for="parameter in parameters.oilcaneParameters" :key="parameter.name">
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
import parameters from "@/assets/simulation/refineries.json";
import spearman from "@/assets/simulation/spearman.json";

//component imports
import AtomSimulateLayout from '@/components/atoms/AtomSimulateLayout.vue';
import AtomBiorefineryDiagram from "@/components/atoms/AtomBiorefineryDiagram.vue";
import AtomButton from '@/components/atoms/AtomButton.vue';
import AtomCheckedParameters from "@/components/atoms/AtomCheckedParameters.vue";
import AtomLoadingScreen from "@/components/atoms/AtomLoadingScreen.vue";
import AtomDisplayJobNumber from "@/components/atoms/AtomDisplayJobNumber.vue";
import AtomBoxPlotInfo from "@/components/atoms/AtomBoxPlotInfo.vue";
import AtomSpearmanInfo from "@/components/atoms/AtomSpearmanInfo.vue";
import MoleculeDropdownNav from '@/components/molecules/MoleculeDropdownNav.vue';
import AtomSetSamples from '@/components/atoms/AtomSetSamples.vue';
import OrganismUncertaintyParameterForm from '@/components/organisms/OrganismUncertaintyParameterForm.vue';
import AtomInputJobID from "@/components/atoms/AtomInputJobID";
// import UncertainParameter from "@/components/UncertainParameter.vue";
// import SetNumberSamples from "@/components/SetNumberSamples.vue";
// import AppButton from "@/components/AppButton.vue";

import BoxPlot from "@/components/BoxPlot.vue";
// import BoxPlotInfo from "@/components/BoxPlotInfo.vue";
import SpearmansGraph from "@/components/SpearmansGraph.vue";
// import SpearmanInfo from "@/components/SpearmanInfo.vue";

//library imports 
import axios from 'axios';

export default {
  name: 'SimulateUncertainty',
  components: {
    AtomSimulateLayout,
    AtomButton,
    AtomBiorefineryDiagram,
    AtomCheckedParameters,
    AtomSetSamples,
    AtomLoadingScreen,
    AtomDisplayJobNumber,
    AtomBoxPlotInfo,
    AtomSpearmanInfo,
    MoleculeDropdownNav,
    OrganismUncertaintyParameterForm,
    AtomInputJobID,

    // UncertainParameter,
    // SetNumberSamples,
    // AppButton,
    
    
    BoxPlot,
    // BoxPlotInfo,
    SpearmansGraph
    // SpearmanInfo
  },
  data() {
    return {
      selectedSimulate: 'Simulation with uncertainty',
      selectedBiorefinery: 'Select a biorefinery',
      sampleNumber: 1,
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
      // if(this.selectedBiorefinery == 'Cornstover') {
      //   for(let i=0; i<this.parameters.cornstoverParameters.length; i++) {
      //     if(this.parameters.cornstoverParameters[i].checked == true) {
      //       list.push(this.parameters.cornstoverParameters[i])
      //     }
      //   }
      // }

      if(this.selectedBiorefinery != 'Select a biorefinery') {
        for(let i=0; i<this.parameters[this.selectedBiorefinery].parameters.length; i++) {
          if(this.parameters[this.selectedBiorefinery].parameters[i].checked == true) {
            list.push(this.parameters[this.selectedBiorefinery].parameters[i])
          }
        }
      }
      return list;
    },
  },
  methods: {
    setJobId(value) {
      this.jobId = value
      this.gatewayStatus = null
      console.log(this.jobId)
    },
    selectSimulate(value) {
      console.log(value)
    },

    selectBiorefinery(value) {
      console.log(value)
    },

    // getBiosteamData() {
    //   axios({
    //     url: "https://g8hun528wd.execute-api.us-west-1.amazonaws.com/default/biosteamGetter",
    //     method: "get",
    //     data: this.jobId,
    //     headers: this.configHeaders
    //   })
    //   .then(response => {
    //     // console.log(response)
    //     let gatewayResponse = JSON.parse(response.data.body);
    //     this.gatewayStatus = gatewayResponse.item;
    //     if(this.gatewayStatus !== 'no data') {
    //       this.biosteamResults = JSON.parse(gatewayResponse.item.results.S);
    //       // this.biosteamSpearmanResults = JSON.parse(gatewayResponse.item.spearmanResults.S);
    //     }
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
    // },

    runSimulation() {
      this.gatewayStatus = null
      console.log("here");
      //set loading visuals 
      this.loading = true;
      //set axios configs 
      let payload = {
        model: this.selectedBiorefinery,
        params: this.checkedParameters,
        samples: this.sampleNumber,
        sim_type: "uncertainty",
      };
      console.log(payload);
      //call biosteamHelper lambda with payload
      axios({
        url: "https://g8hun528wd.execute-api.us-west-1.amazonaws.com/default/biosteamHelper",
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
        // jobId: 'd83a9520-9956-4221-a3ef-4f53f35e4d97' //cornstover
        // jobId: '55cb9e41-84a2-4752-9753-b45fc24eab9a' //oilcane spearman
        jobId: this.jobId
      };
      // const configHeaders = {
      //   "Access-Control-Allow-Methods": "POST, GET, OPTIONS, PUT, DELETE",
      //   "Access-Control-ALlow-Headers": "'Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token'",
      // };
      console.log(payload);
      //call lambda with payload
      axios({
        url: "https://g8hun528wd.execute-api.us-west-1.amazonaws.com/default/biosteamGetter", // update 11-9-2021 this is the correct URL - jenndebellis
        method: "post",
        data: payload,
        headers: this.configHeaders
      })

      //accept and parse incoming data 
      .then(response=>{
        console.log(response);
        let csUncertaintyResults = JSON.parse(response.data.body);
        let gateway = JSON.parse(response.data.body);
        this.gatewayStatus = gateway.item;
        this.biosteamDbResults = csUncertaintyResults;
        this.biosteamResults = JSON.parse(csUncertaintyResults.item.results.S);
        this.biosteamSpearmanResults = JSON.parse(csUncertaintyResults.item.spearmanResults.S);
        console.log(this.biosteamResults)
        console.log(this.biosteamSpearmanResults)
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
