<template>
    <div style="padding-bottom: 25px;">
        <div class="spearman-info">
            <h3>Spearman Rank Correlation</h3>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam explicabo molestias corporis eaque maxime aut praesentium labore. In possimus, deleniti nemo similique ad accusamus sapiente cum iusto alias atque ducimus?</p>
        </div>    
    </div>
</template>

<script>
export default {
    name: 'SpearmanInfo',


}
</script>

<style lang="scss" scoped>
    .spearman-info {
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