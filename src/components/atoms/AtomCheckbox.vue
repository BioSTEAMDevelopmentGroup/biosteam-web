<template>
  <div @click="check" class="h-6 w-6 bg-gray-50 flex justify-center items-center rounded-sm border-transparent border-2 hover:border-cdark">
      <div v-if="checked == true" class="h-4 w-4 bg-cdark rounded-sm"></div>
  </div>
</template>

<script>
export default {
    name: 'AtomCheckbox',
    model: {
        prop: "checked",
        event: "check"
    },
    props: {
        checked: Boolean
    },
    methods: {
        check() {
            this.$emit('check', !this.checked)
        }
    }
}
</script>

<style>

</style>
