<template>
    <div class="set-number-samples">
        <p>Number of Simulations</p>
        <div class="sample-input">
            <input :value="value" @input="$emit('input', $event.target.value)" type="number">
        </div>       
    </div>
</template>

<script>
export default {
    name: 'SetNumberSamples',
    props: ['value'],
}
</script>

<style lang="scss" scoped>
    .set-number-samples {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-color: $cabbi-orange;
        border-radius: 10px;
    }
    p {
        padding: 15px;
    }
    .sample-input {
        padding-bottom: 15px;
    }
    input {
        text-align: center;
        border-radius: 2px;
        background-color: rgba(255, 255, 255, 0.6);
        border: none;
        font-size: 12pt;
        height: 25px;
    }

    /* Chrome, Safari, Edge, Opera */
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
    }

    /* Firefox */
    input[type=number] {
    -moz-appearance: textfield;
    }
</style>