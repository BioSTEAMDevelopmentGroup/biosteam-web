<template>
    <div class="box-plot">
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
import boxplot from "@/assets/simulation/boxplot.json";

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
            boxplot: boxplot,
            selected: 'Indicator',
            plot: {
                y: [],
                type:"box",
                name: "MESP",
                marker: {color: '#1D7F3D'},
            },
            layout: {
                hovermode: "closest",
                hoverlabel: { bgcolor: "#FFF" },
                yaxis: {
                    zeroline: true,
                    gridcolor: 'white',
                    zerolinecolor: 'rgb(255, 255, 255)',
                    zerolinewidth: 2,
                },
                margin: {
                    l: 45,
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
computed: {
        plotData: function() {
            let data = this.plot

            for(let i=0; i<this.options.length; i++) {
                if(this.options[i].name == this.selected) {
                    let key = this.options[i].key
                    data.y = boxplot[key]
                    data.name = this.selected
                    return [data]
                }
                else {
                    data.x = boxplot.zeros
                }
            }

            return [data]
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
        align-items: center;
        width: 400px;
    }

    .plot {
        padding: {
            top: 20px;
            bottom: 25px;
        }
        //height: 50vh;  
        height: 350px;
        width: 400px;  
    }

    h3 {
        text-align: center;
        padding-bottom: 20px;
    }
</style>