<template>
    <button @click="$emit('click')" :class="type">
        <slot></slot> 
    </button>
</template>

<script>
export default {
    name: 'AppButton',
    props: {
        type: String,
    },
}
</script>

<style scoped lang="scss">
    button {
        font-family: 'Montserrat', sans-serif; 
        box-shadow: $shadow; 
        padding: 10px 30px;
        border-radius: 20px;
        border: none;
        outline: none;

        &:hover{
            cursor: pointer;
            box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.2); 
        }
    }

    .home-hero {
        background-color: $cabbi-grey;
        color: #707070;
        font-size: 12pt;
    } 

    .home-card {
        background-color: $cabbi-blue;
        color: white;
        font-size: 12pt;
    }

    .resources-hero {
        background-color: $cabbi-orange;
        color: $cabbi-dark;
        font-size: 12pt;
    }

    .simulate-nav-button {
        background-color: $cabbi-grey;
        color: #707070;
        font-size: 12pt;
        padding: 10px 30px;
    }
    .run-single {
        background-color: $cabbi-dark-green-blue;
        color: white;
        font-size: 12pt;
        padding: 10px 30px;
    }
    .run-uncertainty {
        background-color: $cabbi-orange;
        color: white;
        font-size: 12pt;
        padding: 10px 30px;
    }
    .plot-button {
        background-color: $cabbi-grey;
        color: $cabbi-dark;
        padding: 10px 30px;
        font-size: 12pt;
    }
</style>