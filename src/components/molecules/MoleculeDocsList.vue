<template>
    <div class="px-2 py-6">
        <h1 class="text-cdarkgreenblue text-2xl pb-4">{{list.name}}</h1>
        <div @click="shout(subcategory)" v-for="subcategory in list.subcategories" :key="subcategory.index">
            <p class="text-cfontgrey text-lg pl-5 pb-3">{{subcategory}}</p>
        </div>
     </div>
</template>

<script>
export default {
    name: 'MoleculeDocsList',
    props: ['list'],
    methods: {
        shout(alert) {
            console.log(alert)
        }
    }
}
</script>

<style scoped>
    p {
        @apply cursor-pointer;
    }
    p:hover {
        @apply text-cdark;
    }
</style>
