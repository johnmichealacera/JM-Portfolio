<template>
  <div class="border-2 p-2 sm:p-10 bg-yellow-50 bg-opacity-50">
    <h1 class="text-center text-xl sm:text-2xl font-medium">My Skills</h1>
    <hr class="sm:m-2">
    <div class="grid grid-cols-3 gap-4">
      <div class="flex justify-evenly text-xs sm:text-base" v-for="(type, index) in skillsTypeArr" :key="index">
        <div class="w-full m-4">
          <h1 class="font-semibold capitalize">{{ type }}</h1>
          <ul class="font-black text-right" v-for="(item, index) in filterSkillsByType(type)" :key="index">
            <li class="capitalize">{{ item?.name }}
              <div class="overflow-hidden h-2 mb-4 text-xs flex rounded bg-pink-200">
                <div :style="`width:${item?.mastery}%`" class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-color"></div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    
  </div>
</template>

<script>
import axios from 'axios';
import { onMounted, ref } from '@vue/runtime-core';
export default {
  name: "Skill.vue",
  setup() {
    const skillsArr = ref([]);
    const skillsTypeArr = ref([]);
    const loadIntroData = async () => {      
      let result= await axios.get(`${process.env.VUE_APP_PORTFOLIO_BACKEND}/skills`);
      const uniqueSkillsType = [...new Set(result?.data.map((item) => item.type))];
      console.log(uniqueSkillsType);
      
      skillsTypeArr.value = uniqueSkillsType;
      skillsArr.value = result?.data;
    };
    const filterSkillsByType = (type) => {
      return skillsArr.value.filter(item => item.type === type);
    }

    onMounted(async () => await loadIntroData());

    return {
      skillsTypeArr,
      filterSkillsByType,
    }
  }
}
</script>

<style scoped>
  .bg-color {
    background-color: #01a2a6;
  }
</style>