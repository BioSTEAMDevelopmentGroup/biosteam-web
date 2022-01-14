<template>
  <div class="flex justify-around items-center">
    <atom-dropdown class="w-1/3"
                   :options="simulationOptions"
                   :selected="selectedSimulate"
                   @select-option="selectSimulateOption">
    </atom-dropdown>
    <atom-dropdown v-if="selectedSimulate !== 'Select simulation mode'" class="w-1/3"
                   :options="biorefineryOptions"
                   :selected="selectedBiorefinery"
                   @select-option="selectBiorefineryOption">
    </atom-dropdown>
  </div>
</template>

<script>
import AtomDropdown from "@/components/atoms/AtomDropdown.vue";
import parameters from "@/assets/simulation/refineries.json";

// loads keys from parameters
var refineries = [];
for(var k in parameters) refineries.push(k);

export default {
  name: 'MoleculeDropdownNav',
  components: {
    AtomDropdown,
  },
  props: {
    selectedSimulate: String,
    selectedBiorefinery: String,
  },
  data() {
    return{
      parameters: parameters,
      simulationOptions: ['Single point simulation', 'Simulation with uncertainty'],

      biorefineryOptions: refineries// parameters.refineries // ['Cornstover', 'Oilcane']
    }
  },
  methods: {
    selectSimulateOption(value) {
      this.$emit('select-simulate', value)
      if(value == 'Single point simulation') {
        this.$router.push({path: '/simulate/simulate-single'})
      }
      if(value == 'Simulation with uncertainty') {
        this.$router.push({path: '/simulate/simulate-uncertainty'})
      }

    },
    selectBiorefineryOption(value) {
      this.$emit('select-biorefinery', value)
    }
  }
}
</script>

<style>

</style>
