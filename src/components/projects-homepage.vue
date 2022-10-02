<template>
    <span class="project-title" id="projects">Projects</span>

    <!-- project section without list rendering -->
    <ul class="projects-list">
        <li class="project-item">
            <div @click="displayModal1" class="project-card">
                <img src="../assets/portfolio.png" alt="Personal Portfolio">
            </div>
            <!-- Modal popup starts -->
            <div :class="{active:display1}" class="modal">
                <div class="modal-content">
                    <h3 class="project-name">
                        <a href="#">My Portfolio</a>
                    </h3>
                    <p class="project-desc">
                        This portfolio is made with Vue.js and Ikhmal used Figma to design it. He planned to use Bootstrap for his CSS but there're not a lot of components in here so he decided to just use vanilla css instead
                    </p>
                </div>
            </div>
            <!-- Modal popup ends -->
        </li>
    </ul>

    <!-- project section without list rendering -->
    <ul class="projects-list">
        <li class="project-item">
            <div @click="displayModal2" class="project-card">
                <img src="../assets/ambankspot.png" alt="Ambankspot Malaysia">
            </div>
            <!-- Modal popup starts -->
            <div :class="{active:display2}" class="modal">
                <div class="modal-content">
                    <h3 class="project-name">
                        <a href="https://ambankspot.com/" target="_blank">AmbankSpot Malaysia</a>
                    </h3>
                    <p class="project-desc">
                        This website is made with Wordpress with a custom theme and custom plugin installed for it. He also use a popular web builder plugin called Elementor and used jQuery as his goto library. <i>(yea i know its old but its easier for beginners to learn right?)</i>
                    </p>
                </div>
            </div>
            <!-- Modal popup ends -->
        </li>
    </ul>

    <!-- project section without list rendering -->
    <ul class="projects-list">
        <li class="project-item">
            <div @click="displayModal3" class="project-card">
                <img src="../assets/honda.png" alt="Honda Malaysia">
            </div>
            <!-- Modal popup starts -->
            <div :class="{active:display3}" class="modal">
                <div class="modal-content">
                    <h3 class="project-name">
                        <a href="https://www.honda.com.my" target="_blank"></a>
                    </h3>
                    <p class="project-desc">
                        The website is made with Laravel eventhough his seniors made it, Ikhmal still updates the site when there're new promotions or campaign comes out
                    </p>
                </div>
            </div>
            <!-- Modal popup ends -->
        </li>
    </ul>

    <!-- project section without list rendering -->
    <ul class="projects-list">
        <li class="project-item">
            <div @click="displayModal4" class="project-card">
                <img src="../assets/pdh.jpg" alt="Pavilion Damansara Height">
            </div>
            <!-- Modal popup starts -->
            <div :class="{active:display4}" class="modal">
                <div class="modal-content">
                    <h3 class="project-name">
                        <a href="https://paviliondamansaraheights.com/" target="_blank">Pavilion Damansara Heights</a>
                    </h3>
                    <p class="project-desc">
                        It is also made with Wordpress and yes, he did used some jQuery for it. This website uses plugins such as Visual Composer (web builder), WPForm and Revolution Slider
                    </p>
                </div>
            </div>
            <!-- Modal popup ends -->
        </li>
    </ul>
</template>

<script>
    export default {
        data() {
            return {
                display: false,
                display1: false,
                display2: false,
                display3: false,
                display4: false
            }
        },
        methods: {
            displayModal() {
                this.display = !this.display;
            },
            displayModal1() {
                this.display1 = !this.display1;
            },
            displayModal2() {
                this.display2 = !this.display2;
            },
            displayModal3() {
                this.display3 = !this.display3;
            },
            displayModal4() {
                this.display4 = !this.display4;
            }
        }
    }
</script>

<style scoped>
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
        box-shadow: 0 0px 8px 0 rgba(0,0,0,0.2);
        transition: 0.3s;
        padding: 10px 0;
        margin: 20px 0;
    }

    .project-card img {
        width: 100%;
        height: 170px;
    }

    .project-card:hover {
        box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
    }

    /* Modal CSS */
    .modal {
        overflow: hidden;
        height: 0;
        border-radius: 0px 0px 34px 34px;
        background: white;
        box-shadow: 5px 5px 10px #eeedea, -5px -5px 10px #ffffff;
        padding: 5px 55px;
        margin-top: -20px;
        transition: height 0.5s;
        transition-timing-function: ease;
    }

    .modal.active {
        height: 240px;
        transition: height 0.5s;
        transition-timing-function: ease;
    }

    .project-name {
        font-family: "Merriweather", sans-serif;
        font-size: 20px;
        text-align: center;
    }

    .project-name a {
        text-decoration: none;
        color: black;
    }

    .project-desc {
        font-size: 17px;
        text-align: justify;
        font-weight: 400;
    }
    /* Modal CSS ends */

    @media only screen and (min-width: 1200px) {
        .projects-list {
            max-width: 60%;
            margin: 0 auto;
        }

        .project-title {
            display: table;
            margin: 0 auto;
            padding: 30px 15px;
        }

        .project-card img {
            width: 100%;
            height: 100%;
        }
    }
</style>