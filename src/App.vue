<template>
  <div class="font-sans overflow-hidden" id="app">
    <molecule-nav-bar :items="items"></molecule-nav-bar>
    <router-view/>
    <app-footer></app-footer>
  </div>
</template>

<script>
import MoleculeNavBar from '@/components/molecules/MoleculeNavBar.vue';
import AppFooter from '@/components/AppFooter.vue';

export default {
  components: {
    AppFooter,
    MoleculeNavBar,
  },

  data () {
    return{ 
      items: [
        {name: 'Home', link: '/'},
        {name: 'About', link: '/resources'},
        {name: 'Docs', link: '/docs'},
        {name: 'Simulate', link: '/simulate'},
      ],
      navToggle: false,
    }
  },
}
</script>


<style lang="scss">
// @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400&display=swap');

// #app {
//   font-family: 'Montserrat', sans-serif; 
//   font-weight: 400;
//   color: $cabbi-dark;
//   overflow: hidden;
// }
</style>
