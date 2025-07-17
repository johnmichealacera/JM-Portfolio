<template>
  <div class="bg-cream">
    <taskbar />
    <introduction />
    <!-- <lead-magnet /> -->
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
// import LeadMagnet from '../components/LeadMagnet.vue';
import Skill from '../components/Skill.vue';
import Project from '../components/Project.vue';
import CurrentWork from '../components/CurrentWork.vue';
import PersonalStory from '../components/PersonalStory.vue';
import FooterBar from '../components/Footer.vue';
import { usePortfolioStore } from '../store/pinia/portfolio';
import { onMounted } from 'vue';

export default {
  name: 'Home',
  components: {
    Introduction,
    Taskbar,
    // LeadMagnet,
    Skill,
    Project,
    CurrentWork,
    PersonalStory,
    FooterBar,
  },

  setup() {
    const portfolioStore = usePortfolioStore();

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
