<template>
    <div class="bg-gray-50 bg-opacity-60 rounded-md divide-y divide-cdarkgreenblue">
        <div class="h-10 flex justify-between items-center px-4">
            <h2>{{parameter.name}}</h2>
            <div class="flex">
                <p class="pr-2">Default</p>
                <atom-checkbox @check="setDefault()" v-model="parameter.checked"></atom-checkbox>    
            </div>
        </div>
        <div class="h-10 flex justify-center items-center px-4">
            <input @input="refreshCheck()" v-model.number="parameter.value" type="number" placeholder="Parameter value" class="w-full rounded-sm text-center">
        </div>
    </div>
</template>

<script>
import AtomCheckbox from '../atoms/AtomCheckbox.vue';

export default {
    name: 'MoleculeSimulateSingleParameter',
    components: {
        AtomCheckbox
    },
    props: ['parameter'],
    methods: {
        setDefault() {
            if(this.parameter.checked == true) {
                this.parameter.value = this.parameter.defaultValue
            }
        },
        refreshCheck() {
            this.parameter.checked = false
        }
    }
}
</script>

<style scoped>

</style>