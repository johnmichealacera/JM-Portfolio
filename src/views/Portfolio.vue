<template>
  <div class="bg-cream">
    <taskbar />
    <project />
    <Footer />
  </div>
</template>

<script>
import Taskbar from '../components/Taskbar.vue';
import Project from '../components/Project.vue';
import Footer from '../components/Footer.vue';

export default {
  name: 'Portfolio',
  components: {
    Taskbar,
    Project,
    Footer,
  },
}
</script>
