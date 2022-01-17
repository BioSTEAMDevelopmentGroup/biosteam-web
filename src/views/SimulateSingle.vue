<template>
  <div>
    <atom-simulate-layout simulation="single-point">
      <!-- Sidebar content -->
      <template #sidebarContent>
<!--        <div v-if="selectedBiorefinery == 'Oilcane'" class="w-full">-->
<!--          <organism-single-parameter-form v-model="parameters.lipidcane" :parameters="parameters.lipidcane"></organism-single-parameter-form>-->
<!--        </div>-->
<!--        <div v-if="selectedBiorefinery == 'Cornstover'" class="w-full">-->
<!--          <organism-single-parameter-form v-model="parameters.cornstover" :parameters="parameters.cornstover"></organism-single-parameter-form>-->
<!--        </div>-->
        <div v-if="selectedBiorefinery == 'Select a biorefinery'" class="w-full py-6">
          <div class="rounded-md bg-cdarkgreenblue py-4 px-2">
            <p class="text-lg text-white text-center">Select a biorefinery</p>
          </div>
        </div>

        <div v-else class="w-full">
          <organism-single-parameter-form v-model="parameters[selectedBiorefinery][0].parameters" :parameters="parameters[selectedBiorefinery][0].parameters"></organism-single-parameter-form>
        </div>

        <atom-form-error :errors="['parameter errors here']"></atom-form-error>
        <atom-button @click="simLoading(parameters)" class="w-full bg-cdarkgreenblue bg-opacity-70 hover:bg-opacity-100 text-white text-lg">Run simulation</atom-button>
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
      <template v-if="selectedBiorefinery!=='Select a biorefinery'" #mainContent>
        <div v-if="loading" class="absolute z-100 top-0 left-0 bg-opacity-50 w-full h-full">
          <atom-loading-screen simulation="single-point"></atom-loading-screen>
        </div>
        <atom-display-job-number v-if="jobId" :jobId="jobId" simulation="single-point"></atom-display-job-number>
        <atom-biorefinery-diagram :biorefinery="selectedBiorefinery" simulation="single-point"></atom-biorefinery-diagram>
        <atom-simulate-single-table :metrics="parameters[selectedBiorefinery][0].metrics"></atom-simulate-single-table>
      </template>
    </atom-simulate-layout>    
  </div>
  <!-- <div class="simulate-single">
    <div class="dropdown-bar">
      <simulate-dropdown-bar 
        :simulate="selectedSimulate"
        :biorefinery="selectedBiorefinery"
        @select-simulate="(newSimulate) => {selectedSimulate = newSimulate}"
        @select-biorefinery="(newBiorefinery) => {selectedBiorefinery = newBiorefinery}"
        >
      </simulate-dropdown-bar>
    </div> -->
<!---simulate area ---> 
    <!-- <div class="simulate-box">
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
              <biorefinery-diagram :biorefinery="selectedBiorefinery"></biorefinery-diagram>
            </div>             
            <div class="table-container">
              <simulate-single-table :parameters="parameters"></simulate-single-table>
            </div>            
          </div>         
        </template>
      </simulate-box>
    </div>  -->

<!---simulate info ---> 
    <!-- <div class="simulate-info">
      <simulate-info></simulate-info>
    </div> 
  </div> -->
</template>

<script>
//data imports 
// import singleTable from '@/assets/simulation/singleTable.json';
// import singleParameters from '@/assets/simulation/singleParameters.json';
import refineries from '@/assets/simulation/refineries.json';

//component imports 
import AtomSimulateLayout from '@/components/atoms/AtomSimulateLayout.vue';
import AtomButton from '@/components/atoms/AtomButton.vue';
import AtomSimulateSingleTable from '@/components/atoms/AtomSimulateSingleTable.vue';
import AtomFormError from '@/components/atoms/AtomFormError.vue';
import AtomLoadingScreen from "@/components/atoms/AtomLoadingScreen.vue";
import AtomDisplayJobNumber from "@/components/atoms/AtomDisplayJobNumber.vue";
import MoleculeDropdownNav from '@/components/molecules/MoleculeDropdownNav.vue';
import OrganismSingleParameterForm from '@/components/organisms/OrganismSingleParameterForm.vue';

// import SimulateDropdownBar from "@/components/SimulateDropdownBar.vue";
// import SimulateBox from "@/components/SimulateBox.vue";
// import SingleParameter from "@/components/SingleParameter.vue";
// import SimulateInfo from "@/components/SimulateInfo.vue";
// import AppButton from "@/components/AppButton.vue";
import AtomBiorefineryDiagram from "@/components/atoms/AtomBiorefineryDiagram.vue";
// //import LipidcaneDiagram from "@/components/LipidcaneDiagram.vue";
// import SimulateSingleTable from "@/components/SimulateSingleTable.vue";

export default {
  name: 'SimulateSingle',
  components: {
    AtomSimulateLayout,
    AtomButton,
    AtomSimulateSingleTable,
    AtomFormError,
    AtomLoadingScreen,
    AtomDisplayJobNumber,
    MoleculeDropdownNav,
    OrganismSingleParameterForm,
    // SimulateDropdownBar,
    // SimulateBox,
    // SimulateInfo,
    // SingleParameter,
    // AppButton,
    AtomBiorefineryDiagram,
    // //LipidcaneDiagram,
    // SimulateSingleTable,
  },
  data() {
    return {
      selectedSimulate: 'Single point simulation',
      selectedBiorefinery: 'Select a biorefinery',     
      // metrics: refineries[this.selectedBiorefinery][0].metrics,
      parameters: refineries,
      errors: [],
      loading: false,
      jobId: null,
    }
  },
  // computed: {
  //   errorList() {
  //     return this.errors;
  //   }
  // },
  methods: {
    simLoading() {
      this.loading = true;
      setTimeout(()=>{this.formCheck()}, 3000);
    },
    // TODO outsource validation to new util
    formCheck() {
    //   this.loading = false;
    //   this.jobId = 123456;
    //
    //   for(let i=0; i<this.parameters.length; i++) {
    //     if(this.parameters[i].value < this.parameters[i].lowLimit || this.parameters[i].value > this.parameters[i].highLimit) {
    //       this.errors.push('error')
    //     }
    //   }
    //   if(this.errors == 0) {
    //     return console.log('success!')
    //   }
    //
    //   return this.errors
    // }
    // setDefaultValue() {
    //   if(this.defaultChecked == true) {
    //     for(let i=0; i<this.parameters.length; i++) {
    //       this.parameters[i].value = this.parameters[i].defaultValue
    //     }
    //   }
    // },

    // runSimulation() { 
    //   for(let i=0; i<this.parameters.length; i++) {
    //     this.parameters[i].computedValue = this.parameters[i].value + (Math.random()*100)
    //   }
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
    justify-content: center;
    align-items: center;
    padding: 20px;
    min-height: 250px;
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
