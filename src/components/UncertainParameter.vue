<template>
  <div class="uncertain-parameter">
      <div class="check-box" @click="handleCheck()">
        <font-awesome-icon icon="square" :class="{ checked: isChecked, unchecked: (isChecked == false) }"/>
      </div>
      <div class="parameter-box">
          <div class="title-box">
              <slot name="name">Lipid content [dry wt. %]</slot>
          </div>
          <div class="input-box">
              <div class="distribution-dropdown">
                <div class="distribution-box" @click="handleOpen()">
                    <font-awesome-icon icon="chart-area"/>
                    <p>{{selectedDistribution}}</p> 
                    <font-awesome-icon icon="caret-down"/>
                </div> 
                <div v-if="isOpen" class="distribution-options">
                    <div class="distribution-option" v-for="distribution in distributions" :key="distribution.name" @click="selectDistribution(distribution)">
                        <p>{{distribution.name}}</p>
                    </div>
                </div>      
              </div>
              <div class="value-box">
                <font-awesome-icon icon="calculator"/>
                <form class="distribution-values">
                    <p>(</p>
                    <input :value="value[0]"  @input="updateArray(value)" type="number" placeholder="0">
                    <input :value="value[1]"  @input="updateArray(value)" type="number" placeholder="0">
                    <input :value="value[2]"  @input="updateArray(value)" type="number" placeholder="0">
                    <p>)</p>
                </form> 
              </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    name: 'UncertainParameter',
    props: {
        value: Array, 
        selectedDistribution: String, 
    },
    data() {
        return{
            distributions: [
                {name: '---'}, 
                {name: 'Triangular'}, 
                {name: 'Uniform'},
            ],
            isOpen: false, 
            isChecked: false, 
            distributionValues: [0, 0, 0],
        }
    },
    methods: {
        handleCheck() { 
            this.isChecked = !this.isChecked
        },

        selectDistribution(distribution) {
            this.selectedDistribution = distribution.name
            this.isOpen = !this.isOpen
        },

        handleOpen() { 
            this.isOpen = !this.isOpen
        },

        updateArray(value) {
            if( name == 'value1'){
               console.log(value) 
            }          
        }
    },
}
</script>

<style scoped lang="scss">
    .uncertain-parameter {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .check-box {
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: $cabbi-orange;
        height: 20px;
        width: 20px;
    }
    .checked {
        color: $cabbi-dark;
    }
    .unchecked {
        color: $cabbi-orange;
    }
    .parameter-box {
        display: flex;
        flex-direction: column;
        width: 300px;
    }
    .title-box {
        background-color: $cabbi-orange;
        padding: {
            right: 10px;
            left: 10px;
            top: 5px;
            bottom: 5px;
        }
    }
    .input-box {
        display: flex;
        width: 100%;
    }
    .distribution-dropdown {
        position: relative;
        width: 65%;
        background-color: #FCCA31;
        border: 2px $cabbi-orange solid;
    }
    .distribution-box {
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: space-between;
        background-color: #FCCA31;     
        padding: {
            right: 10px;
            left: 10px;
            top: 5px;
            bottom: 5px;
        }
    }
    .distribution-options {
        position: absolute;
        z-index: 1000;
        width: 100%;
    }
    .distribution-option {
        cursor: pointer;
        background-color: rgba(255, 255, 255, 0.9);
        text-align: center;
        &:hover {
            background-color: #E3B72D;
        }
    }
    .value-box {
        width: 35%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        background-color: #FCCA31;
        border: 2px $cabbi-orange solid;      
        padding: {
            right: 10px;
            left: 10px;
            top: 5px;
            bottom: 5px;
        }
    }
    .distribution-values {
        display: flex;
        width: 100px;
    }
    input {
        width: 25px;
        text-align: center;
        background-color: rgba(255, 255, 255, 0.6);
        border: none;
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