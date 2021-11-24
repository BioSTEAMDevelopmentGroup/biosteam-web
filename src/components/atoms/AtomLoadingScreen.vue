<template>
  <div class="w-full h-full bg-gray-50 bg-opacity-80 flex justify-center items-center">
      <div class="w-3/5 p-8 bg-gray-200 rounded-md flex flex-col justify-around items-center">
        <div class="w-full flex justify-around pb-2">
            <cube-shadow v-if="simulation == 'single-point'" background="#1D8476"></cube-shadow>
            <cube-shadow v-if="simulation == 'uncertainty'" background="#fcb813"></cube-shadow>         
            <h1 :class="{'text-corange': simulation == 'uncertainty', 'text-cdarkgreenblue': simulation == 'single-point'}" class="text-5xl">Simulation running...</h1>          
        </div>
        <p class="text-cfontgrey">This may take a few minutes depending on the number of simulations</p>
      </div>
  </div>
</template>

<script>
import {CubeShadow} from 'vue-loading-spinner'

export default {
    name: 'AtomLoadingScreen',
    components: {
        CubeShadow
    },
    props: ['simulation']
}
</script>

<style scoped>

</style>