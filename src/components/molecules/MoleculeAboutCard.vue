<template>
    <div class="bg-gray-100 bg-opacity-80 shadow-lg rounded-md overflow-hidden">
        <div class="relative z-10 h-1/4 bg-gray-400 flex flex-col shadow-md">
            <h1 class="text-cdark text-4xl text-center pt-5"><slot name="title">Card Title</slot></h1>
            <div class="w-full flex justify-center absolute inset-x-0 -bottom-10">
                <img class="shadow-xl rounded-full bg-gray-100 border-4 border-gray-400 h-24 w-24" :src="require('@/assets/resources/' + logo + '')" alt="card logo">
            </div>
        </div>
        <div class="flex flex-col justify-between h-3/4 py-5 px-7">
            <p class="pt-10"><slot name="description">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos omnis, nostrum explicabo temporibus est in deleniti laudantium asperiores porro sequi.</slot></p>
            <div class="flex justify-center w-full">
                <atom-button @click="toLink()" class="text-xl w-3/5 bg-gray-400 text-cdark shadow-md hover:shadow-lg"><slot name="button">Visit Link</slot></atom-button>
            </div>
        </div>
    </div>
</template>

<script>
import AtomButton from "@/components/atoms/AtomButton.vue";

export default {
    name: 'MoleculeAboutCard',
    components: {
        AtomButton,
    },
    props: ['link', 'logo'],
    methods: {
        toLink() {
            window.open(this.link)
        }
    }
}
</script>

<style>

</style>
