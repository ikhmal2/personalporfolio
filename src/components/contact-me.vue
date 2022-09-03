<template>
    <div class="contact">
        <h2>Get In Touch</h2>
        <div class="emailForm">
            <p class="copy">
                Want to work together or have any questions?
            </p>
            <a href="mailto:ax.ikhmal.145713@gmail.com">
                <button class="contact-btn">
                    Say Hello &#128075;
                </button>
            </a>
        </div>
    </div>
</template>

<script setup>

</script>

<style scoped>
    @import url('https://fonts.googleapis.com/css2?family=Merriweather&family=Playfair+Display&display=swap');

    .contact {
        max-width: 343px;
        max-height: 166px;  
        margin: auto;
    }

    .contact h2 {
        font-family: "Playfair Display", sans-serif;
        font-weight: 400;
        text-align: center;
    }

    .emailForm {
        border: 4px solid #33272A;
        max-width: 343px;
        max-height: 166px;
        padding: 10px;
    }

    .emailForm a {
        text-decoration: none;
    }

    .copy {
        text-align: center;
        font-family: "Merriweather", sans-serif;
    }

    .contact-btn {
        display: block;
        background-color: #EE534F;
        width: 150px;
        height: 39px;
        border-radius: 15px;
        color: white;
        border: none;
        margin: 0 auto;
    }
</style>