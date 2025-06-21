<template>
  <div class="bg-cream">
    <taskbar />
    <introduction />
    <current-work />
    <skill />
    <project />
    <personal-story />
    <footer-bar />
  </div>
</template>

<script>

import Taskbar from '../components/Taskbar.vue';
import Introduction from '../components/Introduction.vue';
import Skill from '../components/Skill.vue';
import Project from '../components/Project.vue';
import CurrentWork from '../components/CurrentWork.vue';
import PersonalStory from '../components/PersonalStory.vue';
import FooterBar from '../components/Footer.vue';
import { useMetaTags } from '../utils/metaTags';
import { usePortfolioStore } from '../store/pinia/portfolio';
import { onMounted } from 'vue';

export default {
  name: 'Home',
  components: {
    Introduction,
    Taskbar,
    Skill,
    Project,
    CurrentWork,
    PersonalStory,
    FooterBar,
  },

  setup() {
    const portfolioStore = usePortfolioStore();

    // Home-specific meta tags
    useMetaTags({
      title: 'John Micheal Acera - Developer Portfolio',
      description: 'Explore the portfolio of John Micheal Acera, showcasing projects, skills, and achievements in software development.',
      keywords: 'John Micheal Acera, portfolio, software developer, programming, projects, web development, mobile apps',
      ogTitle: 'John Micheal Acera - Developer Portfolio',
      ogDescription: 'Explore the portfolio of John Micheal Acera, showcasing projects, skills, and achievements in software development.',
      ogImage: '/jm-bg.png',
      ogUrl: 'https://johnmichealacera.com/',
      twitterTitle: 'John Micheal Acera - Developer Portfolio',
      twitterDescription: 'Explore the portfolio of John Micheal Acera, showcasing projects, skills, and achievements in software development.',
      twitterImage: '/jm-bg.png',
      canonical: 'https://johnmichealacera.com/'
    });

    onMounted(async () => {
      // Only fetch if data isn't already loaded
      if (!portfolioStore.isInitialized) {
        try {
          await portfolioStore.fetchAllData();
        } catch (err) {
          console.error('Failed to load portfolio data', err);
        }
      }
    })
  },
}
</script>