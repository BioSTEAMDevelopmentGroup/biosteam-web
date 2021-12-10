<template>
    <div class="line-graph">
        <h3>Line graph component </h3>
        <app-dropdown
            :options="options"
            :selected="selected"
            @select-option="selectIndicatorOption"
            type="options-graph"
            icon="caret-down"
            class="indicator-dropdown">
        </app-dropdown>
        <plotly class="plot" :data="plotData" :layout="layout" :displayModeBar="false"/>
        <app-button type="plot-button">Export Data</app-button>
    </div>
</template>

<script>
import { Plotly } from 'vue-plotly';
import AppButton from "@/deprecated/AppButton.vue";
import AppDropdown from "@/deprecated/AppDropdown.vue";

//plot help --> https://plotly.com/javascript/continuous-error-bars/
export default {
    name: "LineGraph",
    props: ['options'],
    components: {
        Plotly,
        AppButton,
        AppDropdown,
    },
    data() {
        return{
            selected: 'Indicator',
            plotValue: {
                x: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1],
                y: [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0],
                fill: "tozerox",
                fillcolor: "rgba(0,100,80,0.2)",
                line: {color: "transparent"},
                showlegend: false,
                type: "scatter",
                name: "error",
            },
            lowerBound: {
                x: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
                y: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
                line: {color: "rgb(0,100,80)"},
                mode: "lines",
                type: "scatter",
                name: "measurement",
            },
            layout: {
                yaxis: {
                    zeroline: true,
                    gridcolor: 'white',
                    zerolinecolor: 'rgb(255, 255, 255)',
                    zerolinewidth: 2,
                    title: "Selected Metric",
                },
                xaxis: {
                    zeroline: true,
                    gridcolor: 'white',
                    zerolinecolor: 'rgb(255, 255, 255)',
                    zerolinewidth: 2,
                    title: "Lipid Content",
                },
                margin: {
                    l: 65,
                    r: 30,
                    b: 35,
                    t: 15,
                },
                showlegend: false,
                paper_bgcolor: '#E1DEDA',
                plot_bgcolor: '#E1DEDA',
            }
        }
    },
    computed: {
        plotData: function() {
            let list = [this.plotValue, this.lowerBound]
            return list
        }
    },
    methods: {
        selectIndicatorOption(value) {
            this.selected = value.name
        }
    },

}
</script>

<style lang="scss" scoped>
    .line-graph {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .plot {
        padding: {
            top: 20px;
            bottom: 25px;
        }
        height: 50vh;
        width: 100%;
    }
    h3 {
        text-align: center;
        padding-bottom: 20px;
    }
</style>
