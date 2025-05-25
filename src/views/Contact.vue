<template>
  <div class="home">
    <taskbar />
    <contact-info />
    <contact-form />
    <Footer />
  </div>
</template>

<script>

import Taskbar from '../components/Taskbar.vue';
import Footer from '../components/Footer.vue';
import ContactInfo from '../components/ContactInfo.vue';
import ContactForm from '../components/ContactForm.vue';
import { useHead } from '@vueuse/head';

export default {
  name: 'Contact',
  components: {
    Taskbar,
    ContactInfo,
    ContactForm,
    Footer
  },
  setup() {
    // Adding canonical link
    useHead({
      link: [
        {
          rel: 'canonical',
          href: 'https://johnmichealacera.vercel.app/contact',
        },
      ],
    });
  },
}
</script>