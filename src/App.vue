<template>
  <mobileMenu />
  <HomepageInto />
  <AboutMe />
  <projectsHomepageVue />
</template>

<script>
import mobileMenu from './components/mobileMenu.vue'
import HomepageInto from './components/homepage-into.vue'
import projectsHomepageVue from './components/projects-homepage.vue'
import AboutMe from './components/about-me.vue'

export default {
  name: 'App',
  components: {
    mobileMenu,
    HomepageInto,
    projectsHomepageVue,
    AboutMe
}
}
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
