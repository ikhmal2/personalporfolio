<template>
    <div class="nav">
        <header class="header">
            <nav class="navbar">
                <a href="#" class="nav-logo">
                    <img src="../assets/mobile_logo.png" alt="mobile-logo">
                </a>

                <ul class="nav-menu">
                    <li class="nav-item">
                        <a href="#" class="nav-link">About</a>
                    </li>
                    <li class="nav-item">
                        <a href="#" class="nav-link">Projecs</a>
                    </li>
                    <li class="nav-item">
                        <a href="#" class="nav-link">Contact</a>
                    </li>
                </ul>
                <div @click="mobileMenu" class="hamburger">
                    <span class="bar"></span>
                    <span class="bar"></span>
                    <span class="bar"></span>
                </div>
            </nav>
        </header>
    </div>
</template>

<script>
export default {
    
};
</script>

<style scoped>


    /* CSS reset */
    @import url('https://fonts.googleapis.com/css2?family=Merriweather&display=swap');
    
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    
    html {
        font-size: 62.5%;
        font-family: 'Merriweather', sans-serif;
    }
    
    li {
        list-style: none;
    }
    
    a {
        text-decoration: none;
    }
    /* CSS reset ends */

    .navbar {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 1rem 1.5rem;
    }

    .hamburger {
        display: none;
    }

    .bar {
        display: block;
        width: 25px;
        height: 3px;
        margin: 5px auto;
        transition: all 0.3s ease-in-out;
        background-color: black;
    }
    .nav-menu {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .nav-item {
        margin-left: 5rem;
    }

    .nav-link {
        font-size: 1.6rem;
        font-weight: 400;
        color: #475569;
    }

    .nav-link:hover {
        color: #482ff7;
    }

    @media only screen and (max-width: 768px) {
        .nav-menu {
            position: fixed;
            left: -100%;
            top: 5rem;
            flex-direction: column;
            background-color: #fff;
            width: 100%;
            border-radius: 10px;
            text-align: center;
            transition: 0.3s;
            box-shadow:
                0 10px 27px rgba(0, 0, 0, 0.05);
        }

        .nav-menu.active {
            left: 0;
        }

        .nav-item {
            margin: 2.5rem 0;
        }

        .hamburger {
            display: block;
            cursor: pointer;
        }

        .nav-logo img {
            max-width: 4.375rem;
            position: absolute;
            top: 0;
            left: 0;
            padding: 5px;
        }
    }


</style>