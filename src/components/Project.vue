<template>
  <section id="project" data-aos="fade-up" class="py-10 px-2 bg-white">
    <h2 class="text-center sm:text-5xl text-2xl font-semibold mb-2 text-forest">💼 Selected Projects</h2>
    <p class="text-center text-black mb-6 max-w-2xl mx-auto">
      A showcase of applications I've built to solve real-world problems and explore creative ideas — combining performance, usability, and modern design.
    </p>
    <hr class="m-6" />
    <loader :isLoading="isLoading"/>
    <div v-if="!isLoading" class="grid grid-cols-2 gap-4">
      <div v-for="(item, index) in projectArr"
      :key="index">
      <div data-aos="zoom-in" data-aos-delay="400" data-aos-duration="1400" class="bg-project bg-center bg-cover h-64 sm:h-96 rounded-xl shadow-md" v-if="item?.imageLink" :style="{ backgroundImage: `url(${item?.imageLink})` }">
        <app-modal class="opacity-0 hover:opacity-100" :title="item?.title" :description="item?.description" :url="item?.url" :index="index+1"></app-modal>
      </div>
    </div>
    </div>
  </section>
</template>

<script>
import AppModal from './AppModal.vue';
import Loader from './commons/Loader.vue';
import { usePortfolioStore } from '../store/pinia/portfolio';
import { computed } from 'vue';

export default {
  name: "Project",
  components: {
    AppModal,
    Loader,
  },
  setup() {
    const portfolioStore = usePortfolioStore();
    const projectArr = computed(() => portfolioStore?.projects);
    const isLoading = computed(() => portfolioStore?.isLoading);

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