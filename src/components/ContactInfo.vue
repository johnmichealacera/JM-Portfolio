<template>
  <div class="contact h-80 w-full min-h-full flex justify-center items-center flex-auto justify-items-center p-12 ">
    <loader :isLoading="isLoading"/>
    <div class="border-2 rounded-full bg-white flex flex-col justify-center w-auto p-6 items-center" v-if="!isLoading">
      <svg-icon icon="contactMe"></svg-icon>  
      <div class="text-lg sm:text-5xl font-semibold py-2">
        <h1>{{ userDetailsData?.fullName }}</h1>
      </div>
      <h3 class="font-semibold">{{ userDetailsData?.email }}</h3>
      <h3 class="font-semibold">{{ userDetailsData?.contactNumber }}</h3>
    </div>
  </div>
</template>

<script>
import SvgIcon from './commons/SvgIcon.vue';
import { usePortfolioStore } from '@/store/pinia/portfolio';
import { onMounted, onServerPrefetch, ref } from '@vue/runtime-core';
import Loader from './commons/Loader.vue';
export default {
  name: 'AboutMe',
  props: { 
    userInfo:{ 
      type: Object,
    },
  },
  components: {
    Loader,
    SvgIcon
  },
  setup() {
    const portfolioStore = usePortfolioStore();
    const isLoading = ref(false);
    const userDetailsData = ref('');
    onMounted(async () => {
      isLoading.value = true;
      await portfolioStore.fetchUserDetails('jeanndelapena22@gmail.com');
      userDetailsData.value = portfolioStore?.userDetailsData;
      isLoading.value = false;
    });

    onServerPrefetch(async () => {
      isLoading.value = true;
      await portfolioStore.fetchUserDetails('jeanndelapena22@gmail.com');
      userDetailsData.value = portfolioStore?.userDetailsData;
      isLoading.value = false;
    });
    return {
      isLoading,
      userDetailsData,
    }
  }
}
</script>

<style scoped>
  .contact {
    background-color: #01a2a6;
  }
</style>