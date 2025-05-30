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
import { useHead } from '@vueuse/head';

export default {
  name: 'Contact',
  components: {
    Taskbar,
    ContactInfo,
    ContactForm,
    FooterBar
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