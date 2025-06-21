<template>
  <section class="relative bg-gradient-to-br from-gray-50 to-white overflow-hidden mb-8">
    <!-- Background Pattern -->
    <div class="absolute inset-0 opacity-5">
      <div class="absolute inset-0" style="background-image: radial-gradient(circle at 1px 1px, #f59e0b 1px, transparent 0); background-size: 40px 40px;"></div>
    </div>
    
    <!-- Decorative Elements -->
    <div class="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-orange-100 to-yellow-100 rounded-full blur-3xl opacity-30"></div>
    <div class="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-yellow-100 to-orange-100 rounded-full blur-2xl opacity-30"></div>
    
    <div class="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Header Section -->
      <div class="text-center mb-8">
        <div class="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-orange-600 to-yellow-600 rounded-2xl mb-6 shadow-lg">
          <span class="text-2xl">🎯</span>
        </div>
        <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
          My Journey
        </h2>
        <p class="text-xl text-gray-600 max-w-2xl mx-auto">
          The story behind my passion for technology and commitment to excellence
        </p>
        <div class="w-24 h-1 bg-gradient-to-r from-orange-600 to-yellow-600 mx-auto rounded-full mt-6"></div>
      </div>

      <!-- Content Section -->
      <loader :isLoading="isLoading" />
      
      <div v-if="!isLoading" class="bg-white/70 backdrop-blur-sm rounded-3xl shadow-2xl border border-gray-200/50 overflow-hidden">
        <!-- Story Content -->
        <div class="p-8 lg:p-12">
          <div class="prose prose-lg max-w-none">
            <p class="text-gray-700 leading-relaxed text-lg lg:text-xl font-medium">
              {{ story }}
            </p>
          </div>
        </div>
        
        <!-- Journey Timeline -->
        <div class="bg-gradient-to-r from-orange-500 to-yellow-500 px-8 py-6">
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div class="bg-white/20 backdrop-blur-sm rounded-xl p-4">
              <div class="text-2xl mb-2">🚀</div>
              <div class="text-white font-semibold">Passion</div>
              <div class="text-orange-100 text-sm">Driven by innovation</div>
            </div>
            <div class="bg-white/20 backdrop-blur-sm rounded-xl p-4">
              <div class="text-2xl mb-2">💡</div>
              <div class="text-white font-semibold">Innovation</div>
              <div class="text-orange-100 text-sm">Creative solutions</div>
            </div>
            <div class="bg-white/20 backdrop-blur-sm rounded-xl p-4">
              <div class="text-2xl mb-2">🎯</div>
              <div class="text-white font-semibold">Growth</div>
              <div class="text-orange-100 text-sm">Continuous learning and improvement</div>
            </div>
          </div>
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
  name: "PersonalStory",
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
  outline: 2px solid #f59e0b;
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

/* Hover effects for value cards */
.group:hover {
  transform: translateY(-2px);
}
</style>