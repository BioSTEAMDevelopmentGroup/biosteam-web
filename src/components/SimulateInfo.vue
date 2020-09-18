<template>
    <div class="container">
        <h2 class="title">How to use the BioSTEAM app</h2>
        <div class="content">
            <h2 class="green">Single point simulation</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur quis distinctio porro earum aperiam eius, excepturi eos assumenda dignissimos vitae voluptatibus, soluta reprehenderit ducimus iure. Quod reiciendis dolorum maxime excepturi.</p>
            <h2 class="orange">Simulation with uncertainty</h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam beatae laudantium aperiam, placeat magnam dolorum impedit nobis harum error cupiditate quasi quas culpa ex aliquam et praesentium dolor minima earum.</p>            
        </div>
    </div>
</template>

<script>
export default {
    name: 'SimulateInfo',
}
</script>

<style lang="scss" scoped>
    .container {
        background-color: white;
        border-radius: 5px;
        box-shadow: $shadow;
    }

    .title {
        background-color: $cabbi-grey;
        color: #707070;
        border-radius: 5px 5px 0px 0px;
        padding: 15px;
    }

    .content {
        padding: {
            top: 25px;
            bottom: 10px;
            left: 15px;
            right: 15px;
        }
    }

    .green {
        color: $cabbi-dark-green-blue;
    }

    .orange {
        color: $cabbi-orange;
    }

    p {
        color: #707070;
        padding: {
            left: 30px;
            top: 15px;
            bottom: 30px;
        }
    }
</style>