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
                        My portfolio website is designed with Figma and built with VueJS framework. The design and build was focused on simplicity and performance.
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
                        A website built for Ambank to show deals for their card users. This website is also used as landing page for campaigns that are running as well. The stack for this website is WordPress, jQuery and vanilla CSS for the frontend. 
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
                        <a href="https://www.honda.com.my" target="_blank">Honda Malaysia</a>
                    </h3>
                    <p class="project-desc">
                        A corporate website for Honda Malaysia used to display information such as price and images of their cars. This website is also used to promote monthly campaigns or announce anything on their behalf regarding their cars or their customers. The stack for this website is Laravel for the backend, jQuery and vanilla CSS for the frontend.
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
                        A website to promote and represent their new mall and residence as well. The website focuses on displaying images to visitors. The stack for this website is WordPress, jQuery library and vanilla CSS.
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
        height: 270px;
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