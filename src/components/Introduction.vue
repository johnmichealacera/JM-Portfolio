<template>
  <div data-aos="fade-up" class="bg-cream p-10 sm:p-15">
    <div v-if="!isLoading" class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
      <!-- Left: Text Content -->
      <div ref="leftContent" class="m-3 sm:m-4 flex flex-col justify-center">
        <h1 class="font-bold text-xl sm:text-4xl text-forest text-center md:text-left">
          👋 Hello, I'm <span class="text-burnt">John Micheal Acera</span>.
        </h1>
        <p style="text-indent: 2em;" class="text-justify mt-3 text-sm sm:text-lg leading-tight sm:leading-normal text-forest">
          {{ jobDescription }}
        </p>
        <div class="pt-5 sm:pt-10 grid grid-cols-2 gap-4">
          <ul class="flex flex-col justify-evenly h-full text-lg font-medium text-forest" v-for="(item, index) in introArrData" :key="index">
            <li class="text-xs sm:text-base flex items-center gap-2">
              <svg-icon :icon="item?.icon" @mouseover="onMouseOver" @mouseout="onMouseOut" class="skill-icon" />
              <a href="#" class="uppercase text-forest hover:text-gold transition-colors duration-300">
                {{ item?.title }}
              </a>
            </li>
          </ul>
        </div>
      </div>
      <!-- Right: Profile Image with dynamic height -->
      <div class="flex justify-center">
        <img
          ref="profileImage"
          src="/john.webp"
          alt="John Micheal Acera"
          class="rounded-lg shadow-lg object-cover border-4 border-gold w-full max-w-xs"
          :style="{ height: imageHeight + 'px' }"
        />
      </div>
    </div>
    <!-- Loader -->
    <loader :isLoading="isLoading" />
  </div>
</template>

<script>
import SvgIcon from './commons/SvgIcon.vue';
import Loader from './commons/Loader.vue';
import { onMounted, ref, nextTick, computed, onUnmounted } from 'vue';
import { usePortfolioStore } from '../store/pinia/portfolio';
export default {
  name: "Introduction",
  components: {
    SvgIcon,
    Loader,
  },
  setup() {
      const imageHeight = ref(null);
    const leftContent = ref(null);

    const setHeight = () => {
      if (leftContent.value) {
        imageHeight.value = leftContent.value.offsetHeight;
      }
    };
    onMounted(() => {
      nextTick(() => {
        setHeight();
        window.addEventListener('resize', setHeight);
      });
    });
    onUnmounted(() => {
      window.removeEventListener('resize', setHeight);
    });
    const portfolioStore = usePortfolioStore();
    const isHover = ref(false);
    // Use computed properties that react to store changes
    const introArrData = computed(() => portfolioStore?.introductions?.expertise);
    const fullName = computed(() => portfolioStore?.introductions?.fullName);
    const jobDescription = computed(() => portfolioStore?.introductions?.jobDescription);
    const bgImage = computed(() => portfolioStore?.userInfoData?.bgUrl);
    const isLoading = computed(() => portfolioStore?.isLoading);
    const onMouseOver = () => {
      isHover.value = true;
    };
    const onMouseOut = () => {
      isHover.value = false;
    };

    return {
      introArrData,
      isLoading,
      fullName,
      jobDescription,
      bgImage,
      isHover,
      onMouseOver,
      onMouseOut,
      imageHeight,
      leftContent,
    }
  }
}
</script>
<style scoped>
.bg-intro {
  background-color: #01a2a6;
  background-position: right;
}
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