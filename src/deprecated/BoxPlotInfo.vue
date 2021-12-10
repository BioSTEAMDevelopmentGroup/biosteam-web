<template>
<div style="padding-bottom: 20px;">
    <div class="box-plot-info">
        <h3>Box Plot Outcomes</h3>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam explicabo molestias corporis eaque maxime aut praesentium labore. In possimus, deleniti nemo similique ad accusamus sapiente cum iusto alias atque ducimus?</p>
    </div>
</div>
</template>

<script>
export default {
    name: 'BoxPlotInfo',


}
</script>

<style lang="scss" scoped>
    .box-plot-info {
        display: flex;
        flex-direction: column;
        background-color: $cabbi-orange;
        border-radius: 5px;
        padding: 15px;
        height: 100%;
    }

    h3 {
        padding-bottom: 10px;
    }
</style>
