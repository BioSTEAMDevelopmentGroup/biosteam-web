<template>
<div class="table">
    <div class="title">
        <div class="space"></div>
        <p>Evaluated Metrics</p>
        <font-awesome-icon
            icon="download"
            style="color: #707070; float: right; cursor: pointer;"
        />
    </div>
    <table>
        <thead>
            <tr>
                <th>Metric</th>
                <th>value</th>
                <th>Units</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="parameter in parameters" :key="parameter.name">
                <td>{{parameter.name}}</td>
                <td>{{parameter.computedValue}}</td>
                <td>{{parameter.unit}}</td>
            </tr>
        </tbody>
    </table>
</div>
</template>

<script>
export default {
    name: 'SimulateSingleTable',
    props: {
        parameters: Array,
    },
    data() {
        return {
            // items: [
            //     {metric: 'metric 1', value: '1.234', unit: 'x/y'},
            //     {metric: 'metric 2', value: '1.234', unit: 'x/y'},
            //     {metric: 'metric 3', value: '1.234', unit: 'x/y'},
            //     {metric: 'metric 4', value: '1.234', unit: 'x/y'},
            //     {metric: 'metric 5', value: '1.234', unit: 'x/y'},
            //     {metric: 'metric 6', value: '1.234', unit: 'x/y'},
            //     {metric: 'metric 7', value: '1.234', unit: 'x/y'},
            //     {metric: 'metric 8', value: '1.234', unit: 'x/y'},
            //     {metric: 'metric 9', value: '1.234', unit: 'x/y'},
            //     {metric: 'metric 10', value: '1.234', unit: 'x/y'},
            // ],         
        }
    },

}
</script>

<style scoped lang="scss">
    .table {
        width: 100%;
        border: 1px $cabbi-grey solid;
    }
    .title {
        background-color: $cabbi-grey;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        font-size: 14pt;
        border: 2px white solid;
        padding: {
            top: 10px;
            bottom: 10px;
        }
    }
    table {
        width: 100%;
        text-align: center;
        th {
            background-color: $cabbi-grey;
            text-transform: uppercase;
            color: $cabbi-dark;
            padding: {
                top: 5px;
                bottom: 5px;
            }
        }
        tbody {
        color: #707070;
            // tr:nth-child(2n) td {
            // background: $cabbi-grey;
            // }
            tr td {
            background: #F0EEEC;
            }
        }
    }
</style>