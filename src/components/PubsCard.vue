<template>
  <div class="flex flex-wrap items-stretch ">
    <div class="  p-4" v-for="card in cards" :key="card.title">
      <pubs-second-card :logo="card.logo" :journal="card.journal" :link="card.link1" class="h-full">
        <template #title>{{card.title}}</template>
        <template #description>{{card.description}}</template>
        <template #button1>{{card.button1}}</template>
        <template #button2>{{card.button2}}</template>
        <template #citation>{{card.citation}}</template>
      </pubs-second-card>
    </div>
  </div>
</template>

<script>
//import Pubs from '@/components/molecules/MoleculeAboutCard.vue';
import PubsSecondCard from "@/components/atoms/Pubs 2Card";

export default {
  name: 'PubsCard',
  components: {
    PubsSecondCard,
    //MoleculeAboutCard,
  },
  props: ['cards']
}
</script>

<style>

</style>
