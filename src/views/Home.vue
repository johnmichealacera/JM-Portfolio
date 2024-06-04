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

import Taskbar from '../components/Taskbar.vue';
import Introduction from '../components/Introduction.vue';
import Skill from '../components/Skill.vue';
import Project from '../components/Project.vue';
import PersonalStory from '../components/PersonalStory.vue';
import Footer from '../components/Footer.vue';
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
}
</script>