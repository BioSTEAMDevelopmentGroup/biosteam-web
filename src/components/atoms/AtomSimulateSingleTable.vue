<template>
    <div class="w-5/6 pb-10">
        <div class="flex flex-col justify-center items-center bg-gray-100 border-2 border-cdarkgreenblue">
            <div class="w-full flex justify-between items-center px-10 py-2 bg-gray-300">
                <span></span>
                <p class="text-cdark text-2xl">Simulation Results</p>
                <font-awesome-icon
                    size="lg"
                    icon="download"
                    style="color: #707070; float: right; cursor: pointer;"
                />
            </div>
            <table class="table-auto border-collapse w-full text-lg">
                <thead class="text-xl text-cdarkgreenblue bg-gray-200">
                    <tr class="border-gray-300 border">
                        <th>Metric</th>
                        <th>Value</th>
<!--                        <th>Units</th>-->
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="metric in metrics" :key="metric.name">
                        <td>{{metric}}</td>
                        <td class="text-center">{{metric.computedValue}}</td>
<!--                        <td class="text-center">{{metric.units}}</td>-->
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
export default {
    name: 'AtomSimulateSingleTable',
    props: ['metrics']
}
</script>

<style scoped>
    table,th,tr {
        @apply border;
        @apply border-gray-400;
        @apply p-2;
    }
    table,tbody,tr,td {
        @apply border;
        @apply border-gray-300;
        @apply p-2;
    }
</style>
