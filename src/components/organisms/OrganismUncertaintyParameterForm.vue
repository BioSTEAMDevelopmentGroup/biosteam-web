<template>
  <div class="w-full py-4">
      <div class="py-2" v-for="parameter in parameters" :key="parameter.name">
        <molecule-simulate-uncertainty-parameter
            @select-distribution="(newDistribution)=>{parameter.distribution = newDistribution}" 
            @change="$emit('change', $event.target.value)"
            :parameter="parameter">    
        </molecule-simulate-uncertainty-parameter>
      </div>
  </div>
</template>

<script>
import MoleculeSimulateUncertaintyParameter from '@/components/molecules/MoleculeSimulateUncertaintyParameter.vue';

export default {
    name: 'OrganismUncertaintyParameterForm',
    props: {
        parameters: Array
    },
    components: {
        MoleculeSimulateUncertaintyParameter,
    }
}
</script>

<style scoped>

</style>