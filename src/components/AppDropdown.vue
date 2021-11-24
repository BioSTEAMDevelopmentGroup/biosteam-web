<template>
    <div class="container">
        <app-button @click="open = !open" type="home-hero" class="select-button">
            <font-awesome-icon 
                :icon="icon"
                style="color: #707070;"/>
            <p>{{selected}}</p>  
            <span></span>           
        </app-button>
        <div v-if="open" class="options-wrapper">
            <div :class="type">
                <div v-for="option in options" :key="option.name" @click="selectOption(option)" class="option">
                    <p>{{option.name}}</p>
                </div>
            </div>
        </div>
    </div>  
</template>

<script>
import AppButton from '@/components/AppButton.vue'

export default {
    name: 'AppDropdown',
    components: {
        AppButton,
    },
    props: {
        icon: String,
        options: [Object, Array],
        selected: String,
        type: String,
    },
    data() {
        return{
            open: false,
        }
    },
    methods: {
        selectOption(option) {
            //this.selected = option.name
            this.$emit('select-option', option)
            this.open = !this.open
            //this.$router.push({path: option.link})
        }
    }
}
</script>

<style lang="scss" scoped>
    .container{
        position: relative;
        z-index: 1;
    }
    .select-button {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 340px;
    }
    .options-wrapper {
        position: absolute;
        top: 100%;
        width: 340px; 
        max-height: 200px;
        border-radius: 10px;
        box-shadow: $shadow;
        overflow-x: hidden;
        //overflow-y: scroll;
    }
    .options-bar {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-color: $cabbi-grey;
        border-radius: 10px;
        height: 100%;
    }
    .options-graph {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-color: #F2F1EF;
        height: 100%;

    }
    // ::-webkit-scrollbar {
    //     width: 3px;
    // }
    // body {
    //     scrollbar-width: thin;
    //     scrollbar-color: grey $cabbi-grey;
    // }
    // ::-webkit-scrollbar-track {
    //     background: grey;
    // }
    // ::-webkit-scrollbar-thumb {
    //     background-color: $cabbi-grey ;
    //     border-radius: 6px;
    //     border: 3px solid $cabbi-grey;
    // }
    .option {
        text-align: center;
        padding: 10px;
        border-bottom: 1px #D0CBC5 solid;
        width: 320px;
        &:hover{
            background-color: #D0CBC5;
            color: $cabbi-dark;
            cursor: pointer;
        }
    }
    p {
        color: #707070;
    }
</style>