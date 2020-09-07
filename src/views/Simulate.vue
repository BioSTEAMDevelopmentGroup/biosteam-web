<template>
  <div class="simulate">
    <AppNavBar></AppNavBar>
    <div class="container">
      <p>this is the entrypoint sim tab</p>
      <button>this is a button</button>
    </div>
  </div>
</template>

<script>
import AppNavBar from '@/components/AppNavBar.vue';

export default {
  name: 'Simulate',
  components: {
    'AppNavBar': AppNavBar
  }
}
</script>

<style scoped> 

  .simulate {
    padding: 0px;
    margin: 0px;
    background-color: #B2E0E5;
    background-size: cover;
    height: 100vh;
  }

  button {
    padding-top: 700px;
  }

</style>