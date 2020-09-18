<template>
    <app-button class="app-button" type="simulate-nav-button" @click="toggle">
        <font-awesome-icon 
            icon="caret-down" 
            style="color: #707070;"/>
        <p><slot></slot></p>            
    </app-button> 
</template>

<script>
import AppButton from "@/components/AppButton.vue";

export default {
    name: 'SimulateButton',
    components: {
        AppButton,
    },
    model: {
        prop: "toggled",
        event: "toggle",
    },
    data() {
        return{
        }
    },
    props: ['items', 'toggled'],
    methods: {
        toggle() {
            this.$emit("toggle", !this.toggled)
        },
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