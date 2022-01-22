<template>
  <div>
    <!-- Top Banner -->
    <div class="banner relative bg-cdarkgreenblue justify-center items-center">
      <atom-pubs-banner></atom-pubs-banner>

    </div>

    <!-- Info cards -->
    <div class="info bg-gray-200 flex justify-center items-center" >
      <pubs-card :cards="cards" class="w-5/6"></pubs-card>
    </div>

    <!-- App footer -->
    <div>
      <atom-footer class="h-40 flex justify-center items-center bg-clightblue"></atom-footer>
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
import AtomPubsBanner from "@/components/atoms/AtomPubsBanner.vue";
//import OrganismAboutCards from "@/components/organisms/OrganismAboutCards.vue";
import AtomFooter from "@/components/atoms/AtomFooter.vue";
import PubsCard from "@/components/PubsCard";

export default {
  name: 'About',
  components: {
    AtomPubsBanner,
    PubsCard,
    //OrganismAboutCards,
    AtomFooter,
  },
  data() {
    return{
      cards: [
        {title: 'Sustainable Production of Acrylic Acid via 3-Hydroxypropionic Acid from Lignocellulosic Biomass', logo: 'journal-pubs2.png', button1: 'Read the Paper', link1: 'https://pubs.acs.org/doi/full/10.1021/acssuschemeng.1c05441', button2: 'Get the source code', link2: 'https://github.com/BioSTEAMDevelopmentGroup/Bioindustrial-Park/tree/master/BioSTEAM%202.x.x/biorefineries/HP', description: 'Sustainable design of lignocellulosic 3-hydroxypropionic acid biorefineries producing acrylic acid, with agile techno-economic analysis and life cycle assessment under uncertainty..', citation: 'Bhagwat, S. S.; Li, Y.; Cortés-Peña, Y. R.; Brace, E. C.; Martin, T. A.; Zhao, H.; Guest, J. S. ACS Sustainable Chem. Eng. 2021, 9 (49), 16659–16669.', journal: 'journal-sus.png'},
        {title: 'Renewable Linear Alpha-Olefins by Base-Catalyzed Dehydration of Biologically-Derived Fatty Alcohols', logo: 'journal-pubs3.png', button1: 'Read the Paper', link1: 'https://pubs.rsc.org/en/content/articlelanding/2021/gc/d1gc00243k', button2: 'Get the source code', link2: 'https://github.com/BioSTEAMDevelopmentGroup/Bioindustrial-Park/tree/master/BioSTEAM%202.x.x/biorefineries/LAOs',description: 'The two-step production of linear alpha olefins through the coupling of fermentation and catalytic dehydration was demonstrated experimentally and evaluated with a techno-economic analysis.', citation: 'McClelland, D. J.; Wang, B.-X.; Cordell, W. T.; Cortes-Peña, Y. R.; Gilcher, E. B.; Zhang, L.; Guest, J. S.; Pfleger, B. F.; Huber, G. W.; Dumesic, J. A. Green Chem. 2021, 23 (12), 4338–4354.', journal: 'green.png'},
        {title: 'Sustainable Lactic Acid Production from Lignocellulosic Biomass', logo: 'temp.png', button1: 'Read the Paper', button2: 'Get the source code', link1:'https://pubs.acs.org/doi/full/10.1021/acssuschemeng.0c08055',link2: 'https://github.com/BioSTEAMDevelopmentGroup/Bioindustrial-Park/tree/master/BioSTEAM%202.x.x/biorefineries/lactic', description: 'Sustainable design of lignocellulosic biorefineries for lactic acid production with agile technoeconomicanalysis and life cycle assesment under uncertainity', citation: 'Li, Y.; Bhagwat, S. S.; Cortés-Peña, Y. R.; Ki, D.; Rao, C. V.; Jin, Y.-S.; Guest, J. S. Sustainable Lactic Acid Production from Lignocellulosic Biomass. ACS Sustainable Chem. Eng. 2021, 9 (3), 1341–1351.', journal: 'journal-sus.png'},
        {title: 'BioSTEAM-LCA: An Integrated Modeling Framework for Agile Life Cycle Assessment of Biorefineries under Uncertainty', logo: 'journal-pubs4.png', button1: 'Read the Paper', link1: 'https://pubs.acs.org/doi/abs/10.1021/acssuschemeng.0c05998',button2: 'Get the source code', link2: 'https://github.com/scyjth/biosteam_lca', description: 'BioSTEAM-LCA is an open-source simulation platform for agile LCA-TEA of biorefineries to quantify and navigate trade-offs across dimensions (functional performance, economic, environmental) of sustainability.', citation: 'Shi, R.; Guest, J. S. ACS Sustainable Chem. Eng. 2020, 8 (51), 18903–18914.', journal: 'journal-sus.png'},
        {title: 'Thermosteam: BioSTEAM\'s Premier Thermodynamic Engine', logo: 'temp.png', button1: 'Read the Paper', link1: 'https://joss.theoj.org/papers/10.21105/joss.02814', button2: 'Get the source code', link2: 'https://github.com/BioSTEAMDevelopmentGroup/thermosteam', description: 'Thermosteam is a thermodynamic engine capable of solving mass and energy balances, estimating mixture properties, solving thermodynamic phase equilibria, and modeling stoichiometric reactions.', citation: 'Cortés-Peña, Y. Journal of Open Source Software. 2020, 5 (56), 2814.', journal: 'joss.png'},
        {title: 'BioSTEAM: A Fast and Flexible Platform for the Design, Simulation, and Techno-Economic Analysis of Biorefineries under Uncertainty', logo: 'biosteam.png', button1: 'Read the Paper', link1: 'https://pubs.acs.org/doi/full/10.1021/acssuschemeng.9b07040', button2: "Get the source code", link2: 'https://github.com/biosteamdevelopmentgroup/biosteam', description: 'BioSTEAM integrates uncertainty into process simulation and economic analysis, enabling researchers to evaluate emerging technologies and prioritize pathways to a sustainable bioeconomy.', citation: 'Cortés-Peña, Y.; Kumar, D.; Singh, V.; Guest, J. S. ACS Sustainable Chem. Eng. 2020, 8 (8), 3302–3310.',journal: 'journal-sus.png'}

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
  width: 20%;
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


