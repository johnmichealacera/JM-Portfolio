<template>
  <section class="relative py-16 lg:py-24 bg-gradient-to-br from-gray-50 to-white overflow-hidden">
    <!-- Background Pattern -->
    <div class="absolute inset-0 opacity-5">
      <div class="absolute inset-0" style="background-image: radial-gradient(circle at 1px 1px, #10b981 1px, transparent 0); background-size: 35px 35px;"></div>
    </div>
    
    <!-- Decorative Elements -->
    <div class="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-green-100 to-blue-100 rounded-full blur-3xl opacity-30"></div>
    <div class="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-blue-100 to-green-100 rounded-full blur-2xl opacity-30"></div>
    
    <div class="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Header Section -->
      <div class="text-center mb-16">
        <div class="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-green-600 to-blue-600 rounded-2xl mb-6 shadow-lg">
          <span class="text-2xl">💡</span>
        </div>
        <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
          A Few Things You Should Know
        </h2>
        <p class="text-xl text-gray-600 max-w-2xl mx-auto">
          Core competencies and soft skills that drive my success in every project
        </p>
        <div class="w-24 h-1 bg-gradient-to-r from-green-600 to-blue-600 mx-auto rounded-full mt-6"></div>
      </div>

      <!-- Skills Grid -->
      <loader :isLoading="isLoading" />
      
      <div v-if="!isLoading" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div 
          v-for="(item, index) in softSkillsArr" 
          :key="index"
          class="group"
          data-aos="fade-up"
          :data-aos-delay="index * 100"
        >
          <div class="bg-white/70 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-200/50 p-8 h-full hover:shadow-xl transition-all duration-300 hover:scale-105 hover:-translate-y-2">
            <!-- Icon Section -->
            <div class="flex justify-center mb-6">
              <div class="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-500 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                <svg-icon 
                  :icon="item?.icon" 
                  class="w-8 h-8 text-white"
                  @mouseover="onMouseOver" 
                  @mouseout="onMouseOut"
                ></svg-icon>
              </div>
            </div>
            
            <!-- Content Section -->
            <div class="text-center">
              <h3 class="text-xl font-bold text-gray-900 mb-4 group-hover:text-green-600 transition-colors duration-300">
                {{ item?.name }}
              </h3>
              <div class="w-12 h-0.5 bg-gradient-to-r from-green-500 to-blue-500 mx-auto mb-4 rounded-full"></div>
              <p class="text-gray-600 leading-relaxed font-medium">
                {{ item?.shortDescription }}
              </p>
            </div>
            
            <!-- Hover Effect Overlay -->
            <div class="absolute inset-0 bg-gradient-to-br from-green-500/5 to-blue-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
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
  outline: 2px solid #10b981;
  outline-offset: 2px;
}

/* Icon animations */
.skill-icon {
  transition: all 0.3s ease;
}

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

/* Card hover effects */
.group:hover .skill-icon {
  transform: scale(1.1) rotate(5deg);
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .grid {
    gap: 1.5rem;
  }
}

@media (max-width: 640px) {
  .grid {
    gap: 1rem;
  }
}
</style>
