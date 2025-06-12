<template>
  <div data-aos="fade-up" class="p-10 w-full bg-forest text-cream">
    <h2 class="text-center text-3xl font-semibold mb-2">📬 Let's Connect</h2>
    <p class="text-center text-cream mb-6 max-w-2xl mx-auto">
      Whether you're planning a new product, need an extra hand on your dev team, or just want to collaborate — I'd love to hear from you.
    </p>
    <div class="flex justify-center mb-4">
      <button class="flex outline-none bg-burnt hover:bg-gold text-black" @click="scrollToTop">
        <router-link to="/contact" class="px-1">🚀 Let's build something great together</router-link>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#fff"><path d="M24 12l-9-8v6h-15v4h15v6z"/></svg>
      </button>
    </div>
    <div class="flex justify-center">
      <div
        class="flex justify-center items-center"
        v-for="(item, index) in socialMediaArrData"
        :key="index"
      >
        <a
          class="px-2"
          :href="item?.url"
          target="_blank"
          rel="noopener noreferrer"
          :aria-label="`${item?.type} Profile`"
        >
          <svg-icon :icon="item?.type" :width="40" :height="40" />
          <span class="sr-only">{{ item?.type }} Profile</span>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from '@vue/runtime-core';
import SvgIcon from './commons/SvgIcon.vue';
import { usePortfolioStore } from '../store/pinia/portfolio';
export default {
  name: "FooterBar",
  components: {
    SvgIcon,
  },
  setup() {
    const portfolioStore = usePortfolioStore();
    const socialMediaArrData = computed(() => portfolioStore?.socialMedia);
    const isLoading = computed(() => portfolioStore?.isLoading);
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    }

    return {
      socialMediaArrData,
      isLoading,
      scrollToTop,
    }
  }
}
</script>

<style scoped>
</style>