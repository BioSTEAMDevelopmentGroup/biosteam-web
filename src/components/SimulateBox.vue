<template>
    <div class="container">
        <div :class="type || 'grey'" class="box-1">
            <div :class="type || 'grey'" class="sticky-title">
                <h4><slot name="sticky-title">Set system parameters</slot></h4>
            </div>
            <div :class="type || 'grey'" class="parameters">
                <slot name="sidebar">sidebar content here</slot>
            </div>
        </div>
        <div class="box-2">
            <div class="main-content">
                <slot name="main-content">
                    main content here
                </slot>
            </div>            
        </div>
    </div>
</template>

<script>
export default {
    name: 'SimulateBox',
    props: {
        type: String,
    },
}
</script>

<style lang="scss" scoped>
    .container {
        display: flex;
        height: 85vh;
        background-color: white;
        border-radius: 5px;
        box-shadow: $shadow;
    }

    .box-1 {
        display: flex;
        flex-direction: column;  
        flex: 1;
        border-radius: 5px 0px 0px 5px;

        &.grey {
            background-color: $cabbi-grey;    
        }
        &.single {
            background-color: $cabbi-green-blue;    
        }
        &.uncertainty {
            background-color: $cabbi-yellow;    
        }
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
        &.grey {
            background-color: #707070;    
        }
        &.single {
            background-color: $cabbi-dark-green-blue;    
        }
        &.uncertainty {
            background-color: $cabbi-orange;    
        }
    }

    .parameters {
        padding: 20px;
        height: 100%;
        overflow-y: scroll;
    }
    ::-webkit-scrollbar {
        width: 3px;
    }
    .box-2 {
        flex: 2;
    }

    .main-content {
        height: 100%;
        width: 100%;
        overflow-y: scroll;
    }

</style>