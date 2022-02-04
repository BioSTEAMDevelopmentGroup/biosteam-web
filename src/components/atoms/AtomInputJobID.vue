<template>
  <div class="w-5/6 pt-6">
    <div class="rounded-md p-6 bg-opacity-60" :class="{'bg-cdarkgreenblue': simulation == 'single-point', 'bg-corange': simulation == 'uncertainty'}">
      <h1 class="text-2xl text-cdark">Load simulation by ID:</h1>
      <p class="text-cfontgrey pb-2">Example: 55cb9e41-84a2-4752-9753-b45fc24eab9a</p>
      <div class="flex w-full justify-between ">
        <p class="text-cfontgrey p-1">Job ID:</p>
        <input v-model="input" type="text" class="w-11/12 p-1">
      </div>
      <p class="pb-2"></p>
      <div class="overflow-auto">
      <atom-button :type="'parentDef'" @click="submitId()" class="text-white text-lg bg-green-700 float-right">Submit Job ID</atom-button>
      </div>
    </div>
  </div>
</template>

<script>
import AtomButton from "@/components/atoms/AtomButton";

export default {
  name: "AtomInputJobID",
  props: ['jobId', 'simulation'],
  components: {
    AtomButton,
  },
  data() {
    return {
      input: null
    }
  },
  methods: {
    submitId() {
      console.log(this.input)
      this.$emit('setJobId', this.input)
    }
  }
}
</script>

<style scoped>
  input {
    @apply rounded-sm;
    /*@apply text-center;*/
  }
</style>
