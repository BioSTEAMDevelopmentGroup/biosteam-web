<template>
    <div :class="{ 'flex-row-reverse': direction=='right' }" class="flex justify-around items-center" style="height: 75vh;">
        <img class="h-96 w-96 rounded-lg shadow-md" :src="require('@/assets/' + img + '')" alt="simulation mode screenshot">
        <div class="w-2/3 h-80 px-5">
            <h1 class="text-cdarkgreenblue text-6xl pb-5"><slot name="title">Title of card</slot></h1>
            <p class="text-cdark text-lg pb-5"><slot name="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam sapiente quae eveniet eum neque reprehenderit perspiciatis commodi aspernatur aliquam iusto.</slot></p>
            <atom-button @click="toRoute(link)" class="w-1/3 bg-cyellow text-cdark shadow-md hover:shadow-lg">Start Now</atom-button>            
        </div>
    </div>  
</template>

<script>
import AtomButton from "@/components/atoms/AtomButton.vue";

export default {
    name: 'MoleculeHomeInfo',
    components: {
        AtomButton,
    },
    props: {
        direction: String,
        img: String,
        link: String
    },
    methods: {
        toRoute(link) {
            this.$router.push({path: link})
        }
    }

}
</script>

<style>

</style>