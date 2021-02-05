<template>
  <div class="font-sans overflow-hidden" id="app">
    <molecule-nav-bar :items="items"></molecule-nav-bar>
    <router-view/>
    <atom-footer class="h-20 flex justify-center items-center bg-clightblue"></atom-footer>
  </div>
</template>

<script>
import MoleculeNavBar from '@/components/molecules/MoleculeNavBar.vue';
import AtomFooter from '@/components/atoms/AtomFooter.vue';

export default {
  components: {
    MoleculeNavBar,
    AtomFooter,
  },

  data () {
    return{ 
      items: [
        {name: 'Home', link: '/home'},
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
