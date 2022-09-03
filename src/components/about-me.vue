<template>
    <div class="about-container">
        <h2>About Me</h2>
        <p>
            <i>Ikhmal Fahmi</i><br><br>is a
            Front-End Developer Jr. at Dentsu Isobar, MY. He is a graduate with a Diploma in Computer Science. He joined the industry in Jan 2022 .
        </p>

        <p>
            Ikhmal shares his experience in web development and also some Python, Java and C++ along the way during his
            studies.
        </p>

        <p>
            He does not have much to show because most he is still new and thus that's what we call a junior!
        </p>

        <p>
            He spends his free time by traveling for adventures, and also watch Youtube a lot but he does not have a Netflix account though.
        </p>

        <p>
            He would love to work with much senior developers in order to learn new thing for his career.
            Say hi to him on Instagram <span class="ig">@ikhmalloy</span>
        </p>

        <p>
            <span class="ps">P.S oh btw he's Instagram is private he's a bit of a shy person but he will still check his DMs....</span>
        </p>
    </div>
</template>

<script setup>

</script>

<style scoped>
    @import url('https://fonts.googleapis.com/css2?family=Merriweather&family=Playfair+Display&display=swap');

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
    }

    .ig {
        font-weight: 500;
        text-decoration: underline;
    }

    .ps {
        font-weight: 300;
        font-size: 0.6rem;
        font-style: italic;
    }
</style>