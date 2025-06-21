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
import { useMetaTags } from '../utils/metaTags';

export default {
  name: 'Portfolio',
  components: {
    Taskbar,
    Project,
    Footer,
  },
  setup() {
    // Portfolio-specific meta tags
    useMetaTags({
      title: 'Portfolio - John Micheal Acera',
      description: 'View my latest projects and technical achievements. Explore web applications, mobile apps, and software solutions I\'ve developed.',
      keywords: 'portfolio, projects, web development, mobile apps, software solutions, John Micheal Acera, React, Vue, Node.js, JavaScript',
      ogTitle: 'Portfolio - John Micheal Acera',
      ogDescription: 'View my latest projects and technical achievements. Explore web applications, mobile apps, and software solutions I\'ve developed.',
      ogImage: '/jm-bg.png',
      ogUrl: 'https://johnmichealacera.com/portfolio',
      twitterTitle: 'Portfolio - John Micheal Acera',
      twitterDescription: 'View my latest projects and technical achievements. Explore web applications, mobile apps, and software solutions I\'ve developed.',
      twitterImage: '/jm-bg.png',
      canonical: 'https://johnmichealacera.com/portfolio'
    });
  },
}
</script>