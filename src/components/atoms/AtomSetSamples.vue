<template>
    <div class="w-full pb-6">
        <div class="bg-corange rounded-md px-2 py-6 flex flex-col justify-center items-center">
            <h1 class="text-xl text-cdark text-center pb-4">Simulations to run:</h1>
            <input :value="sampleNumber" @input="$emit('input', $event.target.value)" type="number" class="w-5/6 text-center rounded-sm">
        </div>    
    </div>
</template>

<script>

export default {
    name: 'AtomSetSamples',
    props: ['sampleNumber'],
}
</script>

<style scoped>

</style>