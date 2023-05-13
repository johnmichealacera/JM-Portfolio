<template>
<div class="p-12 bg-color border-2 flex justify-evenly text-white font-bold sm:text-xl">
  <div class="max-w-5xl self-center sm:mx-4">
    <h1 class="text-3xl">Why am I doing this?</h1>
    <h6 class="pt-1 text-sm">Because I love challenges</h6>
    <loader :isLoading="isLoading"/>
    <p style="text-indent: 2em;" class="pt-8 text-justify text-base sm:text-lg leading-loose sm:leading-normal">{{ userWhy }}</p>
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
  props: { 
    userInfo:{ 
      type: Object,
    },
  },
  components: {
    Loader
  },
  setup() {
    const portfolioStore = usePortfolioStore();
    const isLoading = ref(false);
    const userWhy = ref('');
    onMounted(async () => {
      isLoading.value = true;
      await portfolioStore.fetchUserInfo(process.env.VUE_APP_USER_EMAIL);
      userWhy.value = portfolioStore.personalData?.whyDothis;
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