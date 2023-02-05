<template>
  <div class="home">
    <taskbar />
    <introduction />
    <skill />
    <project />
    <personal-story />
    <Footer />
  </div>
</template>

<script>

import Taskbar from '@/components/Taskbar.vue';
import Introduction from '@/components/Introduction.vue';
import Skill from '@/components/Skill.vue';
import Project from '@/components/Project.vue';
import PersonalStory from '@/components/PersonalStory.vue';
import Footer from '@/components/Footer.vue';
import { onMounted } from '@vue/runtime-core';
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
    const getUser = async () => {
      const code = user ? JSON.stringify(user.value, null, 2) : "";
      console.log('code', code);
      return code;
    };

    onMounted(async () => {
      const user = await getUser();
      console.log('user', user);
    })
  }
}
</script>