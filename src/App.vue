<template>
  <div id="app">
    <router-view/>
    <AppFooter></AppFooter>
  </div>
</template>

<script>
//import AppNavBar from '@/components/AppNavBar.vue';
import AppFooter from '@/components/AppFooter.vue';

export default {
  components: {
    //'AppNavBar': AppNavBar,
    'AppFooter': AppFooter
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
