<template>
    <button v-if="type == 'scroll'" class="rounded-full text-lg py-2 px-4" @click="scrollto(element)">
      <slot>Default Button</slot>
    </button>
    <button v-else-if="type == 'route'" class="rounded-full text-lg py-2 px-4" @click="toRoute(link)">
          <slot>Default Button</slot>
    </button>
    <button v-else class="rounded-full text-lg py-2 px-4" @click="$emit('click')">
      <slot>Default Button</slot>
    </button>
</template>

<script>
export default {
    name: 'AtomButton',
    props: {
        link: String,
        // element: HTMLAnchorElement,
        type: String,
    },
    methods: {
      toRoute() {
        this.$router.push({path: this.link})
      },
      scrollto() {
        // console.log('scroll')
        // console.log(typeof element)
        // console.log(element)
        var el = this.$parent.$parent.$refs['startExplore'];
        // this.$forceUpdate()
        var top = el.offsetTop;
        window.scrollTo({left: 0, top: top, behavior: 'smooth'});
        // element.
      }
    }

}
</script>
