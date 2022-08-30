<template>
  <mobileMenu />
  <HomepageInto />
</template>

<script>
import mobileMenu from './components/mobileMenu.vue'
import HomepageInto from './components/homepage-into.vue'

export default {
  name: 'App',
  components: {
    mobileMenu,
    HomepageInto
}
}
</script>

<style>
#app {
  /* font-family: Avenir, Helvetica, Arial, sans-serif; */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
