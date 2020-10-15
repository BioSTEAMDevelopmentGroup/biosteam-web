<template>
    <div class="single-parameter">
        <div class="box-1">
            <slot name="name"><p>Parameter Name</p></slot>
            <v-popover
            placement="bottom"
            offset="16">
                <a><font-awesome-icon icon="info-circle"/></a>
                <template slot="popover">
                    <div class="tooltip">
                        <slot name="info"> 
                            Info goes here 
                        </slot>                        
                    </div>
                </template>
            </v-popover>
        </div>
        <div class="box-2">
            <input :value="value" @input="$emit('input', $event.target.value)" type="number" placeholder="Enter Value">
        </div>
    </div>
</template>

<script>
export default {
    name: "SingleParameter",
    props: {
        value: Number,
        defaultChecked: Boolean,
    }
}
</script>

<style scoped lang="scss">
    a {
        cursor: pointer;
    }
    .single-parameter {
        display: flex;
        width: 100%;
    }
    .box-1 {
        flex: 2;
        display: flex;
        align-items: center;
        justify-content: space-between;
        background-color: $cabbi-dark-green-blue;
        color: $cabbi-dark;
        padding: 10px;
    }
    .box-2 {
        flex: 1;
        display: flex;
        justify-content: center;
        padding: 10px;
        background-color: #259b8d;      
    }
    input {
        background-color: #259b8d; 
        outline: none;
        border: none;
        text-align: center;
        font-family: $text;
    }
    .tooltip {
        background-color: $cabbi-grey;
        font-family: 'Montserrat', sans-serif;
        color: #707070;
        padding: 10px;
        box-shadow: $shadow;
        border-radius: 5px;
    }

</style>