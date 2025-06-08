<template>
  <div class="bg-cream">
    <taskbar />
    <dev-manifesto />
    <footer-bar />
  </div>
</template>

<script>

import Taskbar from '../components/Taskbar.vue';
import FooterBar from '../components/Footer.vue';
import DevManifesto from '../components/DevManifesto.vue';
import { useHead } from '@vueuse/head';

export default {
  name: 'Contact',
  components: {
    Taskbar,
    DevManifesto,
    FooterBar
  },
  setup() {
    // Adding canonical link
    useHead({
      link: [
        {
          rel: 'canonical',
          href: 'https://johnmichealacera.com/manifesto',
        },
      ],
    });
  },
}
</script>