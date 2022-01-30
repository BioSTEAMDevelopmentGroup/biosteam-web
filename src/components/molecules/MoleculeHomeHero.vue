<template>
    <div class="flex justify-around items-center">
        <div class="flex flex-col justify-center items-center w-4/5">
            <div class="text-6xl font-extrabold pb-3 w-6/7">
                <span class="bg-clip-text text-transparent bg-gradient-to-r from-cdarkgreenblue to-cblue">
                    Fast and Robust
                     <br> Biorefinery Simulations
                </span>
            </div>
            <p class="text-cfontgrey text-xl pb-5 ">Powered by BioSTEAM: An open-source biorefinery modeling tool.</p>
            <div class="w-full flex justify-center">
                <atom-button :type="'scroll'" :element="$parent.$refs['startExplore']" class="w-1/2 bg-cgreenblue shadow-md text-white text-xl hover:shadow-lg" >Explore More</atom-button>
<!--              <button @click="scrollto()">inner</button>-->
            </div>
        </div>
        <div class="flex justify-center items-center w-1/2">
            <img class="w-full" src="@/assets/home/home-hero-logo.png" alt="biosteam logo">
        </div>
    </div>
</template>

<script>
import AtomButton from "@/components/atoms/AtomButton.vue";

export default {
    name: 'MoleculeHomeHero',
    // props: {
    //     startexplore: Object
    // },
    components: {
        AtomButton,
    },
  // data() {
  //     return {
  //       startexplore: HTMLAnchorElement
  //     }
  // },
  methods: {
    toRoute(link) {
      this.$router.push({path: link})
    },
    scrollto() {
      var el = this.$parent.$refs['startExplore'];
      //   // this.$forceUpdate()
      console.log(typeof el)
      var top = el.offsetTop;
      window.scrollTo({left: 0, top: top, behavior: 'smooth'});
    }
  }
}
</script>

