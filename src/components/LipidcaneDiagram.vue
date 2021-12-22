<template>
    <div class="oilcane-diagram" ref="chartdiv">
    </div> 
</template>

<script>
import * as am4core from "@amcharts/amcharts4/core";
//import * as am4charts from "@amcharts/amcharts4/charts";
import * as am4plugins_forceDirected from "@amcharts/amcharts4/plugins/forceDirected";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
am4core.useTheme(am4themes_animated);

export default {
    name: "OilcaneDiagram",
    mounted() {
        let chart = am4core.create(this.$refs.chartdiv, am4plugins_forceDirected.ForceDirectedTree);
        let series = chart.series.push(new am4plugins_forceDirected.ForceDirectedSeries());       
        series.data = [{
            "name": "First",
            "color": "#FCB813",
            "children": [{
                "name": "A1", "value": 100
            }, {
                "name": "A2", "value": 60
            }, {
                "name": "A3", "value": 30
            }]
            }, {
            "name": "Second",
            "color": "#FEDD50",
            "children": [{
                "name": "B1", "value": 135
            }, {
                "name": "B2", "value": 98
            }, {
                "name": "B3", "value": 56
            }]
            }, {
            "name": "Third",
            "color": "#3BA459",
            "children": [{
                "name": "C1", "value": 335
            }, {
                "name": "C2", "value": 148
            }, {
                "name": "C3", "value": 126
            }, {
                "name": "C4", "value": 26
            }]
            }, {
            "name": "Fourth",
            "color": "#25A996",
            "children": [{
                "name": "D1", "value": 415
            }, {
                "name": "D2", "value": 148
            }, {
                "name": "D3", "value": 89
            }, {
                "name": "D4", "value": 64
            }, {
                "name": "D5", "value": 16
            }]
            }, {
            "name": "Fifth",
            "color": "#E1DEDA",
            "children": [{
                "name": "E1", "value": 687
            }, {
                "name": "E2", "value": 148
            }]
            }]

        series.colors.list = [
            am4core.color("#707070"),
            am4core.color("#FEDD50"),
            am4core.color("#3BA459"),
            am4core.color("#25A996")
        ];

        // Set up data fields
        series.dataFields.value = "value";
        series.dataFields.name = "name";
        series.dataFields.color = "color";
        series.dataFields.children = "children";

        // Add labels
        series.nodes.template.label.text = "{name}";
        series.fontSize = 10;
        series.minRadius = 15;
        series.maxRadius = 40;

        this.chart = chart;
    },

    beforeDestroy() {
        if (this.chart) {
        this.chart.dispose();
        }
    }


}
</script>

<style scoped lang="scss">
    .oilcane-diagram {
        height: 500px;
        width: 500px;
    }
</style>
