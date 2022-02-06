<template>
    <div class="relative z-0 w-screen bg-gray-50 overflow-hidden" style="height: calc(100vh - 56px);">
<!-- Sidebar -->
        <div class="absolute left-0 z-10 w-1/4 h-full bg-gray-200 overflow-y-scroll flex justify-center">
            <organism-docs-sidebar :docsList="docs" @set_img="set_img" class="px-2"></organism-docs-sidebar>
        </div>

<!-- Main Content -->
        <div v-if="!current_img" class="absolute right-0 w-3/4 h-full overflow-y-scroll flex justify-center items-center">
            <h1  class="text-cfontgrey text-center text-3xl">Select link on side panel to learn how to start simulating!</h1>
        </div>
        <div v-else class="absolute right-0 w-3/4 h-full overflow-y-scroll flex justify-center items-center flex-col">
            <img class="w-5/6" :src="require('@/assets/docs/images/' + current_img + '')" alt="alt">
            <div class="pt-5">
              <atom-button :type="'parentDef'" @click="prev_img()" class=" h-1/1 bg-cgreenblue shadow-md text-white text-xl hover:shadow-lg mx-20" :disabled="current_num === 0">Prev</atom-button>
              <atom-button :type="'parentDef'" @click="next_img()" class=" h-1/1 bg-cgreenblue shadow-md text-white text-xl hover:shadow-lg mx-20" :disabled="current_num === 20">Next</atom-button>
            </div>
        </div>
    </div>
</template>

<script>
// import AtomButton from "@/components/atoms/AtomButton.vue";
// import MoleculeHomeCard from "@/components/molecules/MoleculeHomeCard.vue";
import docsList from "@/assets/docs/docsList.json";
import OrganismDocsSidebar from "@/components/organisms/OrganismDocsSidebar.vue";
import AtomButton from "@/components/atoms/AtomButton";

export default {
    name: 'Docs',
    components: {
      AtomButton,
        // AtomButton,
        // MoleculeHomeCard,
        OrganismDocsSidebar,
    },
    data() {
        return {
            docs: docsList.docs,
            current_img: null,
            current_num: -1
        }
    },
    methods: {
      set_img(img) {
        console.log(img)
        this.current_img = img.img
        this.current_num = img.num
        console.log(this.current_img.img)
      },
      next_img() {
        this.current_num = this.current_num + 1
        this.current_img = docsList.slides[this.current_num]
      },
      prev_img() {
        this.current_num = this.current_num - 1
        this.current_img = docsList.slides[this.current_num]
      }
    }

}
</script>

<style scoped>
</style>
