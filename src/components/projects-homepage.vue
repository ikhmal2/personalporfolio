<template>
    <span class="project-title">Projects</span>
    <ul class="projects-list">
        <li v-for="(project, index) in projects" :key="index" class="project-item">
            <div class="project-card">
                <img v-bind:attr="src=project.src, alt=project.title">
            </div>
        </li>
        <li class="project-item">
            <div class="project-card">
                <img src="../assets/homepage.png" alt="">
            </div>
        </li>
    </ul>
</template>

<script>
    export default {
        data() {
            return { 
                projects: [
                    {src: "../assets/homepage.png", title: "My Portfolio", desc: "This portfolio is made with Vue.js and Ikhmal used Figma to design it. He planned to use Bootstrap for his CSS but there're not a lot of components in here so he decided to just use vanilla css instead", link: "#"},
                    {src: "../assets/ambankspot.png", title: "AmbankSpot Malaysia", desc: "This website is made with Wordpress with a custom theme and custom plugin installed for it. He also use a popular web builder plugin called Elementor and used Jquery as his goto library. (yea i know its old but its easy for beginners right?)", link: 'https://ambankspot.com/'},
                    {src: "../assets/honda.png", title: "Honda Malaysia", desc: "The website is  made with Laravel eventhough his seniors made it, Ikhmal still updates the site when there're new promotions or campaign comes out", link: 'https://www.honda.com.my/'},
                    {src: "../assets/pdh.png", title: "Pavilion Damansara Heights", desc: "It is also made with Wordpress and yes, he did used Jquery for it.  This website uses plugins such as Visual Composer (web builder), WPForm and Revolution Slider", link: 'https://paviliondamansaraheights.com/'},
                ]
            }
        }
    }
</script>

<style scoped>
    @import url('https://fonts.googleapis.com/css2?family=Merriweather&family=Playfair+Display&display=swap');
    
    .project-title {
        font-family: "Playfair Display",sans-serif;
        font-size: 28px;
        font-weight: 400;
        color: #4D4141;
        padding: 0px 15px;
    }

    .projects-list {
        list-style: none;
        margin: 0;
        padding: 0;
    }

    .project-card {
        box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
        transition: 0.3s;
    }

    .project-card:hover {
        box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
    }
</style>