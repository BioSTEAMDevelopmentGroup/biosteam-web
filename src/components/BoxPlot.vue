<template>
    <div class="w-3/6 box-plot">
        <div class="pb-4" style="width: 400px;">
            <atom-dropdown 
                class="dropdown"
                :options="options" 
                :selected="selected"
                @select-option="selectIndicatorOption">
            </atom-dropdown>
        </div>
        <plotly class="plot" :data="plotData" :layout="layout" :displayModeBar="false"/>
        <div class="pt-4" style="width: 400px;">
            <atom-button class="w-full bg-gray-300 hover:bg-opacity-100 text-cfontgrey text-lg">Export Data</atom-button>
        </div>
    </div>
</template>


<script>
import { Plotly } from 'vue-plotly';

import AtomButton from '@/components/atoms/AtomButton.vue';
import AtomDropdown from '@/components/atoms/AtomDropdown.vue';
// box-plot help --> https://plotly.com/javascript/box-plots/

export default {
    name: "BoxPlot",
    props: ['options', 'boxplot'],
    components: {
        Plotly,
        AtomDropdown,
        AtomButton,
    },
    data() {
        return{
            selected: 'Indicator',
            plot: {
                y: null,
                type:"box",
                name: "",
                marker: {color: '#1D7F3D'},
            },
            layout: {
                hovermode: "closest",
                hoverlabel: { bgcolor: "#FFF" },
                yaxis: {
                    zeroline: true,
                    gridcolor: '#d1d5db',
                    zerolinecolor: '#d1d5db',
                    zerolinewidth: 2,
                },
                margin: {
                    l: 55,
                    r: 30,
                    b: 25,
                    t: 15,
                },
                //title: "Box plot component",
                paper_bgcolor: '#f3f4f6',
                plot_bgcolor: '#f3f4f6',
            }
        }
    },
    computed: {
        plotData: function() {
            let data = this.plot

            for(let i=0; i<this.options.length; i++) {
                if(this.options[i].name == this.selected && this.boxplot !== null) {
                    let metric = this.options[i].name
                    data.y = this.boxplot[metric]
                    data.name = this.selected
                    return [data]
                }
                else {
                    data.y = [0, 0, 0, 0, 0, 0, 0, 0, 0]
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
    }

    .dropdown {
        display: flex;
        flex-direction: row;
        align-items: space-between;
        background-color: #d1d5db;
        width: 400px;
    }

    .plot {
        height: 350px;
        width: 400px;  
    }

    h3 {
        text-align: center;
        padding-bottom: 20px;
    }
</style>