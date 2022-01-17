<template>
    <div class="bg-white relative flex flex-col shadow-lg rounded-lg overflow-hidden">
        <div class="absolute z-0 left-0 top-0 w-full h-1/3 bg-cover" :style="{'background-image': `url(${require('@/assets/resources/about-banner.svg')})`}"></div>
        <h3 class="px-3 z-20 h-1/3 text-white flex justify-center items-center text-center text-3xl"><slot name="title">This is the card title</slot></h3>
        <div class="bg-white flex flex-col justify-between h-2/3 px-8 py-5">
            <p class="text-cfontgrey pb-10"><slot name="content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus inventore nostrum alias suscipit placeat autem ratione fuga velit vitae error est maxime ipsum sequi ex repellat voluptates consectetur voluptatem itaque blanditiis quibusdam, provident repudiandae illum! Nesciunt dicta, labore repudiandae suscipit in voluptatibus ducimus qui exercitationem aspernatur, possimus aperiam sint cum.</slot></p>
            <div class="flex justify-center">
                <atom-button @click="toLink()" class="bg-cblue text-lg text-white w-4/5 shadow-sm hover:shadow-md">Visit Link</atom-button>
            </div>
        </div>
    </div>
</template>

<script>
import AtomButton from "@/components/atoms/AtomButton.vue";

export default {
    name: 'MoleculeHomeCard',
    components: {
        AtomButton,
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

</style>
