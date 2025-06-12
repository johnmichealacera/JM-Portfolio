<template>
  <div data-aos="fade-up" class="p-4 sm:p-8 md:p-12 border-2 bg-white flex justify-center">
    <div class="max-w-5xl w-full">
      <h1 class="text-center text-xl sm:text-2xl font-medium text-forest">🎯 My Journey</h1>
      <hr class="m-4 sm:m-6">
      <loader :isLoading="isLoading"/>
      <p 
        v-if="!isLoading" 
        class="text-justify text-base sm:text-lg leading-relaxed sm:leading-loose py-3 sm:py-5 px-2 sm:px-0 text-forest"
      >
        {{ story }}
      </p>
    </div>
  </div>
</template>

<script>
import { usePortfolioStore } from '../store/pinia/portfolio';
import { computed } from '@vue/runtime-core';
import Loader from './commons/Loader.vue';
export default {
  name: "PersonalStory",
  components: {
    Loader
  },
  setup() {
    const portfolioStore = usePortfolioStore();
    const story = computed(() => portfolioStore?.userInfo?.lifeStory);
    const isLoading = computed(() => portfolioStore?.isLoading);
    return {
      isLoading,
      story,
    }
  }
}
</script>

<style scoped>
/* Add responsive styles */
@media (max-width: 640px) {
  p {
    font-size: 0.9375rem; /* 15px */
    line-height: 1.6;
    letter-spacing: 0.01em;
  }
}

/* Optional: Add a max-width for very small screens */
@media (max-width: 360px) {
  p {
    font-size: 0.875rem; /* 14px */
  }
}
</style>