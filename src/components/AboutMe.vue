<template>
  <section class="relative py-16 lg:py-24 bg-gradient-to-br from-gray-50 to-white overflow-hidden">
    <!-- Background Pattern -->
    <div class="absolute inset-0 opacity-5">
      <div class="absolute inset-0" style="background-image: radial-gradient(circle at 1px 1px, #3b82f6 1px, transparent 0); background-size: 30px 30px;"></div>
    </div>
    
    <!-- Decorative Elements -->
    <div class="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full blur-3xl opacity-30"></div>
    <div class="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-purple-100 to-blue-100 rounded-full blur-2xl opacity-30"></div>
    
    <div class="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Header Section -->
      <div class="text-center mb-12">
        <div class="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl mb-6 shadow-lg">
          <span class="text-2xl">👋</span>
        </div>
        <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
          A Little Information About Me
        </h2>
        <div class="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
      </div>

      <!-- Content Section -->
      <div class="bg-white/70 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-200/50 p-8 lg:p-12">
        <loader :isLoading="isLoading" />
        
        <div v-if="!isLoading" class="prose prose-lg max-w-none">
          <p class="text-gray-700 leading-relaxed text-lg lg:text-xl font-medium">
            {{ story }}
          </p>
        </div>
      </div>

      <!-- Stats Section -->
      <div class="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div class="bg-white/70 backdrop-blur-sm rounded-xl p-6 text-center shadow-lg border border-gray-200/50 hover:shadow-xl transition-all duration-300 hover:scale-105">
          <div class="text-3xl font-bold text-blue-600 mb-2">5+</div>
          <div class="text-gray-600 font-medium">Years Experience</div>
        </div>
        <div class="bg-white/70 backdrop-blur-sm rounded-xl p-6 text-center shadow-lg border border-gray-200/50 hover:shadow-xl transition-all duration-300 hover:scale-105">
          <div class="text-3xl font-bold text-purple-600 mb-2">1 Mission</div>
          <div class="text-gray-600 font-medium">Build with Purpose</div>
        </div>
        <div class="bg-white/70 backdrop-blur-sm rounded-xl p-6 text-center shadow-lg border border-gray-200/50 hover:shadow-xl transition-all duration-300 hover:scale-105">
          <div class="text-3xl font-bold text-green-600 mb-2">100%</div>
          <div class="text-gray-600 font-medium">Commitment</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { usePortfolioStore } from '../store/pinia/portfolio';
import { computed } from 'vue';
import Loader from './commons/Loader.vue';

export default {
  name: 'AboutMe',
  components: {
    Loader
  },
  setup() {
    const portfolioStore = usePortfolioStore();
    const story = computed(() => portfolioStore?.userInfo?.lifeStory);
    const isLoading = computed(() => portfolioStore?.isLoading);

    return {
      isLoading,
      story,
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

/* Typography enhancements */
.prose {
  color: #374151;
}

.prose p {
  margin-bottom: 1.5rem;
  line-height: 1.8;
  font-weight: 400;
}

/* Responsive typography */
@media (max-width: 640px) {
  .prose p {
    font-size: 1rem;
    line-height: 1.7;
  }
}

@media (max-width: 480px) {
  .prose p {
    font-size: 0.95rem;
    line-height: 1.6;
  }
}
</style>
