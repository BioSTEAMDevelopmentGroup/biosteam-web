<template>
    <div class="px-2 py-6">
        <h1 class="text-cdarkgreenblue text-xl pb-4">{{list.name}}</h1>
        <div @click="set_img(subcategory)" v-for="subcategory in Object.keys(list.subcategories)" :key="subcategory.index">
            <p class="text-cfontgrey text-lg pl-5 pb-3">{{subcategory}}</p>
        </div>
     </div>
</template>

<script>
export default {
    name: 'MoleculeDocsList',
    props: ['list'],
    methods: {
        set_img(subcategory) {
            this.$parent.$emit('set_img', this.list.subcategories[subcategory])
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
