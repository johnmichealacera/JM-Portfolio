<template>
<div class="p-12 border-2 flex justify-evenly bg-color bg-opacity-0 text-white font-bold sm:text-xl">
  <div class="max-w-5xl self-center sm:mx-4">
    <h1 class="text-3xl">Why am I doing this?</h1>
    <h6 class="pt-1 text-sm">Because I love challenges</h6>
    <loader :isLoading="isLoading"/>
    <p class="pt-8 text-justify leading-loose">{{ userWhy }}</p>
  </div>
  <!-- <div>
    <img src="../../public/jm-adventure.jpg" alt="Challenge photo" width="500" height="600" class="hidden sm:block">
  </div> -->
</div>
</template>

<script>
import { usePortfolioStore } from '@/store/pinia/portfolio';
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
  .bg-color{
    background-color: #01a2a6;
  }
</style>