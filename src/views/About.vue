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
import { useHead } from '@vueuse/head';

export default {
  name: 'About',
  components: {
    Taskbar,
    AboutMe,
    MyWhy,
    AboutSkill,
    Footer,
  },
  setup() {
    // Adding canonical link
    useHead({
      link: [
        {
          rel: 'canonical',
          href: 'https://johnmichealacera.vercel.app/about',
        },
      ],
    });
  },
}
</script>