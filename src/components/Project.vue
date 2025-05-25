<template>
  <section id="project" data-aos="fade-up" class="py-10 px-2">
    <h2 class="text-center text-3xl font-semibold mb-2">💼 Selected Projects</h2>
    <p class="text-center text-gray-600 mb-6 max-w-2xl mx-auto">
      A showcase of applications I've built to solve real-world problems and explore creative ideas — combining performance, usability, and modern design.
    </p>
    <hr class="m-6" />
    <loader :isLoading="isLoading"/>
    <div class="grid grid-cols-2 gap-4">
      <div v-for="(item, index) in projectArr"
      :key="index">
      <div data-aos="zoom-in" data-aos-delay="400" data-aos-duration="1400" class="bg-project sm:bg-center bg-left sm:bg-100 bg-cover sm:h-96 h-full" v-if="item?.imageLink" :style="{ backgroundImage: `url(${item?.imageLink})` }">
        <app-modal class="opacity-0 hover:opacity-100" :title="item?.title" :description="item?.description" :url="item?.url" :index="index+1"></app-modal>
      </div>
    </div>
    </div>
  </section>
</template>

<script>
import AppModal from './AppModal.vue';
import Loader from './commons/Loader.vue';
import { usePortfolioStore } from '@/store/pinia/portfolio';
import { onMounted, ref } from '@vue/runtime-core';

export default {
  name: "Project",
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
      await portfolioStore.fetchProjectsData(process.env.VUE_APP_USER_ID);
      projectArr.value = portfolioStore.projectData;
      isLoading.value = false;
    })

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