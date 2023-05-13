<template>
  <div class="home" >
    <taskbar />
    <contact-info />
    <contact-form />
    <Footer />
  </div>
</template>

<script>

import Taskbar from '@/components/Taskbar.vue';
import Footer from '@/components/Footer.vue';
import ContactInfo from '@/components/ContactInfo.vue';
import ContactForm from '@/components/ContactForm.vue';

export default {
  name: 'Contact',
  components: {
    Taskbar,
    ContactInfo,
    ContactForm,
    Footer
  },
}
</script>