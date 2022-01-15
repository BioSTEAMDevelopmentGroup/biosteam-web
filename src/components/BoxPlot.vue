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
            <atom-button @click="exportData()" class="w-full bg-gray-300 hover:bg-opacity-100 text-cfontgrey text-lg">Export Data</atom-button>
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

            // for(let i=0; i<this.options.length; i++) {
            //     if(this.options[i] == this.selected && this.boxplot !== null) {
            //         let metric = this.options[i]
            //         data.y = this.boxplot[metric]
            //         data.name = this.selected
            //         return [data]
            //     }
            //     else {
            //         data.y = [0, 0, 0, 0, 0, 0, 0, 0, 0] //may be arbitrary
            //       // //could be [0]
            //       // data.y = [0]
            //     }
            // }
            if (this.boxplot !== null) {
              data.y = this.boxplot[this.selected]
              data.name = this.selected
              return [data]
            }
            data.y = [0]
            return [data]
        }
    },
    methods: {
        selectIndicatorOption(value) {
            this.selected = value
        },
        exportData() {
          if (this.boxplot !== null) {
            // console.log(this.boxplot['Maximum feedstock purchase price [USD/ton]'])
            // console.log('here')
            let rows = []
            for (let key in this.boxplot) {
              let row = []
              row.push("\"" + key + "\"")
              for (let idx in this.boxplot[key]) {
                row.push(this.boxplot[key][idx])
              }
              rows.push(row)
            }
            let csvContent = "data:text/csv;charset=utf-8,"
                + rows.map(e => e.join(",")).join("\n");

            var encodedUri = encodeURI(csvContent);
            var link = document.createElement("a");
            link.setAttribute("href", encodedUri);
            link.setAttribute("download", "uncertainty_results.csv");
            document.body.appendChild(link); // Required for FF
            link.click()
          }
        },
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
