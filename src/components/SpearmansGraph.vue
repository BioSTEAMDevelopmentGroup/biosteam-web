<template>
    <div class="spearman-graph">
        <div class="spearman-buttons">
            <app-dropdown 
                :options="options" 
                :selected="selected"
                @select-option="selectIndicatorOption"
                type="options-graph"
                icon="caret-down" 
                class="indicator-dropdown">
            </app-dropdown>
            <app-button type="plot-button">Export Data</app-button>             
        </div>       
        <plotly class="plot" :react="true" :data="plotData" :layout="layout" :displayModeBar="false"/>
    </div>
</template>

<script>
import { Plotly } from 'vue-plotly';
//import spearman from "@/assets/simulation/spearman.json";

import AppButton from "@/components/AppButton.vue";
import AppDropdown from "@/components/AppDropdown.vue";

//plot help --> https://plotly.com/javascript/continuous-error-bars/
export default {
    name: "SpearmansGraph",
    props: ['options', 'spearman'],
    components: {
        Plotly,
        AppButton,
        AppDropdown,
    },
    data() {
        return{
            //spearman: spearman,
            selected: 'Indicator',
            plot: {
                x: [],
                //only for cornstover at the moment// 
                //x: [-0.320651694, -0.007735579, -0.233021623, 0.041917709, -0.486752267, -0.208674911, -0.499473217, -0.162942112, 0.368498535, 0.190852107, -0.113052724, 0.072755361, 0.074500617, 0.059358043],
                y: [
                    // "Plant size [kg/hr]",
                    // "Pt glucose-to-glucose [%]",
                    // "Pt xylan-to-xylose [%]",
                    // "Xylan-to-furfural conversion [%]",
                    // "Eh cellulose-to-glucose [%]",
                    // "Ferm glucose-to-ethanol [%]",
                    // "Boiler efficiency [%]",
                    // "Turbogenerator efficiency [%]",
                    // "Cornstover price [$/kg]",
                    // "Enzyme price [$/kg]",
                    // "Electricity price [$/kWh]",
                    // "Income tax [%]",
                    // "Eh time [hr]",
                    // "Ferm time [hr]"
                ],
                type:"bar",
                orientation: 'h',
                marker: {color: '#1D7F3D'},
            },
            layout: {
                // yaxis: {
                //     zeroline: true,
                //     gridcolor: 'white',
                //     zerolinecolor: 'rgb(255, 255, 255)',
                //     zerolinewidth: 2,
                //     title: "Selected Metric",
                // },
                hovermode: 'closest',
                hoverlabel: { bgcolor: "#FFF" },
                yaxis: {
                    gridcolor: 'white',
                    zerolinecolor: 'rgb(255, 255, 255)',
                    zerolinewidth: 2,
                },
                xaxis: {
                    gridcolor: 'white',
                    zerolinecolor: 'rgb(255, 255, 255)',
                    zerolinewidth: 2,
                },
                margin: {
                    l: 230,
                    r: 30,
                    b: 30,
                    t: 15,
                },
                paper_bgcolor: '#E1DEDA',
                plot_bgcolor: '#E1DEDA',
            }
        
        }
    },
    computed: {
        plotData: function() {
            let data = this.plot

            for(let i=0; i<this.options.length; i++) {
                if(this.options[i].name == this.selected && this.spearman !== null) {
                    let metric = this.options[i].name
                    let view = this.spearman[metric]
                    let x_values = []
                    let y_values = []

                    for(var key in view) {
                        x_values.push(view[key])
                        y_values.push(key)                        
                    }

                    data.x = x_values
                    data.y = y_values

                    return [data]
                }
                else {
                    data.x = [0, 0, 0]
                    data.y = ['no', 'data', 'available']
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
    .spearman-buttons {
        display: flex;
        justify-content: space-around;
        width: 100%;
    }
    .spearman-graph {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .plot {
        padding: {
            top: 20px;
            bottom: 25px;
        }    
        height: 350px;
        width: 100%;
    }
    h3 {
        text-align: center;
        padding-bottom: 20px;
    }
</style>