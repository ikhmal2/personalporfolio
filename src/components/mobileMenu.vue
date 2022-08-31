<template>
    <div class="nav">
        <header class="header">
            <nav class="navbar">
                <a href="#" class="nav-logo">
                    <img src="../assets/mobile_logo.png" alt="mobile-logo">
                </a>

                <ul class="nav-menu" :class="{active:displayMenu}" @click="displayMenu=displayMenu=!displayMenu">
                    <li class="nav-item">
                        <a href="#" class="nav-link">About</a>
                    </li>
                    <li class="nav-item">
                        <a href="#" class="nav-link active">Projects</a>
                    </li>
                    <li class="nav-item">
                        <a href="#" class="nav-link">Contact</a>
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
    @import url('https://fonts.googleapis.com/css2?family=Merriweather&display=swap');
    
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

    .nav-logo img {
        max-width: 4.375rem;
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
        background-color: #4D4141;
        width: 100%;
        border-radius: 10px;
        text-align: center;
        transition: 0.3s;
    }

    .nav-menu.active {
        right: 0;
    }

    .nav-item {
        margin-left: .8rem 0;
    }

    .nav-link {
        font-size: 1.6rem;
        font-weight: 400;
        color: white;
    }

    .nav-link:hover {
        color: #482ff7;
    }

    @media only screen and (min-width: 1200px) {

        .nav-logo img {
        max-width: unset;
        position: relative;
        top: 0;
        left: 0;
        padding: 5px;
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
        }

        .nav-link {
            font-size: 1.6rem;
            font-weight: 400;
            color: #25232D;
        }

        .nav-link:hover {
            color: #482ff7;
        } 
    }
</style>