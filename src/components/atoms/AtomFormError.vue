<template>
  <div v-if="errors.length =! 0 && open" class="pb-4"> 
      <div class="rounded-md bg-red-300 p-4 flex flex-col justify-center items-center">
          <div v-for="error in errors" :key="error">
            <p class="text-lg text-red-800 pb-1 px-2">{{error}}</p>    
          </div>     
          <div class="border-2 border-red-800 rounded-md flex justify-center items center hover:pointer hover:bg-red-500" @click="open =!open">click to close</div>
      </div>  
  </div>
</template>

<script>
export default {
    name: 'AtomFormError',
    props: ['errors'],
    data() {
        return {
            open: true,
        }
    }
}
</script>

<style>

</style>