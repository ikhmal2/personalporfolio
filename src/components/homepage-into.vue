<template>
    <div>
        <div>
            <img class="intro-section" src="../assets/main-image.png" alt="mainpage-image">

            <span>
                <h1 class="intro-main">Hello I'm<br>Ikhmal Fahmi</h1>
            </span>

            <span>
                <h3 class="intro-copy">I'm a front end developer jr.<br>based in Malaysia</h3>
            </span>

            <ul class="socialLinks">
                <li class="socialItem" v-for="(social, index) in socialCopy" :key="index">
                    <span>
                        <a :href="social.href" target="_blank">{{ social.copy }}</a>
                    </span>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                socialCopy: [
                    {copy: 'GH', href: 'https://github.com/ikhmal2'},
                    {copy: 'RE', href: 'https://drive.google.com/file/d/1DxXPnlCJh9UjpwG-t8CRt3LfRopZKePD/view'},
                    {copy: 'LI', href: 'https://www.linkedin.com/in/ikhmal-fahmi-6173031a8/'}
                ]
            }
        }
    }
</script>

<style scoped>
    .intro-section {
        display: block;
        margin: 0 auto;
        width: 70%;
    }

    .intro-main {
        font-weight: 400;
        text-align: center;
        color: #4D4141;
        font-size: 51px;
        font-family: "Playfair Display",sans-serif;   
    }

    .intro-copy {
        font-family: "Merriweather",sans-serif;
        font-size: 19px;
        text-align: center;
        color: #4D4141;
        font-weight: 400;
    }

    .socialLinks {
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        padding: 0;
    }

    .socialItem {
        list-style: none;
    }

    .socialItem span a {
        text-decoration: none;
        color: #594A4E;
    }

    @media screen and (min-width: 1200px) {
        .intro-section {
            width: unset;
        }
    }
</style>