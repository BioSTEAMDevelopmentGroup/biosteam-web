<template>
    <div class="box-plot">
        <h3>Box plot component</h3>
        <app-dropdown 
            :options="options" 
            :selected="selected"
            @select-option="selectIndicatorOption"
            icon="caret-down" 
            class="indicator-dropdown">
        </app-dropdown>
        <plotly class="plot" :data="plotData" :layout="layout" :displayModeBar="false"/>
        <app-button type="plot-button">Export Data</app-button>
    </div>
</template>


<script>
import { Plotly } from 'vue-plotly';
import AppButton from "@/components/AppButton.vue";
import AppDropdown from "@/components/AppDropdown.vue";
// box-plot help --> https://plotly.com/javascript/box-plots/

export default {
    name: "BoxPlot",
    props: ['options'],
    components: {
        Plotly,
        AppButton,
        AppDropdown
    },
    data() {
        return{
            selected: 'Indicator',
            plotData: [{
                y: [0.6, 0.7, 0.3, 0.6, 0.5, 0.7, 0.9, 0.5, 0.8, 0.7, 0.2],
                type:"box",
                name: "MFSP",
                marker: {color: '#1D7F3D'},
            }],
            layout: {
                yaxis: {
                    zeroline: true,
                    gridcolor: 'white',
                    zerolinecolor: 'rgb(255, 255, 255)',
                    zerolinewidth: 2,
                    title: "Selected Metric",
                },
                margin: {
                    l: 40,
                    r: 30,
                    b: 25,
                    t: 15,
                },
                //title: "Box plot component",
                paper_bgcolor: '#E1DEDA',
                plot_bgcolor: '#E1DEDA',
            }
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

    .box-plot {
        display: flex;
        flex-direction: column;
    }

    .plot {
        padding: {
            top: 20px;
            bottom: 25px;
        }    
    }
    
    h3 {
        text-align: center;
        padding-bottom: 20px;
    }
</style>