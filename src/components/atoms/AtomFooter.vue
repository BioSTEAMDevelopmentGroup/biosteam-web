<template>
  <div class=" flex justify-center items-center bg-clightblue">
    <div class="pt-10">
      <div class="flex items-center justify-evenly text-cfontgrey text-lg">
        <!--        <div>-->
        <!--            <p>Email - jsguest@illinois.edu</p>-->
        <!--            <p>Twitter - @CABBIbio</p>-->
        <!--        </div>-->
        <!--        <div>-->
        <!--            <p>BioSTEAM Github</p>-->
        <!--            <p>BioSTEAM Docs</p>-->
        <!--            <p>BioSTEAM Citation</p>-->
        <!--        </div>-->
        <!--        <div>-->
        <!--          <p>© 2021 All Rights Reserved</p>-->
        <!--        </div>-->
        <div class="w-1/4">
          <a href="https://engineeringforsustainability.com/" target="_blank">
            <img src="../../assets/footer/guest_logo.png" alt="Guest Research Group Logo">
          </a>
        </div>
        <div class="flex w-1/4 pt-6 justify-center">
          <a href="https://cabbi.bio/" target="_blank" class="justify-center">
            <img style="height: 6rem;" src="../../assets/footer/cabbi_logo.png" alt="CABBI Logo">
          </a>
        </div>
        <div class="w-1/4">
          <a href="https://illinois.edu/" target="_blank">
            <img src="../../assets/footer/illinois_logo.png" alt="University of Illinois Logo">
          </a>
        </div>
      </div>

      <div class="flex items-center justify-center text-cfontgrey text-lg m-8" style="width: 100%">
        <div class=" flex justify-center items-center">
          <div class="px-8">
            <a href="mailto:biosteamdevelopmentgroup@gmail.com" target="_blank">
              <font-awesome-icon icon="envelope" class="fa-lg"></font-awesome-icon>
            </a>
<!--            Email-->
          </div>
          <div class="px-8">
            <a href="https://github.com/bioSTEAMDevelopmentGroup/biosteam/" target="_blank">
              <font-awesome-icon :icon="['fab', 'github-square']" class="fa-lg"></font-awesome-icon>
            </a>
<!--            GitHub-->
          </div>
          <div class="px-8">
            <a href="https://biosteam.readthedocs.io/en/latest/" target="_blank">
              <font-awesome-icon :icon="['fas', 'file-alt']" class="fa-lg"></font-awesome-icon>
            </a>
<!--            Docs-->
          </div>


        </div>
<!--        <div class="w-1/6 flex justify-center items-center">-->
<!--          <a href="https://github.com/bioSTEAMDevelopmentGroup/biosteam/" target="_blank">-->
<!--            <font-awesome-icon :icon="['fab', 'github-square']" class="fa-2x"></font-awesome-icon>-->
<!--          </a>-->
<!--        </div>-->
<!--        <div class="w-1/6 flex justify-center items-center">-->
<!--          <a href="https://biosteam.readthedocs.io/en/latest/" target="_blank">-->
<!--            <font-awesome-icon :icon="['fas', 'file-alt']" class="fa-2x"></font-awesome-icon>-->
<!--          </a>-->
<!--        </div>-->
      </div>

    </div>

  </div>
</template>

<script>
export default {
  name: 'AtomFooter',
  data() {
    return {}
  }
}
</script>

<style scoped>
p {
  @apply cursor-pointer;
}

p:hover {
  @apply text-cdark;
}
</style>
