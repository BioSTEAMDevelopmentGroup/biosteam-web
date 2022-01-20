<template>
  <div>
<!-- Top Banner -->
    <div class="banner relative justify-center items-center">
      <atom-about-banner></atom-about-banner>

    </div>

<!-- Info cards -->
    <div class="info bg-gray-200 flex justify-center items-center " >
      <organism-about-cards :cards="cards" class="w-5/6"></organism-about-cards> 
    </div>

<!-- App footer -->
    <div>
      <atom-footer class=""></atom-footer>
    </div>
  </div>

  <!-- <div class="resources">
    <div class="banner">
      <img src="../assets/resources/about-hero-banner.png" class="banner-image">
      <div class="banner-card">
        <h1>Get the most out of BioSTEAM</h1>
        <p>With the fully featured Python package</p>
        <app-button @click="toLink" type="resources-hero">Explore the docs</app-button>
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
        <resources-card :link="card.link">
          <img slot="logo" :src="require('../assets/resources/'+ card.logo)">
          <template slot="title">{{card.title}}</template>
          <template slot="text">{{card.text}}</template>
          <template slot="button">{{card.button}}</template>
        </resources-card>
      </div>
    </div>
  </div> -->
</template>

<script>
// import AppButton from '@/components/AppButton.vue';
// import ResourcesCard from '@/components/ResourcesCard.vue';
import AtomAboutBanner from "@/components/atoms/AtomAboutBanner.vue";
import OrganismAboutCards from "@/components/organisms/OrganismAboutCards.vue";
import AtomFooter from "@/components/atoms/AtomFooter.vue";

export default {
  name: 'About',
  components: {
    AtomAboutBanner,
    OrganismAboutCards,
    AtomFooter,
  },
  data() {
    return{
      cards: [
        {title: 'BioSTEAM Ecosystem', logo: 'logo-BioSTEAM.svg', button: 'Visit BioSTEAM Development Group', link: 'http://github.com/bioSTEAMDevelopmentGroup/', description: 'asdfghujkl;Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea '},
        {title: 'Guest Research Group', logo: 'logo-guest-group.png', button: 'Visit Guest Research Group', link: 'http://engineeringforsustainability.com/', description: 'The Guest Research Group at the University of Illinois at Urbana-Champaign specializes in the development of sustainable infrastructure. We are in the Sustainability Theme of CABBI and we leverage the BioSTEAM platform for techno-economic analysis (TEA) and life cycle assessment (LCA) to chart innovation pathways for sustainable biofuels and bioproducts.'},
        {title: 'CABBI', logo: 'logo-CABBI.png', button: 'Visit CABBI', link: 'https://cabbi.bio', description: 'The Center for Advanced Bioenergy and Bioproducts Innovation (CABBI) is a U.S. Department of Energy-funded Bioenergy Research Center led by the University of Illinois at Urbana-Champaign. CABBI integrates recent advances in agronomics, genomics, biosystems design, and computational biology to increase the value of energy crops, using a “plants as factories” approach to grow fuels and chemicals in plant stems and an automated foundry to convert biomass into valuable chemicals that are ecologically and economically sustainable.'},
        // {title: 'On GitHub', logo: 'logo-github.svg', button: 'Go to GitHub', link: 'https://github.com/BioSTEAMDevelopmentGroup', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea '},
      ]
    }
  },
  methods: {
    toLink() {
      window.open('https://biosteam.readthedocs.io/en/latest/')
    }
  }
}
</script>

<style lang="scss" scoped>

.banner{
  //position: relative;
  //display: flex;
  //align-items: center;
  //justify-content: center;
  //height: 75vh;
  //margin-bottom: 200px;
}

.info {
  padding: 5vh;
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
  //background-color: rgba(255, 255, 255, 0.9);
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
  width: 80%;
  padding: {
    bottom: 40px;
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
