<template>
    <div class="w-5/6 pt-6">
        <div class="p-6 bg-corange rounded-md w-full">
            <div>
                <h1 class="text-cdark text-2xl pb-2">Simulation Overview</h1>
                <p class="text-cfontgrey text-lg pb-2">
                    You have selected these parameters to run in your <strong>{{sampleNumber}}</strong> simulations
                    of the <strong>{{biorefinery}}</strong> biorefinery.</p>
            </div>
            <div class="flex flex-wrap">
                <div class="pb-2 pr-2" v-for="item in checked" :key="item.name">
                    <div class="flex justify-center items-center rounded-md bg-white bg-opacity-60">
                        <p class="text-cfontgrey p-2">{{item.name}}</p>                        
                    </div>      
                </div>                
            </div>
        </div>        
    </div>

</template>

<script>
export default {
    name: "AtomCheckedParameters",
    props: ['checked', 'sampleNumber', 'biorefinery'],
}
</script>

<style scoped>

</style>