<template>
  <div class="bg-cream">
    <taskbar />
    <dev-manifesto />
    <footer-bar />
  </div>
</template>

<script>

import Taskbar from '../components/Taskbar.vue';
import FooterBar from '../components/Footer.vue';
import DevManifesto from '../components/DevManifesto.vue';
import { usePortfolioStore } from '../store/pinia/portfolio';
import { onMounted } from 'vue';

export default {
  name: 'Manifesto',
  components: {
    Taskbar,
    DevManifesto,
    FooterBar
  },
  setup() {
    const portfolioStore = usePortfolioStore();

    onMounted(() => {
      // Only fetch if data isn't already loaded
      if (!portfolioStore.isInitialized) {
        portfolioStore.fetchAllData();
      }
    })
  },
}
</script>
