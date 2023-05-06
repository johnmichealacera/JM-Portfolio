<template>
  <div class="about" v-if="isAuthenticated">
    <taskbar :isAuthenticated="isAuthenticated"/>
    <about-me :userInfo="userInfo"/>
    <my-why :userInfo="userInfo"/>
    <about-skill :userInfo="userInfo"/>
    <Footer :userInfo="userInfo"/>
  </div>
</template>

<script>

import Taskbar from '@/components/Taskbar.vue';
import AboutMe from '@/components/AboutMe.vue';
import MyWhy from '@/components/MyWhy.vue';
import AboutSkill from '@/components/AboutSkill.vue';
import Footer from '@/components/Footer.vue';
import auth from '../services/auth';
import { onMounted, ref } from 'vue';

export default {
  name: 'About',
  components: {
    Taskbar,
    AboutMe,
    MyWhy,
    AboutSkill,
    Footer,
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