<template>
  <div class="bg-corange rounded-xl shadow-md">
      <div class="p-6 items-center">
         <h1>Fetch results from previous run</h1> 
         <input class="p-1" type="text" placeholder="enter jobId">
         <button class=" bg-corange-dark px-4 py-1 text-white font-semibold rounded-full border border-white hover:bg-corange hover:border-transparent">Get Data</button>
      </div>  
  </div>
</template>

<script>
export default {
    name: 'FetchJob',
    props: ['jobId'],
    data() {
        return {

        }
    }
}
</script>

<style>

</style>