<template>
<div class="py-10 px-2">
  <h1 class="text-center text-2xl font-medium">Checkout my Personal Projects</h1>
  <hr class="m-6" />
  <div class="grid grid-cols-2 gap-4">
    <div class="" v-for="(item, index) in projectArr"
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
import axios from 'axios';
import { onMounted, ref } from '@vue/runtime-core';

export default {
  name: "Project",
  components: {
    AppModal,
  },
  setup() {
    const projectArr = ref([]);
    const loadCount = async () => {      
      let result= await axios.get(`${process.env.VUE_APP_PORTFOLIO_BACKEND}/projects`);
      projectArr.value = result?.data;
    };

    onMounted(async () => await loadCount())

    return {
      projectArr,
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