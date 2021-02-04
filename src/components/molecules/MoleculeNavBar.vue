<template>
    <nav class="bg-clightblue h-20 flex justify-between items-center px-10">
        <router-link to="/"><img class="h-10" src="@/assets/biosteam-logo.svg"></router-link>
        <ul class="flex">
            <li class="px-6 py-1 rounded-full border-2 border-transparent" :class="{ simulate : item.name=='Simulate' }" v-for="item in items" :key="item.name">
                <router-link class="text-cfontgrey text-xl" :to="item.link" exact>{{item.name}}</router-link>
            </li>
        </ul>
    </nav>
</template>

<script>
export default {
    name: 'MoleculeNavBar',
    props: ['items']
}
</script>

<style scoped>
    a.router-link-active {
        @apply text-cdarkgreenblue;
    }
    .simulate {
        @apply rounded-full;
        @apply border-cdarkgreenblue;
        @apply border-2;
    }
</style>