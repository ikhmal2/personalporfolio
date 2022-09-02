<template>
  <mobileMenu />
  <HomepageInto />
  <projectsHomepageVue />
</template>

<script>
import mobileMenu from './components/mobileMenu.vue'
import HomepageInto from './components/homepage-into.vue'
import projectsHomepageVue from './components/projects-homepage.vue'

export default {
  name: 'App',
  components: {
    mobileMenu,
    HomepageInto,
    projectsHomepageVue
  }
}
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
