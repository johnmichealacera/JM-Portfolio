<template>
  <div class="bg-intro text-white p-10 sm:p-20 bg-jm" :style="{ backgroundImage: `url(${ bgImage })` }">
    <div class="m-5" v-if="!isLoading">
      <h1 class="text-5xl font-semibold text-center">Hello, I'm {{ fullName }}.</h1>
      <p style="text-indent: 2em;" class="text-gray-200 leading-6 mt-3 text-lg">{{ jobDescription }}</p>  
    </div>
    <loader :isLoading="isLoading"/>
    <div v-if="!isLoading" class="pt-5 sm:pt-10 z-12 grid grid-cols-2 gap-2">
      <ul class="flex justify-evenly items-center h-48 text-lg font-medium" v-for="(item, index) in introArrData" :key="index">
        <li class="h-full text-xs sm:text-base">
          <svg-icon :icon="item?.icon"></svg-icon>  
          <a href=# class="hover:underline uppercase">{{ item?.title }}</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import SvgIcon from './commons/SvgIcon.vue';
import Loader from './commons/Loader.vue';
import { onMounted, ref } from '@vue/runtime-core';
import { usePortfolioStore } from '@/store/pinia/portfolio';
export default {
  name: "Introduction",
  components: {
    SvgIcon,
    Loader,
  },
  setup() {
    const portfolioStore = usePortfolioStore();
    const introArrData = ref([]);
    const fullName = ref('');
    const jobDescription = ref('');
    const bgImage = ref('');
    const isLoading = ref(false);

    onMounted(async () => {
      isLoading.value = true;
      await portfolioStore.fetchIntroductionsData(process.env.VUE_APP_USER_ID);
      await portfolioStore.fetchUserInfo(process.env.VUE_APP_USER_ID);
      introArrData.value = portfolioStore.introductionData?.expertise;
      fullName.value = portfolioStore.introductionData?.fullName;
      jobDescription.value = portfolioStore.introductionData?.jobDescription;
      isLoading.value = false;
      bgImage.value = portfolioStore.userInfoData?.bgUrl;
    });

    return {
      introArrData,
      isLoading,
      fullName,
      jobDescription,
      bgImage,
    }
  }
}
</script>

<style scoped>
  .bg-intro {
    background-color: #01a2a6;
  }
  .bg-jm {
    background-image: url('../../public/jm-profile.jpg');
    background-repeat: no-repeat;
    background-position: right top;
    background-size: 100% 100%;
  }
  .demo_wrap {
    position: relative;
    background: #01a2a6;
    overflow: hidden;
}
/* You could use :after - it doesn't really matter */
.demo_wrap:before {
    content: ' ';
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    z-index: 0;
    width: 100%;
    height: 100%;
    opacity: 0.20;
    background-image: url('../../public/jm-profile.jpg');
    background-repeat: no-repeat;
    background-position: right top;
    background-size: 40% 100%;
}
</style>