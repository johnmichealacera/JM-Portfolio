<template>
  <div class="about">
    <taskbar />
    <about-me />
    <my-why />
    <about-skill />
    <Footer />
  </div>
</template>

<script>

import Taskbar from '../components/Taskbar.vue';
import AboutMe from '../components/AboutMe.vue';
import MyWhy from '../components/MyWhy.vue';
import AboutSkill from '../components/AboutSkill.vue';
import Footer from '../components/Footer.vue';

export default {
  name: 'About',
  components: {
    Taskbar,
    AboutMe,
    MyWhy,
    AboutSkill,
    Footer,
  }
}
</script>