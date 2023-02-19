<template>
  <div class="p-12 bg-yellow-50 bg-opacity-50 border-2 bg-gray-200 flex justify-center">
    <div class="flex flex-col">
      <h1 class="text-xl sm:text-3xl mb-3">A few things you need to know</h1>
      <loader :isLoading="isLoading"/>
      <div class="grid grid-flow-col gap-4 grid-cols-2 grid-rows-2" v-if="!isLoading">
        <div v-for="(item, index) in softSkillsArr" :key="index">
          <div class="flex items-center">
            <svg-icon :icon="item?.icon"></svg-icon>  
            <div class="p-2 text-sm">
              <h2 class="font-semibold">{{ item?.name }}</h2>
              <hr class="my-2">
              <p class="text-justify">{{ item?.shortDescription }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SvgIcon from './commons/SvgIcon.vue';
import Loader from './commons/Loader.vue';
import { usePortfolioStore } from '@/store/pinia/portfolio';
import { onMounted, ref } from '@vue/runtime-core';

export default {
  name: "AboutSkill",
  components: {
    Loader,
    SvgIcon,
  },
  setup() {
    const portfolioStore = usePortfolioStore();
    const softSkillsArr = ref([]);
    const isLoading = ref(false);

    onMounted(async () => {
      isLoading.value = true;
      await portfolioStore.fetchSoftSkills(process.env.VUE_APP_USER_ID);
      softSkillsArr.value = portfolioStore.softSkillsData;
      isLoading.value = false;
    })

    return {
      softSkillsArr,
      isLoading,
    };
  }
}
</script>

<style scoped>
/* TODO: make this style work on big screens */
.logo-border {
    @apply rounded-full border-4 border-green-700;
  }
</style>