<template>
    <nav>
        <img class="logo" src="../assets/biosteam-logo.svg">
        <div class="navblock">
            <router-link class="navitems" v-for="item in items" :key="item.name" :to="item.link" exact="">{{item.name}}</router-link>
        </div>
    </nav>
</template>

<script>
export default {
    name: 'AppNavBar',
    data() {
        return { 
            items: [
                {name: 'Home', link: '/'},
                {name: 'Simulate', link: '/simulate'},
                {name: 'Resources', link: '/resources'},
            ]  
        }
    },
}
</script>

<style scoped>

    nav {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-left: 50px;
        padding-right: 50px;
    }

    img {
        height: 40px;
        padding: 15px;
    }

    .navitems {
        padding: 30px;
        color: #707070;
        text-decoration: none;
        font-size: 14pt;
        margin-left: 30px;
    }

    .router-link-active {
        color: #403A48;
    }

</style>