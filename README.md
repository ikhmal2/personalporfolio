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
        Try to fix links. it can get the 'social.copy' values but it can parse the 'social.href' values to be inserted in href tag
    </li>
</ol>

```
<ul class="socialLinks">
 <li class="socialItem" v-for="(social, index) in socialCopy" :key="index">
  <span>
    <a :href="'${social.href}'" target="_blank">{{ social.copy }}</a>
  </span>
 </li>
</ul>
```
