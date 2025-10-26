<template>
  <router-view/>
  <floating-chat-widget />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

html {
  scroll-behavior: smooth;
}
</style>

<script setup>
import { usePortfolioStore } from './store/pinia/portfolio';
import { onMounted, watch } from 'vue';
import { useRoute } from 'vue-router';
import { useMetaTags } from './utils/metaTags';
import FloatingChatWidget from './components/FloatingChatWidget.vue';

const portfolioStore = usePortfolioStore();
const route = useRoute();

// Function to update meta tags when route changes
const updateMetaTags = () => {
  if (route.meta && Object.keys(route.meta).length > 0) {
    useMetaTags(route.meta);
  }
};

// Update meta tags on initial load
updateMetaTags();

// Watch for route changes and update meta tags
watch(
  () => route.meta,
  () => {
    updateMetaTags();
  },
  { deep: true }
);

onMounted(() => {
  portfolioStore.fetchAllData();
});
</script>
