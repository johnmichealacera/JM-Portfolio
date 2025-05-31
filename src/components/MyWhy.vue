<template>
<div data-aos="fade-up" class="p-12 border-2 flex justify-evenly font-bold sm:text-xl bg-olive">
  <div class="max-w-5xl self-center sm:mx-4 text-cream">
    <h2 class="text-3xl">🤔 Why Am I Doing This?</h2>
    <h3 class="pt-1 text-sm">Because I love challenges</h3>
    <loader :isLoading="isLoading"/>
    <p style="text-indent: 2em;" class="pt-8 text-justify text-base sm:text-lg leading-loose sm:leading-normal">{{ userWhy }}</p>
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
    const userWhy = ref('');
    onMounted(async () => {
      isLoading.value = true;
      await portfolioStore.fetchUserInfo(process.env.VUE_APP_USER_ID);
      userWhy.value = portfolioStore.userInfoData?.userWhy;
      isLoading.value = false;
    })
    return {
      isLoading,
      userWhy,
    }
  }
}
</script>

<style scoped>
</style>