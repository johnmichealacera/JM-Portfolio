<template>
  <div data-aos="fade-up" class="p-12 border-2 bg-white flex justify-center">
    <div class="max-w-5xl">
      <h1 class="text-center text-2xl font-medium text-forest">🎯 My Journey</h1>
      <hr class="m-6">
      <loader :isLoading="isLoading"/>
      <p v-if="!isLoading" class="text-justify leading-loose py-5 text-forest">{{  story }}</p>
    </div>
  </div>
</template>

<script>
import { usePortfolioStore } from '../store/pinia/portfolio';
import { onMounted, ref } from '@vue/runtime-core';
import Loader from './commons/Loader.vue';
export default {
  name: "PersonalStory",
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

</style>