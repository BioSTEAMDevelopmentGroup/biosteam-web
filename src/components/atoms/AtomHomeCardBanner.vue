<template>
    <div class="relative flex flex-col justify-end items-center">
        <div class="absolute w-full h-2/5 z-0 left-0 top-0 bg-cover" :style="{'background-image': `url(${require('@/assets/home/hero-footer.svg')})`}"></div>
        <h1 class="text-5xl text-cblue pb-5 pt-10">An open source approach to biorefinery modeling.</h1>
        <p class="text-cfontgrey text-center w-2/3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, cumque? Sequi vel suscipit facilis nulla maxime magnam sapiente, officia eveniet!</p>
    </div>
</template>

<script>
export default {
    name: 'AtomHomeCardBanner'
}
</script>

<style>

</style>