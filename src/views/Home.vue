<template>
  <div class="home" v-if="isAuthenticated">
    <taskbar :isAuthenticated="isAuthenticated"/>
    <introduction :userInfo="userInfo"/>
    <skill :userInfo="userInfo"/>
    <project :userInfo="userInfo"/>
    <personal-story :userInfo="userInfo"/>
    <Footer :userInfo="userInfo"/>
  </div>
</template>

<script>

import Taskbar from '@/components/Taskbar.vue';
import Introduction from '@/components/Introduction.vue';
import Skill from '@/components/Skill.vue';
import Project from '@/components/Project.vue';
import PersonalStory from '@/components/PersonalStory.vue';
import Footer from '@/components/Footer.vue';
import auth from '../services/auth';
import { onMounted, ref } from 'vue';
export default {
  name: 'Home',
  components: {
    Introduction,
    Taskbar,
    Skill,
    Project,
    PersonalStory,
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