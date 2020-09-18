<template>
    <div class="container">
        <div class="box-1">
            <div class="sticky-title">
                <h4>Set system parameters</h4>
            </div>
            <div class="parameters">
                <p>content here</p>
            </div>
        </div>
        <div class="box-2">

        </div>
    </div>
</template>

<script>
export default {
    name: 'SimulateBox'
}
</script>

<style lang="scss" scoped>
    .container {
        display: flex;
        height: 75vh;
        background-color: white;
        border-radius: 5px;
        box-shadow: $shadow;
    }

    .box-1 {
        display: flex;
        flex-direction: column;
        background-color: $cabbi-grey;
        flex: 1;
        border-radius: 5px 0px 0px 5px;
    }

    .sticky-title {
        position: -webkit-sticky; /* Safari */
        position: sticky;
        background-color: darkgray;
        text-align: center;
        border-radius: 5px 0px 0px 0px;
        padding: {
            top: 15px;
            bottom: 15px;
        }
    }

    .parameters {
        padding: 15px;
    }

    .box-2 {
        flex: 2;
    }
</style>