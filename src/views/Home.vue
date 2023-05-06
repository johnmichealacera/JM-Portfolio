<template>
  <div class="home">
    <h1 v-if="isAuthenticated">Welcome, {{ userInfo.nickname }}!</h1>
    <taskbar />
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
import { useAuth0 } from '@auth0/auth0-vue';
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
    const { user } = useAuth0();
    const userInfo = ref(null);
    const isAuthenticated = ref(false);
    const checkLoggedIn = async () => {
      return new Promise((resolve, reject) => {
        auth.checkSession({}, (err, authResult) => {
          if (err) {
            reject(err);
          } else {
            console.log('home portfolio', authResult);
            auth.setSession(authResult);
            userInfo.value = authResult; // add this line to get user profile after setting session
            resolve(authResult);
          }
        });
      });
    };


  onMounted(async () => {
    try {
      await auth.isAuthenticated();
      
      checkLoggedIn();
      console.log('auth.getUserProfile()', auth.getUserProfile());
      userInfo.value = auth.getUserProfile();
      isAuthenticated.value = auth.isAuthenticated();
    } catch (err) {
      console.error(err);
    }
  });

    return {
      isAuthenticated,
      user,
      userInfo,
    };
  }
}
</script>