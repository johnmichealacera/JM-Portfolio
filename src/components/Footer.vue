<template>
  <div data-aos="fade-up" class="bg-color p-10 w-full">
    <h2 class="text-center text-3xl font-semibold mb-2">📬 Let's Connect</h2>
    <p class="text-center text-gray-600 mb-6 max-w-2xl mx-auto">
      Whether you're planning a new product, need an extra hand on your dev team, or just want to collaborate — I'd love to hear from you.
    </p>
    <div class="flex justify-center mb-4">
      <button class="flex text-gray-50 outline-none" @click="scrollToTop">
        <router-link to="/contact" class="hover:underline px-1">🚀 Let's build something great together</router-link>
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
import { usePortfolioStore } from '@/store/pinia/portfolio';
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