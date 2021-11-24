<template>
    <div class="container">
        <div class="logo-container">
            <div class="color-bar"></div>
            <div class="logo">
                <slot name="logo"></slot>
            </div>            
        </div>
        <div class="content">
            <div class="title">
                <h2><slot name="title">This is the card title</slot></h2>
            </div>
            <div class="text">
                <p><slot name="text">This is the card content</slot></p>
            </div>
            <div class="button">
                <app-button @click="toLink" type="home-card"><slot name="button">Learn More</slot></app-button>
            </div>            
        </div>
    </div>
</template>

<script>
import AppButton from '@/components/AppButton.vue';

export default {
    name: 'ResourcesCard',
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

<style lang="scss" scoped>
.container{
    display: flex;
    background-color: white;
    border-radius: 10px;
    box-shadow: $shadow;
}

.logo-container {
    display: flex;
    align-items: center;
    background-color: $cabbi-orange;
    min-height: 100%;
    border-radius: 10px 0px 0px 10px;
}

.color-bar{
    position: absolute;
    height: 100%;
}

.logo{
    position: relative;
    background-color: white;
    border-radius: 50%;
    border: 5px $cabbi-orange solid;
    left: 50%;
}

.logo > img {
    border-radius: 50%;
    padding: 15px;
    width: 50px;
    height: 50px;
}

.content{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    padding: {
        left: 60px;
        top: 20px;
        right: 20px;
        bottom: 20px;
    }
    h2{
        padding-bottom: 10px;
    }
    p{
        color: #707070;
        padding-bottom: 15px;
        font-size: 12pt;
    }
}
</style>