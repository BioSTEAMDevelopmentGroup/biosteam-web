<template>
  <div class="flex flex-wrap items-stretch ">
    <div class="  p-4" v-for="card in cards" :key="card.title">
      <molecule-pubs-card :logo="card.logo" :journal="card.journal" :link1="card.link1" :link2="card.link2" class="h-full">
        <template #title>{{card.title}}</template>
        <template #description>{{card.description}}</template>
        <template #button1>{{card.button1}}</template>
        <template #button2>{{card.button2}}</template>
        <template #citation>{{card.citation}}</template>
      </molecule-pubs-card>
    </div>
  </div>
</template>

<script>
//import Pubs from '@/components/molecules/MoleculeAboutCard.vue';
// import PubsSecondCard from "@/components/molecules/MoleculePubsCard";
import MoleculePubsCard from "@/components/molecules/MoleculePubsCard.vue";

export default {
  name: 'OrganismPubsCard',
  components: {
    MoleculePubsCard,
    //MoleculeAboutCard,
  },
  props: ['cards']
}
</script>

<style>

</style>
