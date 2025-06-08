<template>
<div data-aos="fade-up" class="p-4 sm:p-8 md:p-12 bg-opacity-50 border-2 flex justify-center">
    <div class="max-w-5xl w-full text-forest">
      <h2 class="text-center text-lg sm:text-xl md:text-3xl text-black">🙋‍♂️ A Little Information About Me</h2>
      <hr class="m-4 sm:m-6">
      <div>
        <loader :isLoading="isLoading"/>
        <p 
          class="text-justify text-sm sm:text-base md:text-lg leading-relaxed sm:leading-loose py-3 sm:py-5 px-2 sm:px-0"
        >
          {{ story }}
        </p>
      </div>
  </div>
</div>
</template>

<script>
import { usePortfolioStore } from '../store/pinia/portfolio';
import { onMounted, ref } from '@vue/runtime-core';
import Loader from './commons/Loader.vue';
export default {
  name: 'AboutMe',
  components: {
    Loader
  },
  setup() {
    const portfolioStore = usePortfolioStore();
    const isLoading = ref(false);
    const story = ref('');
    onMounted(async () => {
      isLoading.value = true;
      await portfolioStore.fetchUserInfo(process.env.VUE_APP_USER_ID);
      story.value = portfolioStore.userInfoData?.lifeStory;
      isLoading.value = false;
    })
    return {
      isLoading,
      story,
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
  }
}

/* Optional: Add a max-width for very small screens */
@media (max-width: 360px) {
  p {
    font-size: 0.875rem; /* 14px */
  }
}
</style>