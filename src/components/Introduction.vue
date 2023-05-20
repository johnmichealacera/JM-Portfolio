<template>
  <app-head v-if="!isLoading" :meta="meta" />
  <div class="bg-right bg-cover bg-intro text-white p-10 sm:p-20" :style="{ backgroundImage: `url(${ userInfo?.picture })` }">
    <div class="m-3 sm:m-4" v-if="!isLoading">
      <h1 class="font-semibold text-center text-xl sm:text-3xl">Hello, I'm {{ fullName }}.</h1>
      <p style="text-indent: 2em;" class="text-gray-200 text-justify mt-3 text-sm sm:text-lg leading-tight sm:leading-normal">{{ jobDescription }}</p>  
    </div>
    <loader :isLoading="isLoading"/>
    <div v-if="!isLoading" class="pt-5 sm:pt-10 z-12 grid grid-cols-2 gap-2">
      <ul class="flex justify-evenly items-center h-48 text-lg font-medium" v-for="(item, index) in introArrData" :key="index">
        <li class="h-full text-xs sm:text-base">
          <svg-icon :icon="item?.icon" @mouseover="onMouseOver" @mouseout="onMouseOut" class="skill-icon"></svg-icon>  
          <a href=# class="uppercase">{{ item?.title }}</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import SvgIcon from './commons/SvgIcon.vue';
import Loader from './commons/Loader.vue';
import AppHead from './AppHead.vue';
import { onMounted, ref } from '@vue/runtime-core';
import { usePortfolioStore } from '@/store/pinia/portfolio';
export default {
  name: "Introduction",
  props: { 
    userInfo:{ 
      type: Object,
    },
  },
  components: {
    SvgIcon,
    Loader,
    AppHead,
  },
  setup() {
    const portfolioStore = usePortfolioStore();
    const introArrData = ref([]);
    const fullName = ref('');
    const jobDescription = ref('');
    const bgImage = ref('');
    const isLoading = ref(false);
    const isHover = ref(false);
    const meta = ref({});
    const onMouseOver = () => {
      isHover.value = true;
    };
    const onMouseOut = () => {
      isHover.value = false;
    };

    // Fetch data and update variables
    onMounted(async () => {
      isLoading.value = true;
      await portfolioStore.fetchIntroductionsData(process.env.VUE_APP_USER_EMAIL);
      await portfolioStore.fetchUserInfo(process.env.VUE_APP_USER_EMAIL);
      introArrData.value = portfolioStore.introductionData?.expertise;
      fullName.value = portfolioStore.introductionData?.fullName;
      jobDescription.value = portfolioStore.introductionData?.jobDescription;
      isLoading.value = false;
      bgImage.value = portfolioStore.introductionData?.backgroundUrl;
      meta.value = {
        fullName: portfolioStore.introductionData?.fullName,
        image: portfolioStore.introductionData?.backgroundUrl,
        url: portfolioStore.userInfoData?.website,
      }
    });

    return {
      introArrData,
      isLoading,
      fullName,
      jobDescription,
      bgImage,
      isHover,
      onMouseOver,
      onMouseOut,
      meta,
    }
  }
}
</script>
<style scoped>
.bg-intro {
  background-color: #01a2a6;
  background-position: right;
}
.skill-icon:hover {
  animation: scale 1s ease-in-out infinite alternate;
}
@keyframes scale {
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(1.2);
  }
}
</style>