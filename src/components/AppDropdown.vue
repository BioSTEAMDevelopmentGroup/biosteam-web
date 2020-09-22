<template>
    <div class="container">
        <app-button @click="open = !open" type="home-hero" class="select-button">
            <font-awesome-icon 
                :icon="icon"
                style="color: #707070;"/>
            <p>{{selected}}</p>             
        </app-button>
        <div v-if="open" class="options">
            <div v-for="option in options" :key="option.name" @click="selectOption(option)" class="option">
                <p>{{option.name}}</p>
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
        options: Array,
        selected: String,
    },
    data() {
        return{
            open: false,
        }
    },
    methods: {
        selectOption(option) {
            this.selected = option.name
            this.open = !this.open
            this.$router.push({path: option.link})
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
        p {
            padding: {
                right: 0%;
            }
        }
    }
    .options {
        position: absolute;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-color: $cabbi-grey;
        box-shadow: $shadow;
        border-radius: 10px;
        top: 100%;
        width: 340px; 
    }
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