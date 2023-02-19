<template>
  <div class="contact h-80 w-full min-h-full flex justify-center items-center flex-auto justify-items-center p-12 ">
    <loader :isLoading="isLoading"/>
    <div class="border-2 rounded-full bg-white flex flex-col justify-center w-auto p-6 items-center" v-if="!isLoading">
      <svg viewBox="0 0 50 50" height="50" width="50" xmlns="http://www.w3.org/2000/svg"><g transform="matrix(2.0833333333333335,0,0,2.0833333333333335,0,0)"><path d="M6.5 23L8.5 21 6.5 19" fill="none" stroke="#01a2a6" stroke-linecap="round" stroke-linejoin="round"></path><path d="M1,8.979A1.517,1.517,0,0,0,2.5,10.5h9A1.518,1.518,0,0,0,13,8.979V3a1.5,1.5,0,0,0-1.5-1.5h-9A1.5,1.5,0,0,0,1,3Z" fill="none" stroke="#01a2a6" stroke-linecap="round" stroke-linejoin="round"></path><path d="M1 7.5L13 7.5" fill="none" stroke="#01a2a6" stroke-linecap="round" stroke-linejoin="round"></path><path d="M4.5 12.5L9.5 12.5" fill="none" stroke="#01a2a6" stroke-linecap="round" stroke-linejoin="round"></path><path d="M7 10.5L7 12.5" fill="none" stroke="#01a2a6" stroke-linecap="round" stroke-linejoin="round"></path><path d="M14,11.5a1,1,0,0,1,1-1h6a1,1,0,0,1,1,1v11a1,1,0,0,1-1,1H15a1,1,0,0,1-1-1Z" fill="none" stroke="#01a2a6" stroke-linecap="round" stroke-linejoin="round"></path><path d="M2.5,16a5,5,0,0,0,5,5h1" fill="none" stroke="#01a2a6" stroke-linecap="round" stroke-linejoin="round"></path><path d="M18.5 1L16.5 3 18.5 5" fill="none" stroke="#01a2a6" stroke-linecap="round" stroke-linejoin="round"></path><path d="M22.5,8a5,5,0,0,0-5-5h-1" fill="none" stroke="#01a2a6" stroke-linecap="round" stroke-linejoin="round"></path><path d="M14 19.5L22 19.5" fill="none" stroke="#01a2a6" stroke-linecap="round" stroke-linejoin="round"></path><path d="M18,21.25a.25.25,0,1,0,.25.25.25.25,0,0,0-.25-.25h0" fill="none" stroke="#01a2a6" stroke-linecap="round" stroke-linejoin="round"></path></g></svg>
      <div class="text-5xl font-semibold py-2">
        <h1>{{ userDetailsData?.fullName }}</h1>
      </div>
      <h3 class="font-semibold">{{ userDetailsData?.email }}</h3>
      <!-- <h3 class="font-semibold">+639-059-666-509</h3> -->
      <h3 class="font-semibold">{{ userDetailsData?.contactNumber }}</h3>
    </div>
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
    const userDetailsData = ref('');
    onMounted(async () => {
      isLoading.value = true;
      await portfolioStore.fetchUserDetails(process.env.VUE_APP_USER_ID);
      userDetailsData.value = portfolioStore?.userDetailsData;
      isLoading.value = false;
    })
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