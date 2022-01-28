<template>
  <div>
<!--- Hero Banner ---> 
    <div class="w-full flex justify-center items-center bg-gradient-to-t from-cyellow to-clightblue" style="height: 80vh;">
      <molecule-home-hero class="w-11/12" ></molecule-home-hero>
<!--      <button @click="scrollto()">same</button>-->
    </div>

<!--- Info header --->
    <a ref="startExplore">
    <div  class="flex justify-center items-center">
      <atom-home-card-banner class=""></atom-home-card-banner>
    </div>
    </a>
<!-- Info cards -->
<!--    <div class="h-screen">-->
<!--      <div class="flex h-screen px-10 pb-10">-->
<!--        <div v-for="card in cards" :key="card.title" class="p-3 w-1/3 h-full flex items-center">-->
<!--          <molecule-home-card :link="card.link" class="h-5/6">-->
<!--            <template #title>-->
<!--              {{card.title}}-->
<!--            </template>-->
<!--            <template #content>-->
<!--              {{card.content}}-->
<!--            </template>-->
<!--          </molecule-home-card>-->
<!--        </div>-->
<!--      </div>-->
<!--    </div>-->

<!-- Home info -->
    <div class="relative z-10 bg-cblue flex flex-col justify-center items-center w-screen shadow-xl shadow-inner">
      <div class="absolute z-20 top-0 left-3/5 w-20 h-10" :style="{'background-image': `url(${require('@/assets/home/info-pulldown.svg')})`}"></div>
      <molecule-home-info class="relative z-10 h-1/2 w-full pt-12 px-8" :link="'/simulate/simulate-single'" direction="left" img="home/screenshot1.png">
          <template #title>Single-point simulation</template>
<!--          <template #description>Given user-input (or default) values for each parameter in a single scenario describing feedstock composition, biorefinery design and operation, and financial assumptions, a Techno-Economic Analysis (TEA) and a Life Cycle Impact Assessment (LCIA) estimate respectively the economic and environmental sustainability for that scenario.</template>-->
          <template #description>Simulate a biorefinery using custom assumptions on finance, design, operation, and performance. Critical economic and environmental sustainability indicators are evaluated through Techno-Economic Analysis (TEA) and a Life Cycle Impact Assessment (LCIA), respectively.</template>
      </molecule-home-info>
      <molecule-home-info class="relative z-10 h-1/2 w-full p-10" :link="'/simulate/simulate-uncertainty'" direction="right" img="home/screenshot2.png">
          <template #title>Simulation with uncertainty</template>
<!--          <template #description>Given user-input (or default) distributions of parameters describing feedstock composition, biorefinery design and operation, and financial assumptions, across the breadth of scenarios so generated, Techno-Economic Analyses (TEAs) and Life Cycle Impact Assessments (LCIAs) estimate respectively the economic and environmental sustainability with results represented as 95% confidence intervals.</template>  -->
          <template #description>Evaluate a biorefinery across a landscape of custom assumptions on finance, design, operation, and performance. TEA and LCA sustainability indicators are presented in the form of the median and 5th, 25th, 75th, and 95th percentiles.</template>
      </molecule-home-info>
    </div>

<!-- Read the docs -->
    <div class="relative z-10 bg-gradient-to-tr from-gray-300 flex justify-center items-center" style="height: 80vh;">
      <div class="absolute z-20 h-2/3 w-full bg-cover" :style="{'background-image': `url(${require('@/assets/home/docs-band.svg')})`}"></div>
      <molecule-to-docs class="z-30 h-1/2 w-1/2"></molecule-to-docs>
    </div>

<!-- Footer -->
    <atom-footer class=""></atom-footer>
  </div>
</template>


<script>
// import MoleculeHomeCard from '@/components/molecules/MoleculeHomeCard.vue';
import MoleculeHomeHero from '@/components/molecules/MoleculeHomeHero.vue';
import MoleculeHomeInfo from '@/components/molecules/MoleculeHomeInfo.vue';
import AtomHomeCardBanner from '@/components/atoms/AtomHomeCardBanner.vue';
import MoleculeToDocs from '@/components/molecules/MoleculeToDocs.vue';
import AtomFooter from '@/components/atoms/AtomFooter.vue';

export default {
  name: 'Home',
  components: {
    // MoleculeHomeCard,
    MoleculeHomeHero,
    MoleculeHomeInfo,
    AtomHomeCardBanner,
    MoleculeToDocs,
    AtomFooter,
  },
  data() {
    return{
      // cards: [
      //   {title: 'About BioSTEAM', link: 'https://biosteam.readthedocs.io/en/latest/', content: 'orem ipsum d, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur '},
      //   {title: 'CABBI Bio', link: 'https://cabbi.bio/', content: 'The Center for Advanced Bioenergy and Bioproducts Innovation (CABBI) at the University of Illinois at Urbana-Champaign is a U.S. Department of Energy Bioenergy Research Center. CABBI aims to increase the value of energy crops and convert biomass into chemicals which are both ecologically and economically sustainable.'},
      //   {title: 'Bioenergy Research Centers', link: 'https://genomicscience.energy.gov/centers/', content: 'The Bioenergy Research Center (BRC) program is supported by DOE with a mission to break down the barriers to actualizing a domestic bioenergy industry. BRCs are led by DOE national laboratories or top universities to take distinctive approaches toward the common goal of accelerating the pathway to improving and scaling up advanced biofuel and bioproduct production processes.'},
      // ]
    }
  },
  methods: {
    toRoute(link) {
      this.$router.push({path: link})
    },
    // scrollto() {
    //   console.log(typeof this.$refs["startExplore"])
    //   console.log(this.$refs["startExplore"])
    // }
  }
}
</script>

