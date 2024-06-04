<template>
  <div class="bg-color p-4 w-full">
    <div class="flex justify-center mb-4">
      <button class="flex text-gray-50 outline-none" @click="scrollToTop">
        <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 12.713l-11.985-9.713h23.97l-11.985 9.713zm0 2.574l-12-9.725v15.438h24v-15.438l-12 9.725z"/></svg>
        <router-link to="/contact" class="hover:underline px-1">Get in touch with me</router-link>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#fff"><path d="M24 12l-9-8v6h-15v4h15v6z"/></svg>
      </button>
    </div>
    <div class="flex justify-center">
      <div class="flex justify-center items-center" v-for="(item, index) in socialMediaArrData" :key="index">
        <a class="px-2" :href=item?.url target="_blank">
          <svg-icon :icon="item?.type" :width="40" :height="40"></svg-icon>  
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted, ref } from '@vue/runtime-core';
import SvgIcon from './commons/SvgIcon.vue';
import { usePortfolioStore } from '../store/pinia/portfolio';
export default {
  name: "FooterBar",
  components: {
    SvgIcon,
  },
  setup() {
    const portfolioStore = usePortfolioStore();
    const socialMediaArrData = ref([]);
    const isLoading = ref(false);
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    }

    onMounted(async () => {
      isLoading.value = true; 
      await portfolioStore.fetchSocialMediaData(process.env.VUE_APP_USER_ID);
      socialMediaArrData.value = portfolioStore.socialMediaData;
      isLoading.value = false;
    })

    return {
      socialMediaArrData,
      isLoading,
      scrollToTop,
    }
  }
}
</script>

<style scoped>
.bg-color {
    background-color: #01a2a6;
  }
</style>