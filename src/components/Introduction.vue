<template>
  <div data-aos="fade-up" class="bg-cream p-10 sm:p-15">
    <div v-if="!isLoading" class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
      
      <!-- Left: Text Content -->
      <div class="m-3 sm:m-4">
        <h1 class="font-bold text-xl sm:text-4xl text-forest text-center md:text-left">
          👋 Hello, I'm <span class="text-burnt">John Micheal Acera</span>.
        </h1>
        <p style="text-indent: 2em;" class="text-justify mt-3 text-sm sm:text-lg leading-tight sm:leading-normal text-forest">
          {{ jobDescription }}
        </p>
        <div class="pt-5 sm:pt-10 grid grid-cols-2 gap-4">
          <ul class="flex flex-col justify-evenly h-full text-lg font-medium text-forest" v-for="(item, index) in introArrData" :key="index">
            <li class="text-xs sm:text-base flex items-center gap-2">
              <svg-icon :icon="item?.icon" @mouseover="onMouseOver" @mouseout="onMouseOut" class="skill-icon" />
              <a href="#" class="uppercase text-forest hover:text-gold transition-colors duration-300">
                {{ item?.title }}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <!-- Right: Profile Image -->
      <div class="flex justify-center md:justify-end">
        <img :src="bgImage || 'https://live.staticflickr.com/65535/54555592319_70b91a3ef4_b.jpg'" alt="John Micheal Acera" class="h-auto rounded-full shadow-lg object-cover border-4 border-gold" />
      </div>

    </div>

    <!-- Loader -->
    <loader :isLoading="isLoading" />
  </div>
</template>

<script>
import SvgIcon from './commons/SvgIcon.vue';
import Loader from './commons/Loader.vue';
import { onMounted, ref } from '@vue/runtime-core';
import { usePortfolioStore } from '../store/pinia/portfolio';
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
    const isHover = ref(false);
    const onMouseOver = () => {
      isHover.value = true;
    };
    const onMouseOut = () => {
      isHover.value = false;
    };


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
      isHover,
      onMouseOver,
      onMouseOut,
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