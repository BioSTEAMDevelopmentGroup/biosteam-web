<template>
  <div class="resources">
    <div class="banner">
      <img src="../assets/resources/resources-hero-banner.png" class="banner-image">
      <div class="banner-card">
        <h1>Get the most out of BioSTEAM</h1>
        <p>With the fully featured Python package</p>
        <app-button type="resources-hero">Explore the docs</app-button>
      </div>
    </div>
    <div class="install">
      <div class="command">
        <p>pip install biosteam</p>
        <font-awesome-icon :icon="['far', 'clone']" size="lg" style="color: #707070;"/>
      </div>
    </div>
    <div class="cards">
      <div class="card" v-for="card in cards" :key="card.title">
        <resources-card>
          <img slot="logo" :src="require('../assets/resources/'+ card.logo)">
          <template slot="title">{{card.title}}</template>
          <template slot="text">{{card.text}}</template>
          <template slot="button">{{card.button}}</template>
        </resources-card>
      </div>
    </div>
  </div>
</template>

<script>
import AppButton from '@/components/AppButton.vue';
import ResourcesCard from '@/components/ResourcesCard.vue';

export default {
  name: 'Resources',
  components: {
    AppButton,
    ResourcesCard,
  },
  data() {
    return{
      cards: [
        {title: 'In Publication', logo: 'logo-ACS.png', button: 'See Article', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea '},
        {title: 'Guest Research Group', logo: 'logo-guest-group.png', button: 'Visit Site', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea '},
        {title: 'CABBI Bio', logo: 'logo-CABBI.png', button: 'Visit Site', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea '},
        {title: 'On GitHub', logo: 'logo-github.svg', button: 'Go to GitHub', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea '},
      ]
    }
  }
}
</script>

<style lang="scss" scoped>

.banner{
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center; 
  height: 75vh;
}

.banner-image{
  position: absolute;
  height: 150%;
  z-index: -1;
}

img.banner-image{
  opacity: 0.60;
}

.banner-card{
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.9);
  border-radius: 10px;
  box-shadow: $shadow;
  padding: 40px;

  h1{
    padding: {
      bottom: 20px;
    }    
  }
  p{
    color: #707070;
    padding: {
      bottom: 30px;
    }    
  }    
}

.install{
  display: flex;
  align-items: center;
  justify-content: center; 
  background-color: white;
  height: 20vh;
}

.command{
  display: flex;
  justify-content: center; 
  align-items: center;
  background-color: $cabbi-grey;
  border-radius: 900px;
  box-shadow: $shadow;
  padding: {
    top: 20px;
    bottom: 20px;
    left: 30px;
    right: 30px;
  }

  p{
    padding-right: 40px;
    font-size: 14pt;
    font-family: "Courier New", monospace; 
  }
}

.cards{
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: stretch;
  background-color: $cabbi-light-blue;
  padding: {
    top: 20vh;
    bottom: 20vh;
    left: 30px;
    right: 30px;
  }
}

.card{
  width: 48%;
  padding: {
    bottom: 2%;
    left: 1%;
    right: 1%;
  }
}

@media screen and (max-width: $md) {
//bootstraps md breakpoint// 
  .card {
    width: 75%;
  }
}

@media screen and (max-width: $xs) {
//bootstraps sm breakpoint// 
  .banner-card{
    max-width: 70%;
    h1 {
      text-align: center;
    }
    p {
      text-align: center;
    }
  }
  
  .card{
    width: 100%;
    padding-bottom: 40px;
  }
}

</style>