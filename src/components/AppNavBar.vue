<template>
    <nav :class="{'color-nav': $route.path !== '/' || this.toggled === true}">
        <div class="large">
            <img class="logo" src="../assets/biosteam-logo.svg">
            <ul>
                <li v-for="item in items" :key="item.name">
                    <router-link class="router-link" :to="item.link" exact>{{item.name}}</router-link>
                </li>
            </ul>
            <font-awesome-icon :rotation="rotate" size="2x" class="nav-toggle" icon="bars" @click="toggle"/>        
        </div>
        <div v-if="this.toggled === true" class="small">
            <ul>
                <li v-for="item in items" :key="item.name">
                    <router-link @click.native="toggle" class="router-link" :to="item.link" exact>{{item.name}}</router-link>
                </li>
            </ul>        
        </div>
    </nav>
</template>

<script>
export default {
    name: 'AppNavBar',
    model: {
        prop: "toggled",
        event: "toggle",
    },
    data() {
        return{
            rotate: 0,
        }
    },
    props: ['items', 'toggled'],
    methods: {
        toggle() {
            this.$emit("toggle", !this.toggled)
            if(this.toggled == true) {
                this.rotate = 0
            }
            else{
                this.rotate = 90
            }
        },
    },
}
</script>

<style lang="scss" scoped>

    .color-nav {
        background-color: #B2E0E5;
    }

    .large {
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

    ul {
        list-style-type: none;
        display: flex;
    }

    li {
        padding: 25px;
        font-size: 14pt;
    }

    .router-link {
        text-decoration: none;
        color: #707070;
    }

    .router-link-active {
        color: #403A48;
    }

    .nav-toggle {
        display: none;
    }

    .small {
        display: none;
    }

    @media screen and (max-width: 768px) {

    .small {
        display: flex;
    }

    .nav-toggle {
        cursor: pointer;
        display: inline-block;

        &:hover{
            color: white;   
        }
    }

    .large ul {
        display: none;
    }

    .small ul {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        padding: 0;
        margin: 0;

        border-top: 1px #E1DEDA solid;
    }

    .small li {
        width: 100%;
        text-align: center;
        padding-top: 10px;
        padding-bottom: 10px;
    }

    .small li:hover {
        background-color: #82CFD0;
    }
    }

</style>