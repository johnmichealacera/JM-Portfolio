<template>
  <section class="relative min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 overflow-hidden">
    <!-- Background Pattern -->
    <div class="absolute inset-0 opacity-5">
      <div class="absolute inset-0" style="background-image: radial-gradient(circle at 1px 1px, #3b82f6 1px, transparent 0); background-size: 40px 40px;"></div>
    </div>
    
    <!-- Decorative Elements -->
    <div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-200 to-purple-200 rounded-full blur-3xl opacity-30"></div>
    <div class="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-purple-200 to-blue-200 rounded-full blur-2xl opacity-30"></div>
    
    <div class="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
      <div v-if="!isLoading" class="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6 items-center">
        <!-- Left: Content Section -->
        <div ref="leftContent" class="space-y-6">
          <!-- Greeting and Name -->
          <div class="space-y-3">
            <div class="inline-flex items-center space-x-3 bg-white/70 backdrop-blur-sm rounded-2xl px-6 py-3 shadow-lg border border-white/50">
              <span class="text-2xl">👋</span>
              <span class="text-gray-600 font-medium">Hello, I'm</span>
            </div>
            <h1 class="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
              <span class="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                John Micheal Acera
              </span>
            </h1>
          </div>

          <!-- Job Description -->
          <div class="bg-white/70 backdrop-blur-sm rounded-2xl p-6 lg:p-8 shadow-xl border border-white/50">
            <p class="text-xl lg:text-2xl text-gray-700 leading-relaxed font-medium">
              {{ jobDescription }}
            </p>
          </div>

          <!-- Expertise Grid -->
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div 
              v-for="(item, index) in introArrData" 
              :key="index"
              class="group bg-white/70 backdrop-blur-sm rounded-xl p-4 lg:p-6 shadow-lg border border-white/50 hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <div class="flex items-center space-x-3 lg:space-x-4">
                <div class="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                  <svg-icon 
                    :icon="item?.icon" 
                    class="w-5 h-5 lg:w-6 lg:h-6 text-white"
                    @mouseover="onMouseOver" 
                    @mouseout="onMouseOut" 
                  />
                </div>
                <div>
                  <h3 class="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-300 text-sm lg:text-base">
                    {{ item?.title }}
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Right: Profile Image -->
        <div class="flex justify-center lg:justify-end">
          <div class="relative">
            <!-- Image Container -->
            <div class="relative">
              <img
                ref="profileImage"
                src="/jm-bg.png"
                alt="John Micheal Acera"
                class="w-72 h-72 lg:w-80 lg:h-80 xl:w-96 xl:h-96 rounded-3xl shadow-2xl object-cover border-4 border-white"
                :style="imageHeightStyle"
              />
              <!-- Decorative Elements -->
              <div class="absolute -bottom-3 -left-3 w-12 h-12 lg:w-16 lg:h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center shadow-lg">
                <span class="text-lg lg:text-2xl">⭐</span>
              </div>
            </div>
            
            <!-- Background Decoration -->
            <div class="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-3xl blur-xl -z-10"></div>
          </div>
        </div>
      </div>
      
      <!-- Loader -->
      <loader :isLoading="isLoading" />
    </div>
  </section>
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
    const windowWidth = ref(window.innerWidth);

    const setHeight = () => {
      if (leftContent.value && windowWidth.value >= 1024) {
        imageHeight.value = leftContent.value.offsetHeight;
      }
    };

    const handleResize = () => {
      windowWidth.value = window.innerWidth;
      setHeight();
    };
    
    onMounted(() => {
      nextTick(() => {
        setHeight();
        window.addEventListener('resize', handleResize);
      });
    });
    
    onUnmounted(() => {
      window.removeEventListener('resize', handleResize);
    });
    
    const portfolioStore = usePortfolioStore();
    const isHover = ref(false);
    
    // Use computed properties that react to store changes
    const introArrData = computed(() => portfolioStore?.introductions?.expertise);
    const fullName = computed(() => portfolioStore?.introductions?.fullName);
    const jobDescription = computed(() => portfolioStore?.introductions?.jobDescription);
    const bgImage = computed(() => portfolioStore?.userInfoData?.bgUrl);
    const isLoading = computed(() => portfolioStore?.isLoading);
    
    // Computed for image height style
    const imageHeightStyle = computed(() => {
      if (windowWidth.value >= 1024) {
        return { height: imageHeight.value + 'px' };
      } else {
        return { 
          height: 'auto',
          maxHeight: '280px'
        };
      }
    });
    
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
      imageHeightStyle,
    }
  }
}
</script>

<style scoped>
/* Custom scrollbar */
::-webkit-scrollbar {
  width: 6px;
}

::-webkit-scrollbar-track {
  background: #f1f5f9;
  border-radius: 3px;
}

::-webkit-scrollbar-thumb {
  background: #cbd5e1;
  border-radius: 3px;
}

::-webkit-scrollbar-thumb:hover {
  background: #94a3b8;
}

/* Smooth transitions */
* {
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}

/* Focus styles for accessibility */
button:focus-visible,
a:focus-visible {
  outline: 2px solid #3b82f6;
  outline-offset: 2px;
}

/* Icon animations */
.skill-icon:hover {
  animation: pulse 1s ease-in-out infinite alternate;
}

@keyframes pulse {
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(1.1);
  }
}

/* Responsive adjustments */
@media (max-width: 1024px) {
  .container {
    padding-top: 2rem;
    padding-bottom: 2rem;
  }
}

@media (max-width: 640px) {
  h1 {
    font-size: 2.5rem;
  }
  
  .text-xl {
    font-size: 1.125rem;
  }
}
</style>