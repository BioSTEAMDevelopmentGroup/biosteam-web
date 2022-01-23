<template>
  <div class="relative font-sans overflow-hidden" id="app">
    <div class="w-full h-14"></div>
    <molecule-nav-bar class="fixed top-0" :items="items"></molecule-nav-bar>
    <router-view/>
  </div>

</template>

<script>
import MoleculeNavBar from '@/components/molecules/MoleculeNavBar.vue';

export default {
  components: {
    MoleculeNavBar,
  },

  data () {
    return{ 
      items: [
        {name: 'Home', link: '/'},
        {name: 'About', link: '/resources'},
        {name: 'Publications', link: '/publications'},
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
