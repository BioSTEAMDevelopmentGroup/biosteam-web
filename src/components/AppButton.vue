<template>
    <button :class="type">
        <slot></slot> 
    </button>
</template>

<script>
export default {
    name: 'AppButton',
    props: {
        type: String,
    }
}
</script>

<style scoped lang="scss">
    button {
        font-family: 'Montserrat', sans-serif; 
    }

    .home-hero {
        background-color: $cabbi-grey;
        color: #707070;
        font-size: 12pt;
        border: none;
        box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.2); 
        padding: 10px 50px;
        border-radius: 20px;

        &:hover{
            cursor: pointer;
            box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.2); 
        }
    } 

    .home-card {
        background-color: $cabbi-blue;
        color: white;
        font-size: 12pt;
        border: none;
        box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.2); 
        padding: 10px 30px;
        border-radius: 20px;

        &:hover{
            cursor: pointer;
            box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.2);    
        }
    }
</style>