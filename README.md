# Personal Portfolio

## Project Description
This project is created as a way for me to learn and practice Vue.js as well as having a personal portfolio for myself. This project will be designed to focus on mobile first then desktop. Thus the desktop version will take more time to complete.

### Techologies
<ul>
    <li>Vue 3</li>
</ul>

### Future plans for project
<ul>
    <li>Stack NuxtJs</li>
    <li>Implement CSS framework</li>
</ul>


### Links
Figma: https://www.figma.com/file/h7D6JNCjGpZ4Wxy4dlu3xe/personal-portfolio?node-id=7%3A1224

### TODO or Continue Doing List
<ol>
    <li>
        will try to fix importing and accessing data from json file
    </li>
</ol>

```
<ul class="projects-list">
    <li class="project-item" :for="(project, index) in projectData" :key="index">
        <div class="project-card">
            <h2>{{ project.title }}</h2>
        </div>
    </li>
</ul>
```
