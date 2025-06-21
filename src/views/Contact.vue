<template>
  <div class="min-h-screen">
    <taskbar />
    <contact-info />
    <contact-form />
    <footer-bar />
  </div>
</template>

<script>
import Taskbar from '../components/Taskbar.vue';
import FooterBar from '../components/Footer.vue';
import ContactInfo from '../components/ContactInfo.vue';
import ContactForm from '../components/ContactForm.vue';
import { usePortfolioStore } from '../store/pinia/portfolio';
import { onMounted } from 'vue';

export default {
  name: 'Contact',
  components: {
    Taskbar,
    ContactInfo,
    ContactForm,
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
