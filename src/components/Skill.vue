<template>
  <section class="relative py-4 lg:py-8 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 overflow-hidden">
    <!-- Background Pattern -->
    <div class="absolute inset-0 opacity-10">
      <div class="absolute inset-0" style="background-image: radial-gradient(circle at 1px 1px, #60a5fa 1px, transparent 0); background-size: 25px 25px;"></div>
    </div>
    
    <!-- Decorative Elements -->
    <div class="absolute top-0 left-0 w-72 h-72 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-3xl"></div>
    <div class="absolute bottom-0 right-0 w-64 h-64 bg-gradient-to-tl from-purple-500/20 to-blue-500/20 rounded-full blur-2xl"></div>
    
    <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Header Section -->
      <div class="text-center mb-4">
        <div class="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl mb-6 shadow-lg">
          <span class="text-2xl">🛠️</span>
        </div>
        <h2 class="text-3xl lg:text-4xl font-bold text-white mb-4">
          My Skills & Expertise
        </h2>
        <p class="text-xl text-blue-300 max-w-2xl mx-auto">
          A comprehensive overview of my technical skills and proficiency levels
        </p>
        <div class="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full mt-6"></div>
      </div>

      <!-- Skills Grid -->
      <loader :isLoading="isLoading" />
      
      <div v-if="!isLoading" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div 
          v-for="(type, index) in skillsTypeArr" 
          :key="index"
          class="bg-white/10 backdrop-blur-sm rounded-2xl shadow-xl border border-white/20 overflow-hidden hover:shadow-2xl transition-all duration-300 hover:scale-105"
        >
          <!-- Category Header -->
          <div class="bg-gradient-to-r from-blue-500/20 to-purple-500/20 px-6 py-4 border-b border-white/10">
            <h3 class="text-xl font-bold text-white capitalize">{{ type }}</h3>
          </div>
          
          <!-- Skills List -->
          <div class="p-6 space-y-6">
            <div 
              v-for="(item, skillIndex) in filterSkillsByType(type)" 
              :key="skillIndex"
              class="group"
              data-aos="fade-up"
              :data-aos-delay="skillIndex * 100"
            >
              <!-- Skill Header -->
              <div class="flex items-center justify-between mb-3">
                <h4 class="text-white font-semibold capitalize group-hover:text-blue-300 transition-colors duration-300">
                  {{ item?.name }}
                </h4>
                <div class="relative">
                  <span 
                    class="text-blue-300 font-bold text-sm"
                    @mouseover="hoveredItem = item" 
                    @mouseout="hoveredItem = null" 
                    @click="handleClick(item)" 
                    @touchstart="handleClick(item)"
                  >
                    {{ item?.mastery }}%
                  </span>
                  
                  <!-- Tooltip -->
                  <div 
                    v-if="hoveredItem === item" 
                    class="absolute bottom-full right-0 mb-2 px-3 py-2 bg-white text-gray-900 text-xs rounded-lg shadow-lg z-10 whitespace-nowrap"
                  >
                    <div class="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-white"></div>
                    Mastery Level: {{ item?.mastery }}%
                  </div>
                </div>
              </div>
              
              <!-- Progress Bar -->
              <div class="relative">
                <div class="w-full h-3 bg-white/20 rounded-full overflow-hidden">
                  <div 
                    class="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition-all duration-1000 ease-out"
                    :style="{ width: `${item?.mastery}%` }"
                  ></div>
                </div>
                
                <!-- Animated Glow Effect -->
                <div 
                  class="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-sm"
                  :style="{ width: `${item?.mastery}%` }"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Skills Summary -->
      <div class="mt-16 grid grid-cols-1 md:grid-cols-4 gap-6">
        <div class="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center shadow-lg border border-white/20">
          <div class="text-3xl font-bold text-blue-400 mb-2">
            {{ getTotalSkills() }}
          </div>
          <div class="text-white/80 font-medium">Total Skills</div>
        </div>
        <div class="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center shadow-lg border border-white/20">
          <div class="text-3xl font-bold text-green-400 mb-2">
            {{ getAverageMastery() }}%
          </div>
          <div class="text-white/80 font-medium">Average Mastery</div>
        </div>
        <div class="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center shadow-lg border border-white/20">
          <div class="text-3xl font-bold text-purple-400 mb-2">
            {{ getExpertSkills() }}
          </div>
          <div class="text-white/80 font-medium">Expert Level</div>
        </div>
        <div class="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center shadow-lg border border-white/20">
          <div class="text-3xl font-bold text-yellow-400 mb-2">
            {{ getLearningSkills() }}
          </div>
          <div class="text-white/80 font-medium">Learning</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Loader from './commons/Loader.vue';
import { ref, computed } from 'vue';
import { usePortfolioStore } from '../store/pinia/portfolio';

export default {
  name: "Skill",
  components: {
    Loader,
  },
  setup() {
    const portfolioStore = usePortfolioStore();
    const hoveredItem = ref(null);
    const skillsTypeArr = computed(() => portfolioStore.getSkillsType);
    const isLoading = computed(() => portfolioStore.isLoading);
    
    // Create a computed function that returns the filter function
    const filterSkillsByType = computed(() => {
      return (type) => portfolioStore.filterSkillsByType(type);
    });
    
    const handleClick = (item) => {
      setTimeout(() => {
        hoveredItem.value = null;
      }, 2000);
      hoveredItem.value = item;
    };

    // Helper functions for statistics
    const getTotalSkills = () => {
      return portfolioStore.skills?.length || 0;
    };

    const getAverageMastery = () => {
      if (!portfolioStore.skills?.length) return 0;
      const total = portfolioStore.skills.reduce((sum, skill) => sum + skill.mastery, 0);
      return Math.round(total / portfolioStore.skills.length);
    };

    const getExpertSkills = () => {
      return portfolioStore.skills?.filter(skill => skill.mastery >= 90).length || 0;
    };

    const getLearningSkills = () => {
      return portfolioStore.skills?.filter(skill => skill.mastery < 70).length || 0;
    };

    return {
      skillsTypeArr,
      filterSkillsByType,
      isLoading,
      handleClick,
      hoveredItem,
      getTotalSkills,
      getAverageMastery,
      getExpertSkills,
      getLearningSkills,
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
  background: #1f2937;
  border-radius: 3px;
}

::-webkit-scrollbar-thumb {
  background: #4b5563;
  border-radius: 3px;
}

::-webkit-scrollbar-thumb:hover {
  background: #6b7280;
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
  outline: 2px solid #60a5fa;
  outline-offset: 2px;
}

/* Progress bar animations */
@keyframes progressFill {
  from {
    width: 0%;
  }
  to {
    width: var(--progress-width);
  }
}

/* Tooltip animations */
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .grid {
    gap: 1.5rem;
  }
}

@media (max-width: 640px) {
  .text-xl {
    font-size: 1.125rem;
  }
}
</style>