<template>
  <div class="flex justify-evenly items-center text-xs font-black text-gray-500 p-10">
    <loader :isLoading="isLoading"/>
    <router-link to="/" class="hover:bg-green-700 uppercase text-white text-xl name-link rounded-full p-2 mr-2" v-if="!isLoading">{{ fullName }}</router-link>
    <ul class="flex space-x-4">
      <li class=""><router-link to="/" class="hover:underline sm:p-6 uppercase">Home</router-link></li>
      <li class=""><router-link to="/about" class="hover:underline sm:p-6 uppercase">About Me</router-link></li>
      <li class=""><router-link to="/portfolio" class="hover:underline sm:p-6 uppercase">Portfolio</router-link></li>
      <li class=""><router-link to="/contact" class="hover:underline sm:p-6 uppercase">Contact</router-link></li>
    </ul>
  </div>
</template>

<script>
import Loader from './commons/Loader.vue';
import { onMounted, ref } from '@vue/runtime-core';
import { usePortfolioStore } from '@/store/pinia/portfolio';
export default {
  name: 'Taskbar',
  components: {
    Loader,
  },
  setup() {
    const portfolioStore = usePortfolioStore();
    const fullName = ref('');
    const isLoading = ref(false);

    onMounted(async () => {
      isLoading.value = true;
      await portfolioStore.fetchIntroductionsData(process.env.VUE_APP_USER_ID);
      fullName.value = portfolioStore.introductionData?.fullName;
      isLoading.value = false;
    });

    return {
      fullName,
    }
  }
}
</script>

<style scoped>
  .name-link {
    background-color: #01a2a6;
  }
  .name-link:hover {
    opacity: 0.8;
  }
</style>