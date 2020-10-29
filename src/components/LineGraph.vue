<template>
    <div class="line-graph">
        <h3>Line graph component </h3>
        <app-button type="plot-button">Indicator</app-button>
        <plotly class="plot" :data="plotData" :layout="layout" :displayModeBar="false"/>
        <app-button type="plot-button">Export Data</app-button>
    </div>
</template>

<script>
import { Plotly } from 'vue-plotly';
import AppButton from "@/components/AppButton.vue";

//plot help --> https://plotly.com/javascript/continuous-error-bars/
export default {
    name: "LineGraph",
    components: {
        Plotly,
        AppButton,
    },
    data() {
        return{
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
                    l: 40,
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
    }

}
</script>

<style lang="scss" scoped>
    .line-graph {
        display: flex;
        flex-direction: column;
    }
    .plot {
        padding: {
            top: 20px;
            bottom: 25px;
        }    
        //height: 400px;
    }
    h3 {
        text-align: center;
        padding-bottom: 20px;
    }
</style>