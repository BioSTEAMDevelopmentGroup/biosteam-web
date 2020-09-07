<template>
  <div class="resources">
    <AppNavBar></AppNavBar>
    This is the resources tab
  </div>
</template>

<script>
import AppNavBar from '@/components/AppNavBar.vue';

export default {
  name: 'Resources',
  components: {
    'AppNavBar': AppNavBar,
  }
}
</script>
