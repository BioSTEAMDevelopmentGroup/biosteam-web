<template>
    <div class="checked-parameters">
        <div class="checked-tag" v-for="item in checked" :key="item">
            <div class="checked">
                <p>{{item}}</p>
            </div>            
        </div>
    </div>
</template>

<script>
export default {
    name: "CheckedParameters",
    props: ['checked'],
}
</script>

<style lang="scss" scoped>
    .checked-parameters {
        width: 100%;
        display: flex;
        justify-content: flex-start;
        flex-wrap: wrap;
    }

    .checked-tag {
        padding: {
            right: 10px;
            top: 10px;
        }
    }
    
    .checked {
        padding: 7px;
        border-radius: 5px;
        background-color: $cabbi-orange;
    }

</style>