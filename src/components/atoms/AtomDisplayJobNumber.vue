<template>
  <div class="w-5/6 pt-6">
      <div class="rounded-md p-6 bg-opacity-60" :class="{'bg-cdarkgreenblue': simulation == 'single-point', 'bg-corange': simulation == 'uncertainty'}">
          <h1 class="text-2xl text-cdark">Your BioSTEAM run number is: <strong>#{{jobId}}</strong></h1>
          <p class="text-cfontgrey pb-2">You can save this for later to retrieve past results for up to 3 days.</p>
          <atom-button @click="$emit('click')" :class="{'bg-red-800': jobHasFinished == 'no data', 'bg-green-700': jobHasFinished !== 'no data'}" class="text-white text-lg">Fetch bioSTEAM results</atom-button>
      </div>
  </div>
</template>

<script>
import AtomButton from "@/components/atoms/AtomButton.vue";

export default {
    name: 'AtomDisplayJobNumber',
    props: ['jobId', 'simulation', 'jobHasFinished'],
    components: {
        AtomButton,
    }
}
</script>

<style scoped>

</style>