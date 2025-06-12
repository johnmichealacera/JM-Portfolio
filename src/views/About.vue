<template>
  <div class="bg-cream">
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
import { usePortfolioStore } from '../store/pinia/portfolio';
import { onMounted } from 'vue';

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
    const portfolioStore = usePortfolioStore();

    onMounted(() => {
      // Only fetch if data isn't already loaded
      if (!portfolioStore.isInitialized) {
        portfolioStore.fetchAllData();
      }
    })
    // Adding canonical link
    useHead({
      link: [
        {
          rel: 'canonical',
          href: 'https://johnmichealacera.com/about',
        },
      ],
    });
  },
}
</script>