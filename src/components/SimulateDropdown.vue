<template>
    <div>
        <app-button class="app-button" type="simulate-nav-button">
            <font-awesome-icon 
                :icon="icon"
                style="color: #707070;"/>
            <p><slot></slot></p>           
        </app-button>  
    </div>
</template>

<script>
import AppButton from "@/components/AppButton.vue";

export default {
    name: 'SimulateDropdown',
    components: {
        AppButton,
    },
    props: {
        icon: String,
        value: null,
        options: {
            type: Array 
        }
    },
    data() {
        return{
        }
    },
    methods: {

    }
}
</script>

<style lang="scss" scoped>
    .app-button {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 40%;
        p {
            padding: {
                right: 20%;
            }
        }
    }
</style>