<style scoped lang="scss">

  // .home {
  //   height: 75vh;
  //   padding-bottom: 25%; 
  //   top: -75px;
  // }

  // .background {
  //   position: absolute;
  //   background-image: url('../assets/home/home-hero-banner.svg');
  //   background-size: cover;
  //   height: 75vh;
  //   width: 100%;
  //   padding-bottom: 25%; 
  //   top: -75px;
  //   z-index: -10;
  // }

  // .banner {
  //   display: flex;
  //   justify-content: space-between;
  //   align-items: center;
  //   height: 90%;
    
  //   padding: {
  //     top: 5%;
  //     left: 7%;
  //     right: 7%;
  //   }
  // }

  // .banner-text {
  //   max-width: 50%;
  //   h1 {
  //     color: $cabbi-dark;
  //     padding-bottom: 15px;
  //   }
  //   p{
  //     color: #707070;
  //     font-size: 12pt;
  //     padding-bottom: 25px;      
  //   }
  // }

  // .banner-logo {
  //   order: 2;
  //   max-width: 47%;
  // }

  // .info-cards{
  //   display: flex;
  //   justify-content: center;
  //   padding: 20px;
  // }

  // .card {
  //   display: flex;
  //   padding: 20px;
  //   padding-bottom: 100px;
  //   max-width: 25%;
  // }

  // .section-1 {
  //   position: relative;
  // }

  // .section-2 {
  //   position: relative;
  // }

  // .circle-1 {
  //   position: absolute;
  //   height: 700px;
  //   top: 0;
  //   left: -300px;
  //   z-index: -1;
  // }

  // .circle-2 {
  //   position: absolute;
  //   height: 700px;
  //   top: 0;
  //   right: -300px;
  //   z-index: -1;
  // }

  // .container-1 {
  //   display: flex;
  //   align-items: center;
  //   justify-content: space-around;
  //   padding: 50px;
  //   padding-top: 200px;
  //   padding-bottom: 200px;
  // }

  // .container-2 {
  //   display: flex;
  //   align-items: center;
  //   justify-content: space-around;
  //   padding: 50px;
  //   padding-top: 200px;
  //   padding-bottom: 200px;
  // }

  // .screenshot { 
  //   height: 350px;
  //   border-radius: 20px;
  //   box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.2);
  // }

//   .info-container {
//     display: flex;
//     flex-direction: column;
//     height: 200px;
//     justify-content: space-around;
//     max-width: 55%;
//     padding: 15px;
//   }

//   .logos {
//     display: flex;
//     justify-content: center;
//     padding: 75px;
//   }

//   /* Styling for small screens */

// @media screen and (max-width: $sm) {
//     .home {
//       height: 100vh;
//     }
    
//     .background{
//       height: 100vh;
//       padding-bottom:50%;
//     }

//     .banner {
//       position: absolute;
//       display: flex;
//       flex-direction: column;
//       align-items: center;
//       justify-content: initial;
//       padding-top: 150px;
//       padding-bottom: 10%;
//     }

//     .banner-text {
//       order: 1;
//       min-width: 85%;
//       padding-bottom: 50px;
//     }
    
//     .banner-logo {
//       order: 2;
//       min-width: 70%;
//     }

//     .info-cards {
//       display: flex;
//       flex-direction: column;
//       align-items: center;
//     }

//     .card {
//       min-width: 60%;
//       padding: 20px;
//     }

//     .container-1 {
//       display: flex;
//       flex-direction: column;
//       justify-content: space-around;   
//     }

//     .container-2 {
//       display: flex;
//       flex-direction: column;
//       justify-content: space-around;
//     }

//     .info-container {
//       min-width: 90%;
//       min-height: 30vh;
//       padding-bottom: 10%;
//     }

//     .screenshot {
//       height: 400px;
//     }

//     .screenshot {
//       order: 2;
//     }
// }

// @media screen and (max-width: $xs) {
//   .background{
//     height: 100vh;
//     padding-bottom:70%;
//   }

//   .banner {
//     padding-bottom: 0;
//   }

//   .info-cards{
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     padding-bottom: 50px;
//     padding-top: 50px;
//   }

//   .card {
//     padding-bottom: 25px;    
//     min-width: 90%;
//   }

//   .screenshot{
//     height: 250px;
//   }

//   .info-container{
//     padding-bottom: 60px;
//   }
// }

</style>>
