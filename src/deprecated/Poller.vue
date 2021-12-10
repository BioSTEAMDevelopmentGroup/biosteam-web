<template>
    <div class="poller">
        <button @click="countDown(10)">click me</button>
        <button @click="changePoll()">activate cat</button>
        <p>{{poll}}</p>
    </div>
</template>

<script>
export default {
    name: 'Poller',
    data() {
        return {
            poll: 'dog',
            interval: 3000,
            refresh_timer: null,
        }
    },
    methods: {
        changePoll() {
            this.poll = 'cat'
        },
        countDown(value) {
            console.log(value);
            if(this.poll == 'cat' || value == 0) {
                return value;
            } else {
                return setTimeout(() => {this.countDown(value-1)}, 3000);
            }
        }
    }

}
</script>

<style lang="scss" scoped>
 .poller {
     display: flex;
     justify-content: space-evenly;
     align-items: center;
     background-color: white;
     border-radius: 5px;
     padding: 10px;
 }
</style>
