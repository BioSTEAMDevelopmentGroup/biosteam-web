<template>
  <div>
<!--- Hero Banner ---> 
    <div class="home">
      <div class="background"></div>
      <div class="banner">
        <div class="banner-text">
          <h1>Welcome to BioSTEAM</h1>
          <p>BioSTEAM is a fast and flexible package for the design, simulation, and techno-economic analysis of biorefineries under uncertainty 1. BioSTEAM’s framework is built to streamline and automate early-stage technology evaluations and to enable rigorous sensitivity and uncertainty analyses.</p>
          <app-button type='home-hero'>Explore More</app-button>
        </div>
        <img class="banner-logo" src="../assets/home/home-hero-logo.png" alt="">
      </div>
    </div>

<!--- Info Cards ---> 
    <div class="info-cards">
      <div class="card" v-for="card in cards" :key="card.title">
        <home-card :link="card.link">
          <template #title>
            {{card.title}}
          </template>
          <template #content>
            {{card.content}}
          </template>        
        </home-card>
      </div>
    </div>

<!--- Simulation Feature Info ---> 
    <div class="sim-feature">
      <div class="section-1">
        <img class="circle-1" src="../assets/home/circle1.svg">
        <div class="container-1">          
          <img class="screenshot" src="../assets/home/screenshot1.png" >
          <div class="info-container">
            <h2>Single Point Simulation</h2>
            <p>Given user-input (or default) values for each parameter in a single scenario describing feedstock composition, biorefinery design and operation, and financial assumptions, a Techno-Economic Analysis (TEA) and a Life Cycle Impact Assessment (LCIA) estimate respectively the economic and environmental sustainability for that scenario.</p>
            <div>
              <app-button @click="toRoute('/simulate-single')" type="home-card">Start Now</app-button>
            </div>         
          </div>
        </div>              
      </div>  
      <div class= "section-2">
        <img class="circle-2" src="../assets/home/circle2.svg">
        <div class="container-2">
          <div class="info-container">
            <h2>Simulation with Uncertainty</h2>
            <p>Given user-input (or default) distributions of parameters describing feedstock composition, biorefinery design and operation, and financial assumptions, across the breadth of scenarios so generated, Techno-Economic Analyses (TEAs) and Life Cycle Impact Assessments (LCIAs) estimate respectively the economic and environmental sustainability with results represented as 95% confidence intervals.</p>
            <div>
              <app-button @click="toRoute('/simulate-uncertainty')" type="home-card">Start Now</app-button>        
            </div>
          </div>
          <img class="screenshot" src="../assets/home/screenshot2.png" >
        </div>        
      </div>
    </div>

<!--- Logos ---> 
    <div class="logos">
      <p>Affiliate logos will go here</p>
    </div>
  </div>
</template>


<script>
import AppButton from '@/components/AppButton.vue';
import HomeCard from '@/components/HomeCard.vue';

export default {
  name: 'Home',
  components: {
    'app-button': AppButton,
    'home-card': HomeCard,
  },
  data() {
    return{
      cards: [
        {title: 'About BioSTEAM', link: 'https://biosteam.readthedocs.io/en/latest/', content: 'orem ipsum d, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur '},
        {title: 'CABBI Bio', link: 'https://cabbi.bio/', content: 'The Center for Advanced Bioenergy and Bioproducts Innovation (CABBI) at the University of Illinois at Urbana-Champaign is a U.S. Department of Energy Bioenergy Research Center. CABBI aims to increase the value of energy crops and convert biomass into chemicals which are both ecologically and economically sustainable.'},
        {title: 'Bioenergy Research Centers', link: 'https://genomicscience.energy.gov/centers/', content: 'The Bioenergy Research Center (BRC) program is supported by DOE with a mission to break down the barriers to actualizing a domestic bioenergy industry. BRCs are led by DOE national laboratories or top universities to take distinctive approaches toward the common goal of accelerating the pathway to improving and scaling up advanced biofuel and bioproduct production processes.'},
      ]
    }
  },
  methods: {
    toRoute(link) {
      this.$router.push({path: link})
    }
  }
}
</script>

<style scoped lang="scss">

  .home {
    height: 75vh;
    padding-bottom: 25%; 
    top: -75px;
  }

  .background {
    position: absolute;
    background-image: url('../assets/home/home-hero-banner.svg');
    background-size: cover;
    height: 75vh;
    width: 100%;
    padding-bottom: 25%; 
    top: -75px;
    z-index: -10;
  }

  .banner {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 90%;
    
    padding: {
      top: 5%;
      left: 7%;
      right: 7%;
    }
  }

  .banner-text {
    max-width: 50%;
    h1 {
      color: $cabbi-dark;
      padding-bottom: 15px;
    }
    p{
      color: #707070;
      font-size: 12pt;
      padding-bottom: 25px;      
    }
  }

  .banner-logo {
    order: 2;
    max-width: 47%;
  }

  .info-cards{
    display: flex;
    justify-content: center;
    padding: 20px;
  }

  .card {
    display: flex;
    padding: 20px;
    padding-bottom: 100px;
    max-width: 25%;
  }

  .section-1 {
    position: relative;
  }

  .section-2 {
    position: relative;
  }

  .circle-1 {
    position: absolute;
    height: 700px;
    top: 0;
    left: -300px;
    z-index: -1;
  }

  .circle-2 {
    position: absolute;
    height: 700px;
    top: 0;
    right: -300px;
    z-index: -1;
  }

  .container-1 {
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 50px;
    padding-top: 200px;
    padding-bottom: 200px;
  }

  .container-2 {
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 50px;
    padding-top: 200px;
    padding-bottom: 200px;
  }

  .screenshot { 
    height: 350px;
    border-radius: 20px;
    box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.2);
  }

  .info-container {
    display: flex;
    flex-direction: column;
    height: 200px;
    justify-content: space-around;
    max-width: 55%;
    padding: 15px;
  }

  .logos {
    display: flex;
    justify-content: center;
    padding: 75px;
  }

  /* Styling for small screens */

@media screen and (max-width: $sm) {
    .home {
      height: 100vh;
    }
    
    .background{
      height: 100vh;
      padding-bottom:50%;
    }

    .banner {
      position: absolute;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: initial;
      padding-top: 150px;
      padding-bottom: 10%;
    }

    .banner-text {
      order: 1;
      min-width: 85%;
      padding-bottom: 50px;
    }
    
    .banner-logo {
      order: 2;
      min-width: 70%;
    }

    .info-cards {
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .card {
      min-width: 60%;
      padding: 20px;
    }

    .container-1 {
      display: flex;
      flex-direction: column;
      justify-content: space-around;   
    }

    .container-2 {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
    }

    .info-container {
      min-width: 90%;
      min-height: 30vh;
      padding-bottom: 10%;
    }

    .screenshot {
      height: 400px;
    }

    .screenshot {
      order: 2;
    }
}

@media screen and (max-width: $xs) {
  .background{
    height: 100vh;
    padding-bottom:70%;
  }

  .banner {
    padding-bottom: 0;
  }

  .info-cards{
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 50px;
    padding-top: 50px;
  }

  .card {
    padding-bottom: 25px;    
    min-width: 90%;
  }

  .screenshot{
    height: 250px;
  }

  .info-container{
    padding-bottom: 60px;
  }
}

</style>>
