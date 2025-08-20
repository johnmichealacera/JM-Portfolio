<template>
  <section class="relative py-16 lg:py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 overflow-hidden">
    <!-- Background Pattern -->
    <div class="absolute inset-0 opacity-10">
      <div class="absolute inset-0" style="background-image: radial-gradient(circle at 1px 1px, #60a5fa 1px, transparent 0); background-size: 25px 25px;"></div>
    </div>
    
    <!-- Decorative Elements -->
    <div class="absolute top-0 left-0 w-72 h-72 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-3xl"></div>
    <div class="absolute bottom-0 right-0 w-64 h-64 bg-gradient-to-tl from-purple-500/20 to-blue-500/20 rounded-full blur-2xl"></div>
    
    <div class="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Header Section -->
      <div class="text-center mb-12">
        <div class="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl mb-6 shadow-lg">
          <span class="text-2xl">🎯</span>
        </div>
        <h2 class="text-3xl lg:text-4xl font-bold text-white mb-4">
          Why Am I Doing This?
        </h2>
        <p class="text-xl text-blue-300 font-medium mb-6">
          Because I love challenges and creating meaningful solutions
        </p>
        <div class="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full"></div>
      </div>

      <!-- Content Section -->
      <div class="bg-white/10 backdrop-blur-sm rounded-2xl shadow-2xl border border-white/20 p-8 lg:p-12">
        <loader :isLoading="isLoading" />
        
        <div v-if="!isLoading" class="prose prose-lg max-w-none prose-invert">
          <p class="text-gray-200 leading-relaxed text-lg lg:text-xl font-medium">
            {{ userWhy }}
          </p>
        </div>
      </div>

      <!-- Values Section -->
      <div class="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div class="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center shadow-lg border border-white/20 hover:shadow-xl transition-all duration-300 hover:scale-105 group">
          <div class="text-3xl mb-4">💡</div>
          <h3 class="text-white font-semibold mb-2">Innovation</h3>
          <p class="text-gray-300 text-sm">Pushing boundaries with creative solutions</p>
        </div>
        <div class="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center shadow-lg border border-white/20 hover:shadow-xl transition-all duration-300 hover:scale-105 group">
          <div class="text-3xl mb-4">🚀</div>
          <h3 class="text-white font-semibold mb-2">Excellence</h3>
          <p class="text-gray-300 text-sm">Delivering quality in every project</p>
        </div>
        <div class="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center shadow-lg border border-white/20 hover:shadow-xl transition-all duration-300 hover:scale-105 group">
          <div class="text-3xl mb-4">🤝</div>
          <h3 class="text-white font-semibold mb-2">Collaboration</h3>
          <p class="text-gray-300 text-sm">Working together to achieve goals</p>
        </div>
        <div class="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center shadow-lg border border-white/20 hover:shadow-xl transition-all duration-300 hover:scale-105 group">
          <div class="text-3xl mb-4">📈</div>
          <h3 class="text-white font-semibold mb-2">Growth</h3>
          <p class="text-gray-300 text-sm">Continuous learning and improvement</p>
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
  name: 'MyWhy',
  components: {
    Loader
  },
  setup() {
    const portfolioStore = usePortfolioStore();
    const userWhy = computed(() => portfolioStore?.userInfo?.userWhy);
    const isLoading = computed(() => portfolioStore?.isLoading);

    return {
      isLoading,
      userWhy,
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

/* Typography enhancements */
.prose-invert {
  color: #e5e7eb;
}

.prose-invert p {
  margin-bottom: 1.5rem;
  line-height: 1.8;
  font-weight: 400;
}

/* Responsive typography */
@media (max-width: 640px) {
  .prose-invert p {
    font-size: 1rem;
    line-height: 1.7;
  }
}

@media (max-width: 480px) {
  .prose-invert p {
    font-size: 0.95rem;
    line-height: 1.6;
  }
}

/* Hover effects for value cards */
.group:hover {
  transform: translateY(-2px);
}
</style>
