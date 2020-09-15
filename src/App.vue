<template>
  <div id="app">
    <app-nav-bar v-model="navToggle" :items="items"></app-nav-bar>
    <router-view/>
    <app-footer></app-footer>
  </div>
</template>

<script>
import AppNavBar from '@/components/AppNavBar.vue';
import AppFooter from '@/components/AppFooter.vue';

export default {
  components: {
    AppNavBar,
    AppFooter,
  },

  data () {
    return{ 
      items: [
        {name: 'Home', link: '/'},
        {name: 'Simulate', link: '/simulate'},
        {name: 'Resources', link: '/resources'},
      ],
      navToggle: false,
    }
  },
}
</script>


<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400&display=swap');

#app {
  font-family: 'Montserrat', sans-serif; 
  font-weight: 400;
  color: #2c3e50;
}
</style>
