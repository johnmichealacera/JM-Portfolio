<template>
<div class="py-10 px-2">
  <h1 class="text-center text-2xl font-medium">Checkout my Personal Projects</h1>
  <hr class="m-6" />
  <loader :isLoading="isLoading"/>
  <div class="grid grid-cols-2 gap-4">
    <div v-for="(item, index) in projectArr"
    :key="index">
    <div class="bg-project sm:bg-center bg-left sm:bg-100 bg-cover sm:h-96 h-full" v-if="item?.backgroundImage" :style="{ backgroundImage: `url(${item?.backgroundImage})` }">
      <app-modal class="opacity-0 hover:opacity-100" :title="item?.title" :description="item?.description" :url="item?.url" :index="index+1"></app-modal>
    </div>
  </div>
  </div>
</div>
</template>

<script>
import AppModal from './AppModal.vue';
import Loader from './commons/Loader.vue';
import { usePortfolioStore } from '@/store/pinia/portfolio';
import { onMounted, onServerPrefetch, ref } from '@vue/runtime-core';

export default {
  name: "Project",
  props: { 
    userInfo:{ 
      type: Object,
    },
  },
  components: {
    AppModal,
    Loader,
  },
  setup() {
    const portfolioStore = usePortfolioStore();
    const projectArr = ref([]);
    const isLoading = ref(false);

    onMounted(async () => {
      isLoading.value = true;
      await portfolioStore.fetchProjectsData();
      projectArr.value = portfolioStore.projectData;
      isLoading.value = false;
    });

    onServerPrefetch(async () => {
      isLoading.value = true;
      await portfolioStore.fetchProjectsData();
      projectArr.value = portfolioStore.projectData;
      isLoading.value = false;
    });

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
  }
</style>