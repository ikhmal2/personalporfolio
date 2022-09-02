<template>
    <span class="project-title">Projects</span>
    <ul class="projects-list">
        <li class="project-item" :for="(project, index) in projectData" :key="index">
            <div class="project-card">
                <h2>{{ project.title }}</h2>
            </div>
        </li>
    </ul>
</template>

<script>
    import projects from '../assets/json/projects.json'
    export default {
        data() {
            return { 
                projectData: projects,
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