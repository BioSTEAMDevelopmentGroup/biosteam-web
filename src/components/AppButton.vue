<template>
    <button :class="type">
        <p>
           <slot></slot> 
        </p>    
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

<style scoped>

    button {
        font-family: 'Montserrat', sans-serif; 
    }

    .home-hero {
        background-color: #E1DEDA;
        color: #707070;
        font-size: 12pt;
        border: none;
        box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.2); 
        padding: 10px 50px;
        border-radius: 20px;
    } 
        .home-hero:hover {
            cursor: pointer;
            box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.2);
        }

    .home-card {
        background-color: #82CFD0;
        color: white;
        font-size: 12pt;
        border: none;
        box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.2); 
        padding: 10px 30px;
        border-radius: 20px;
    }
    
        .home-card:hover {
            cursor: pointer;
            box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.2);
        }
</style>