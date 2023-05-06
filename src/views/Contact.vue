<template>
  <div class="home" v-if="isAuthenticated">
    <taskbar :isAuthenticated="isAuthenticated"/>
    <contact-info :userInfo="userInfo"/>
    <contact-form />
    <Footer :userInfo="userInfo"/>
  </div>
</template>

<script>

import Taskbar from '@/components/Taskbar.vue';
import Footer from '@/components/Footer.vue';
import ContactInfo from '@/components/ContactInfo.vue';
import ContactForm from '@/components/ContactForm.vue';
import auth from '../services/auth';
import { onMounted, ref } from 'vue';

export default {
  name: 'Contact',
  components: {
    Taskbar,
    ContactInfo,
    ContactForm,
    Footer
  },
  setup() {
    const userInfo = ref(null);
    const isAuthenticated = ref(false);

    onMounted(async () => {
      try {
        await auth.checkSession();
        userInfo.value = await auth.getUserProfile();
        isAuthenticated.value = await auth.isAuthenticated();
      } catch (err) {
        console.error(err);
      }
    });

    return {
      isAuthenticated,
      userInfo,
    };
  }
}
</script>