<template>
  <div data-aos="fade-up" class="p-12 border-2 flex justify-center">
    <div class="flex flex-col">
      <h2 class="text-xl sm:text-3xl mb-3 text-black">💡 A Few Things You Should Know</h2>
      <loader :isLoading="isLoading"/>
      <div class="grid grid-flow-col gap-4 grid-cols-2 grid-rows-2" v-if="!isLoading">
        <div v-for="(item, index) in softSkillsArr" :key="index">
          <div data-aos="flip-down" data-aos-duration="1300" data-aos-delay="400">
            <svg-icon :icon="item?.icon" @mouseover="onMouseOver" @mouseout="onMouseOut" class="skill-icon"></svg-icon>  
            <div class="p-2 text-sm sm:text-lg leading-tight sm:leading-normal tracking-tighter">
              <h2 class="font-semibold text-forest">{{ item?.name }}</h2>
              <hr class="my-2">
              <p class="text-start sm:text-justify text-forest">{{ item?.shortDescription }}</p>
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
import { usePortfolioStore } from '../store/pinia/portfolio';
import { ref, computed } from 'vue';

export default {
  name: "AboutSkill",
  components: {
    Loader,
    SvgIcon,
  },
  setup() {
    const portfolioStore = usePortfolioStore();
    const softSkillsArr = computed(() => portfolioStore?.softSkills);
    const isLoading = computed(() => portfolioStore?.isLoading);
    const isHover = ref(false);
    const onMouseOver = () => {
      isHover.value = true;
    };
    const onMouseOut = () => {
      isHover.value = false;
    };

    return {
      softSkillsArr,
      isLoading,
      onMouseOver,
      onMouseOut,
    };
  }
}
</script>

<style scoped>
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