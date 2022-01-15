<template>
  <div class="bg-gray-50 bg-opacity-60 rounded-md overflow-hidden divide-y divide-corange">
      <div class="h-14 px-4 flex justify-between items-center">
        <div class="flex">
            <atom-checkbox v-model="parameter.checked"></atom-checkbox>
            <p v-if="parameter.checked === false" class="pl-2 text-cfontgrey">add</p>
            <p v-if="parameter.checked === true" class="pl-2 text-cfontgrey">added</p>
        </div>
        <p class="text-right">{{parameter.name}}</p>
      </div>
      <div @click="open = !open" :class="{'bg-corange': open}" class="h-10 px-4 flex justify-between items-center cursor-pointer hover:bg-corange">
<!--        <p class="text-cfontgrey">Specify parameter</p>-->
        <p class="text-cfontgre">Specify in <b>{{parameter.units}}</b></p>
        <font-awesome-icon
            icon="caret-down"
            style="color: #707070;"/>
      </div>
      <div v-if="open" class="px-4 flex flex-col justify-between items-center bg-corange">
          <div class="flex w-full justify-between py-2">
              <p class="pr-2">Distribution:</p>
              <atom-parameter-dropdown @select-option="selectDistribution" :options="distributions" :selected="parameter.distribution" class="w-3/5"></atom-parameter-dropdown>
          </div>
          <div class="flex w-full justify-between py-2">
              <p>Lower:</p>
              <input v-model.number="parameter.values.lower" type="number" class="w-1/2">
          </div>

          <div v-if="parameter.distribution === 'Triangular'" class="flex w-full justify-between py-2" >
              <p>Mode:</p>
              <input v-model.number="parameter.values.midpoint" type="number" class="w-1/2">
          </div>
          <div v-if="parameter.distribution === 'Triangular'" class="flex w-full justify-between py-2">
              <p>Upper:</p>
              <input v-model.number="parameter.values.upper" type="number" class="w-1/2">
          </div>

          <div v-else class="flex w-full justify-between py-2">
              <p>Upper:</p>
              <input v-model.number="parameter.values.upper" type="number" class="w-1/2">
          </div>

      </div>
  </div>
</template>

<script>
import AtomCheckbox from '../atoms/AtomCheckbox.vue';
import AtomParameterDropdown from '../atoms/AtomParameterDropdown.vue';

export default {
    name: 'MoleculeSimulateUncertaintyParameter',
    props: ['parameter'],
    components: {
        AtomCheckbox,
        AtomParameterDropdown,
    },
    data() {
        return {
            open: false,
            distributions: ['Uniform', 'Triangular'],
            // noDistSelected: true,
        }
    },
    methods: {
        selectDistribution(value) {
            this.$emit('select-distribution', value)
            // this.noDistSelected = false
        }
    }
}
</script>

<style scoped>
    input {
        @apply rounded-sm;
        @apply text-center;
    }
</style>
