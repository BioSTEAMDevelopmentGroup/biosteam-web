<template>
  <div class="bg-white-100 bg-opacity-80 shadow-lg rounded-md ">
    <div class="relative z-10  bg-white-400 flex flex-col shadow-md" >
      <h1 class="text-cdark text-3xl  p-5" style="padding-bottom: 1em"><slot name="title">Card Title</slot></h1>
      <div class="w-full flex justify-bottom-left-end inset-x-0 py-2 px-6">
        <img class="shadow-xl full bg-gray-100 border-4 border-gray-400 h-40 w-80 p-1" :src="require('@/assets/resources/' + logo + '')" alt="card logo"><slot name = "logo"></slot>
        <div class="flex flex-col justify-top-left  py-5 px-7">
          <p class=" p-8"><slot name="description">Lorem, ipsum dolois, nostrum explicabo temporibus est in deleniti laudantium asperiores porro sequi.</slot></p>
          <div class="w-full flex justify-middle-left-end inset-x-0 py-2 px-6">
            <img class="shadow-xl full bg-gray-100 border-4 border-gray-400 h-20 w-40 p-1" :src="require('@/assets/resources/' + journal + '')" alt="card journal"><slot name= "journal"></slot>
            <div class="flex flex-col justify-right extreme py-2 px-10">
              <p class=" p-50"><slot name="citation">in deleniti laudantium asperiores porro sequi.</slot></p>
              <div class="flex justify-bottom w-full">
                <atom-button @click="toLink1()" class="w-1/2 h-1/1 bg-cgreenblue shadow-md text-white text-xl hover:shadow-lg"><slot name="button1">Visit Link</slot></atom-button>
                <atom-button @click="toLink2()" class="w-1/2 h-1/1 bg-cgreenblue shadow-md text-white text-xl hover:shadow-lg"><slot name="button2">Visit Link</slot></atom-button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AtomButton from "@/components/atoms/AtomButton.vue";

export default {
  name: 'PubsSecondCard',
  components: {
    AtomButton,
  },
  props: ['logo', 'journal', 'link1','link2'],
  methods: {
    toLink1() {
      window.open(this.link1)
      //window.open(this.link2)
    },
    toLink2() {
      window.open(this.link2)
    }
  }
}
</script>

<style>

</style>
