<template>
    <div class="container">
        <div class="title">
            <h3><slot name="title">This is the card title</slot></h3>
        </div>
        <div class="content">
            <p><slot name="content">This is the card content</slot></p>
        </div>
        <div class="button">
            <app-button @click="toLink" type="home-card">Learn More</app-button>
        </div>
    </div>
</template>

<script>
import AppButton from '@/components/AppButton.vue';
export default {
    name: 'HomeCard',
    components: {
        AppButton,
    },
    props: ['link'],
    methods: {
        toLink() {
            window.open(this.link)
        }
    }    
}
</script>

<style scoped>

    .container {
        display: flex;
        flex-direction: column;
        min-height: 50vh;
        justify-content: space-between;
        box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.2); 
        border-radius: 20px;
    }

    .title {
        display: flex;
        justify-content: center;
        background-color: #E1DEDA;
        padding: 15px;
        border-top-right-radius: 20px;
        border-top-left-radius: 20px;
        color: #707070;
    }

    .content {
        padding: 15px;
        color: #707070;
    }

    .button {
        display: flex;
        justify-content: center;
        padding: 15px;
    }

</style>