<template>
  <div class="p-12 bg-yellow-50 bg-opacity-50 border-2 bg-gray-200 flex justify-center">
    <div class="max-w-5xl">
      <h1 class="text-center text-2xl font-medium">Here is a little of my story</h1>
      <hr class="m-6">
      <loader :isLoading="isLoading"/>
      <p class="text-justify leading-loose py-5">{{  story }}</p>
    </div>
  </div>
</template>

<script>
import { usePortfolioStore } from '@/store/pinia/portfolio';
import { onMounted, ref } from '@vue/runtime-core';
import Loader from './commons/Loader.vue';
export default {
  name: "PersonalStory",
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
    const story = ref('');
    onMounted(async () => {
      isLoading.value = true;
      await portfolioStore.fetchPersonalData(process.env.VUE_APP_USER_EMAIL);
      story.value = portfolioStore.personalData?.lifeStory;
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