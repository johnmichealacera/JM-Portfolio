<template>
<div data-aos="fade-up" class="p-4 sm:p-8 md:p-12 border-2 flex justify-evenly font-bold bg-forest">
  <div class="max-w-5xl w-full self-center sm:mx-4 text-cream">
    <h2 class="text-2xl sm:text-3xl">🤔 Why Am I Doing This?</h2>
    <h3 class="pt-1 text-xs sm:text-sm">Because I love challenges</h3>
    <loader :isLoading="isLoading"/>
    <p 
      class="pt-4 sm:pt-8 px-2 sm:px-0 text-justify text-sm sm:text-base md:text-lg leading-relaxed sm:leading-normal"
      style="text-indent: 2em;"
    >
      {{ userWhy }}
    </p>
  </div>
</div>
</template>

<script>
import { usePortfolioStore } from '../store/pinia/portfolio';
import { computed } from 'vue';
import Loader from './commons/Loader.vue';
export default {
  name: 'AboutMe',
  components: {
    Loader
  },
  setup() {
    const portfolioStore = usePortfolioStore();
    const userWhy = computed(() => portfolioStore?.userInfo?.userWhy);
    const isLoading = computed(() => portfolioStore?.isLoading);

    return {
      isLoading,
      userWhy,
    }
  }
}
</script>

<style scoped>
/* Add responsive styles for better mobile readability */
@media (max-width: 640px) {
  p {
    font-size: 0.9375rem; /* 15px */
    line-height: 1.6;
    letter-spacing: 0.01em;
    text-indent: 1.5em; /* Slightly smaller indent on mobile */
  }
}

/* Optional: Add a max-width for very small screens */
@media (max-width: 360px) {
  p {
    font-size: 0.875rem; /* 14px */
    text-indent: 1.25em; /* Even smaller indent for very small screens */
  }
}

/* Ensure proper text color contrast */
.text-cream {
  color: #f5f5f5;
}
</style>