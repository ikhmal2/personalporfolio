<template>
  <mobileMenu />
  <HomepageInto />
  <AboutMe />
  <projectsHomepageVue />
  <ContactMe />
</template>

<script>
import mobileMenu from './components/mobileMenu.vue'
import HomepageInto from './components/homepage-into.vue'
import projectsHomepageVue from './components/projects-homepage.vue'
import AboutMe from './components/about-me.vue'
import ContactMe from './components/contact-me.vue'

export default {
  name: 'App',
  components: {
    mobileMenu,
    HomepageInto,
    projectsHomepageVue,
    AboutMe,
    ContactMe
}
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Merriweather&family=Playfair+Display&display=swap');

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

html {
  scroll-behavior: smooth;
}
</style>
