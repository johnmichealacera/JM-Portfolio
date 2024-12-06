<template>
  <div class="home">
    <taskbar />
    <introduction />
    <skill />
    <project />
    <personal-story />
    <Footer />
  </div>
</template>

<script>

import Taskbar from '../components/Taskbar.vue';
import Introduction from '../components/Introduction.vue';
import Skill from '../components/Skill.vue';
import Project from '../components/Project.vue';
import PersonalStory from '../components/PersonalStory.vue';
import Footer from '../components/Footer.vue';
import { useHead } from '@vueuse/head';

export default {
  name: 'Home',
  components: {
    Introduction,
    Taskbar,
    Skill,
    Project,
    PersonalStory,
    Footer,
  },

  setup() {
    // Adding canonical link
    useHead({
      link: [
        {
          rel: 'canonical',
          href: 'https://johnmichealacera.vercel.app/',
        },
      ],
    });
  },
}
</script>