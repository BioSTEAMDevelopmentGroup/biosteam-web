<template>
  <div class="w-full py-4">
      <div v-for="parameter in parameters" :key="parameter.name" class="py-2">
        <molecule-simulate-single-parameter 
            :parameter="parameter"
            @change="$emit('change', $event.target.value)"
            >
        </molecule-simulate-single-parameter>          
      </div>      
  </div>
</template>

<script>
import MoleculeSimulateSingleParameter from '@/components/molecules/MoleculeSimulateSingleParameter.vue';

export default {
    name: 'OrganismSingleParameterForm',
    components: {
        MoleculeSimulateSingleParameter,
    },
    props: ['parameters'],
    model: {
        prop: 'parameters',
        event: 'change'
    },
    methods: {
        setDefault() {
            this.$emit('poop')
            console.log()
        },
    }
}
</script>

<style>

</style>