<template>
    <div class="about-container">
        <h2 id="about">About Me</h2>
        <p>
            My name is Ikhmal Fahmi and I graduated with a Diploma in Computer Science. I entered the industry in January 2022 and
            currently working as a Jr. Front-End Developer at Dentsu Isobar, MY.
            <br><br>
            I've experience in web development languages such as HTML, CSS, JavaScript, PHP, and also some Python, Java, and C++
            along the way during my studies period. I see myself as a relentless problem-solver, and I'm always looking for new
            challenges.
            <br><br>
            I would love to work with someone who is experienced and can guide me more in the development field whether it's a
            mobile or web-based application because I want to learn new things for my career and keep growing for the future. I
            enjoy my free time by traveling for adventures, and also watch a lot of Youtube videos.
        </p>
        <img src="../assets/Point-removebg-preview.png" alt="" id="point-image">
    </div>
</template>

<script setup>

</script>

<style scoped>
    .about-container {
        border-radius: 34px;
        background: #FAF9F6;
        box-shadow:  5px 5px 10px #eeedea,
                    -5px -5px 10px #ffffff;
        padding: 5px 55px;
        margin-bottom: 10px;
    }

    .about-container h2 {
        font-family: "Playfair Display",sans-serif;
        font-weight: 400;
        text-align: center;
    }

    .about-container p {
        font-family: "Merriweather", sans-serif;
        font-weight: 400;
        font-size: 0.8rem;
        text-align: justify;
        margin: 0;
    }

    #point-image {
        max-width: 69%;
        padding-left: 66px;
    }

    @media only screen and (min-width: 1200px) {
        .about-container {
            width: 53%;
            margin: 0 auto;
        }

        .about-container p {
            padding: 0 111px;
        }
    }
</style>