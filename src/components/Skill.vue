<template>
  <div data-aos="fade-up" class="border-2 p-2 sm:p-10 bg-yellow-50 bg-opacity-50">
    <h2 class="text-center text-xl sm:text-2xl font-medium">🛠️ My Skills</h2>
    <hr class="sm:m-2">
    <loader :isLoading="isLoading"/>
    <div v-if="!isLoading" class="grid grid-cols-3 gap-4">
      <div class="flex justify-evenly text-xs sm:text-base" v-for="(type, index) in skillsTypeArr" :key="index">
        <div class="w-full m-4">
          <h3 class="font-semibold capitalize">{{ type }}</h3>
          <ul class="font-black text-right" v-for="(item, index) in filterSkillsByType(type)" :key="index">
            <li data-aos="flip-up" class="capitalize sm:text-base text-xs" style="position:relative;">{{ item?.name }}
              <span v-if="hoveredItem === item" class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 sm:p-2 rounded shadow popup text-xs sm:text-xs">{{ item.mastery }}%</span>
              <div class="overflow-hidden h-2 mb-4 text-xs flex rounded bg-pink-200">
                <div :style="`width:${item?.mastery}%`" class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-color" @mouseover="hoveredItem = item" @mouseout="hoveredItem = null" @click="handleClick(item)" @touchstart="handleClick(item)"></div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    
  </div>
</template>

<script>
import Loader from './commons/Loader.vue';
import { onMounted, ref } from '@vue/runtime-core';
import { usePortfolioStore } from '@/store/pinia/portfolio';
export default {
  name: "Skill.vue",
  components: {
    Loader,
  },
  setup() {
    const portfolioStore = usePortfolioStore();
    const skillsArr = ref([]);
    const skillsTypeArr = ref([]);
    const isLoading = ref(false);
    const hoveredItem = ref(null);
    const loadIntroData = async () => {    
      const uniqueSkillsType = [...new Set(portfolioStore?.skillData.map((item) => item.type))];
      skillsTypeArr.value = uniqueSkillsType;
      skillsArr.value = portfolioStore?.skillData;
      isLoading.value = false; 
    };
    const filterSkillsByType = (type) => {
      return skillsArr.value.filter(item => item.type === type);
    }
    const handleClick = (item) => {
      setTimeout(() => {
        hoveredItem.value = null;
      }, 2000);
      hoveredItem.value = item;
    }

    onMounted(async () => {
      isLoading.value = true;  
      await portfolioStore.fetchSkillsData(process.env.VUE_APP_USER_ID);
      await loadIntroData();
    });

    return {
      skillsTypeArr,
      filterSkillsByType,
      isLoading,
      handleClick,
      hoveredItem,
    }
  }
}
</script>

<style scoped>
  .bg-color {
    background-color: #01a2a6;
  }
  .popup {
    color: orange;
  }
</style>