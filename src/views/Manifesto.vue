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
import { useMetaTags } from '../utils/metaTags';
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

    // Manifesto-specific meta tags
    useMetaTags({
      title: 'Developer Manifesto - John Micheal Acera',
      description: 'My development philosophy and principles. Learn about my approach to software development and the values that drive my work.',
      keywords: 'manifesto, development philosophy, principles, John Micheal Acera, software development approach',
      ogTitle: 'Developer Manifesto - John Micheal Acera',
      ogDescription: 'My development philosophy and principles. Learn about my approach to software development and the values that drive my work.',
      ogImage: '/jm-bg.png',
      ogUrl: 'https://johnmichealacera.com/manifesto',
      twitterTitle: 'Developer Manifesto - John Micheal Acera',
      twitterDescription: 'My development philosophy and principles. Learn about my approach to software development and the values that drive my work.',
      twitterImage: '/jm-bg.png',
      canonical: 'https://johnmichealacera.com/manifesto'
    });

    onMounted(() => {
      // Only fetch if data isn't already loaded
      if (!portfolioStore.isInitialized) {
        portfolioStore.fetchAllData();
      }
    })
  },
}
</script>