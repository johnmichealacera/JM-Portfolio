<template>
  <div class="h-80 w-full min-h-full flex justify-center items-center flex-auto justify-items-center p-12 bg-olive">
    <div class="border-2 rounded-full flex flex-col justify-center w-auto p-6 items-center bg-cream" v-if="!isLoading">
      <svg-icon icon="contactMe"></svg-icon>  
      <div class="text-lg sm:text-5xl font-semibold py-2 text-forest">
        <!-- Hardcoding fullname for SEO visibility -->
        <h1><strong>John Micheal Acera</strong></h1>
      </div>
      <loader :isLoading="isLoading"/>
      <h2 class="font-semibold">📧 Email: {{ userDetailsData?.email }}</h2>
      <h2 class="font-semibold">📱 Phone: {{ userDetailsData?.contactNumber }}</h2>
    </div>
  </div>
</template>

<script>
import SvgIcon from './commons/SvgIcon.vue';
import { usePortfolioStore } from '../store/pinia/portfolio';
import { computed } from '@vue/runtime-core';
import Loader from './commons/Loader.vue';
export default {
  name: 'AboutMe',
  components: {
    Loader,
    SvgIcon
  },
  setup() {
    const portfolioStore = usePortfolioStore();
    const userDetailsData = computed(() => portfolioStore.userDetails);
    const isLoading = computed(() => portfolioStore.isLoading);

    return {
      isLoading,
      userDetailsData,
    }
  }
}
</script>

<style scoped>
</style>