<template>
  <div class="bg-cream">
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
import { useMetaTags } from '../utils/metaTags';
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

    // Contact-specific meta tags
    useMetaTags({
      title: 'Contact - John Micheal Acera',
      description: 'Get in touch with John Micheal Acera. Let\'s discuss your project or collaboration opportunities.',
      keywords: 'contact, John Micheal Acera, collaboration, project inquiry, get in touch',
      ogTitle: 'Contact - John Micheal Acera',
      ogDescription: 'Get in touch with John Micheal Acera. Let\'s discuss your project or collaboration opportunities.',
      ogImage: '/jm-bg.png',
      ogUrl: 'https://johnmichealacera.com/contact',
      twitterTitle: 'Contact - John Micheal Acera',
      twitterDescription: 'Get in touch with John Micheal Acera. Let\'s discuss your project or collaboration opportunities.',
      twitterImage: '/jm-bg.png',
      canonical: 'https://johnmichealacera.com/contact'
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