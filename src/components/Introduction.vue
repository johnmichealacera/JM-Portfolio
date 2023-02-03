<template>
  <div class="bg-intro text-white p-10 sm:p-20 bg-jm">
    <div class="m-5 text-center">
      <h1 class="text-5xl font-semibold">Hello, I'm JM Acera.</h1>
      <p>A Web Developer capable of creating websites that will suit your needs.</p>  
    </div>
    <loader :isLoading="isLoading"/>
    <div v-if="!isLoading" class="pt-5 sm:pt-10 z-12 grid grid-cols-3 gap-4">
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
import SvgIcon from './SvgIcon.vue';
import Loader from './commons/Loader.vue';
import axios from 'axios';
import { onMounted, ref } from '@vue/runtime-core';
export default {
  name: "Introduction",
  components: {
    SvgIcon,
    Loader,
  },
  setup() {
    const introArrData = ref([]);
    const isLoading = ref(false);
    const loadIntroData = async () => {  
      isLoading.value = true;    
      let result= await axios.get(`${process.env.VUE_APP_PORTFOLIO_BACKEND}/introduction`);
      introArrData.value = result?.data;
      isLoading.value = false;
    };

    onMounted(async () => await loadIntroData())

    return {
      introArrData,
      isLoading,
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