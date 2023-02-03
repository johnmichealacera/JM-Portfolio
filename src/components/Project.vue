<template>
<div class="py-10 px-2">
  <h1 class="text-center text-2xl font-medium">Checkout my Personal Projects</h1>
  <hr class="m-6" />
  <loader :isLoading="isLoading"/>
  <div class="grid grid-cols-2 gap-4">
    <div v-for="(item, index) in projectArr"
    :key="index">
    <div class="bg-project h-96 group" v-if="item?.imageLink" :style="{ backgroundImage: `url(${item?.imageLink})` }">
      <app-modal class="opacity-0 hover:opacity-100" :title="item?.title" :description="item?.description" :url="item?.url" :index="index+1"></app-modal>
    </div>
  </div>
  </div>
</div>
</template>

<script>
import AppModal from './AppModal.vue';
import Loader from './commons/Loader.vue';
import axios from 'axios';
import { onMounted, ref } from '@vue/runtime-core';

export default {
  name: "Project",
  components: {
    AppModal,
    Loader,
  },
  setup() {
    const projectArr = ref([]);
    const isLoading = ref(false);
    const loadCount = async () => {  
      isLoading.value = true;    
      let result= await axios.get(`${process.env.VUE_APP_PORTFOLIO_BACKEND}/projects`);
      projectArr.value = result?.data;
      isLoading.value = false;
    };

    onMounted(async () => await loadCount())

    return {
      projectArr,
      isLoading,
    };
  }
}
</script>

<style scoped>
  .bg-project {
    background-repeat: no-repeat;
    background-size: 100% 100%;;
  }
</style>