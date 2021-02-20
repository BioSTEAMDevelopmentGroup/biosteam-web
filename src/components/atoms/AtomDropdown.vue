<template>
    <div @click="open = !open" class="relative z-20 py-1 px-4 border border-gray-400 hover:border-gray-500 cursor-pointer flex justify-between items-center">
        <span></span>
        <p class="text-cfontgrey text-center text-lg">{{selected}}</p>
        <font-awesome-icon 
            icon="caret-down"
            style="color: #707070;"/>
        <div v-if="open" class="absolute top-10 right-0 z-20 w-full bg-gray-100 border border-gray-300 divide-y divide-gray-300">
            <div @click="selectOption(option)" v-for="option in options" :key="option.index" class="text-center py-1 text-cfontgrey text-lg hover:bg-gray-200">
                <p>{{option}}</p>        
            </div>            
        </div>
    </div>
</template>

<script>
export default {
    name: 'AtomDropdown',
    props: ['selected', 'options'],
    data() {
        return{
            open: false,
        }
    },
    methods: {
        selectOption(option) {
            this.$emit('select-option', option)
        }
    }
}
</script>

<style>

</style>