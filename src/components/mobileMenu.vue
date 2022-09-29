<template>
    <div class="nav">
        <header class="header">
            <nav class="navbar">
                <a href="#" class="nav-logo">
                    <img src="../assets/mobile_logo.png" alt="mobile-logo">
                </a>

                <ul class="nav-menu" :class="{active:displayMenu}" @click="displayMenu=displayMenu=!displayMenu">
                    <li class="nav-item">
                        <a href="#about" class="nav-link">About</a>
                    </li>
                    <li class="nav-item">
                        <a href="#projects" class="nav-link active">Projects</a>
                    </li>
                    <li class="nav-item">
                        <a href="#contact" class="nav-link">Contact</a>
                    </li>
                    <li class="nav-item">
                        <a href="https://drive.google.com/file/d/1DxXPnlCJh9UjpwG-t8CRt3LfRopZKePD/view?usp=sharing" target="_blank" class="nav-link">Resume</a>
                    </li>
                </ul>
                <div class="hamburger" :class="{active:displayMenu}" @click="displayMenu=displayMenu=!displayMenu">
                    <span class="bar"></span>
                    <span class="bar" style="width: 2rem"></span>
                    <span class="bar"></span>
                </div>
            </nav>
        </header>
    </div>
</template>

<script>
export default {
    data() {
        return {
            displayMenu: false
        }
    }
};
</script>

<style scoped>
    /* CSS reset */    
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    
    html {
        font-size: 100%;
        font-family: 'Merriweather', sans-serif;
    }
    
    li {
        list-style: none;
    }
    
    a {
        text-decoration: none;
    }
    /* CSS reset ends */

    .nav {
        top: 0;
        position: sticky;
        background: white;
    }

    .nav-logo img {
        max-width: 3.375rem;
        position: absolute;
        top: 5px;
        left: 10px;
        padding: 5px;
    }

    .navbar {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 1rem 1.5rem;
    }

    .hamburger {
        display: block;
        cursor: pointer;
    }

    .hamburger.active .bar:nth-child(2) {
        opacity: 0;
    }

    .hamburger.active .bar:nth-child(1) {
        transform: translateY(8px) rotate(45deg);
    }

    .hamburger.active .bar:nth-child(3) {
        transform: translateY(-8px) rotate(-45deg);
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
        position: fixed;
        right: -100%;
        top: 5rem;
        flex-direction: column;
        background-color: #FAF9F6;
        width: 100%;
        border-radius: 10px;
        text-align: center;
        transition: 0.3s;
        opacity: 90%;
    }

    .nav-menu.active {
        right: 0;
    }

    .nav-item {
        margin: 5px 0;
    }

    .nav-link {
        font-size: 1.6rem;
        font-weight: 400;
        color: #4D4141;
    }

    @media only screen and (min-width: 1200px) {

        .nav-logo img {
        max-width: unset;
        position: relative;
        top: 0;
        left: 0;
        padding: 5px;
        max-width: 5rem;
        }

        .navbar {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 1rem 2.5rem;
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
            top: 0;
            position: relative;
            right: unset;
            width: auto;
            text-align: unset;
            flex-direction: unset;
            background-color: unset;
            opacity: unset;
            border-radius: unset;
            transition: unset;
        }

        .nav-item {
            margin-left: 5rem;
            display: inline-block;
            position: relative;
            color: #4D4141;
        }

        .nav-item:after {
            content: '';
            position: absolute;
            width: 100%;
            height: 2px;
            transform: scaleX(0);
            bottom: 0;
            left: 0;
            background-color: black;
            transform-origin: bottom right;
            transition: transform 0.25s ease-out;
        }

        .nav-item:hover:after {
            transform: scaleX(1);
            transform-origin: bottom left;
        }

        .nav-link {
            font-size: 1.6rem;
            font-weight: 400;
            color: #25232D;
        }
    }
</style>