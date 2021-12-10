<template>
    <div class="flex flex-wrap items-stretch h-5/6">
        <div class="w-1/2 h-1/2 p-3" v-for="card in cards" :key="card.title">
            <molecule-about-card :logo="card.logo" :link="card.link" class="h-full">
                <template #title>{{card.title}}</template>
                <template #description>{{card.description}}</template>
                <template #button>{{card.button}}</template>
            </molecule-about-card>
        </div>
    </div>
</template>

<script>
import MoleculeAboutCard from '@/components/molecules/MoleculeAboutCard.vue';

export default {
    name: 'OrganismAboutCards',
    components: {
        MoleculeAboutCard,
    },
    props: ['cards']
}
</script>

<style>

</style>
