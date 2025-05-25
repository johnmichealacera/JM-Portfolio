<template>
  <div class="home">
    <taskbar />
    <project />
    <Footer />
  </div>
</template>

<script>

import Taskbar from '../components/Taskbar.vue';
import Project from '../components/Project.vue';
import Footer from '../components/Footer.vue';
import { useHead } from '@vueuse/head';

export default {
  name: 'Portfolio',
  components: {
    Taskbar,
    Project,
    Footer,
  },
  setup() {
    // Adding canonical link
    useHead({
      link: [
        {
          rel: 'canonical',
          href: 'https://johnmichealacera.vercel.app/portfolio',
        },
      ],
    });
  },
}
</script>