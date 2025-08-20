<template>
  <section class="relative py-4 lg:py-8 bg-gradient-to-br from-gray-50 to-white overflow-hidden">
    <!-- Background Pattern -->
    <div class="absolute inset-0 opacity-5">
      <div class="absolute inset-0" style="background-image: radial-gradient(circle at 1px 1px, #10b981 1px, transparent 0); background-size: 30px 30px;"></div>
    </div>
    
    <!-- Decorative Elements -->
    <div class="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-green-100 to-blue-100 rounded-full blur-3xl opacity-30"></div>
    <div class="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-blue-100 to-green-100 rounded-full blur-2xl opacity-30"></div>
    
    <div class="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Header Section -->
      <div class="text-center mb-12">
        <div class="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-green-600 to-blue-600 rounded-2xl mb-6 shadow-lg">
          <span class="text-2xl">💼</span>
        </div>
        <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
          Current Work
        </h2>
        <div class="w-24 h-1 bg-gradient-to-r from-green-600 to-blue-600 mx-auto rounded-full mt-6"></div>
      </div>

      <!-- Content Section -->
      <loader :isLoading="isLoading" />
      
      <div v-if="!isLoading && currentWork" class="bg-white/70 backdrop-blur-sm rounded-3xl shadow-2xl border border-gray-200/50 overflow-hidden">
        <div class="p-8 lg:p-12">
          <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            <!-- Icon and Company Section -->
            <div class="lg:col-span-1">
              <div class="flex flex-col items-center lg:items-start space-y-6">
                <!-- Icon Container -->
                <div class="w-20 h-20 bg-gradient-to-br from-green-600 to-blue-600 rounded-2xl flex items-center justify-center shadow-xl">
                  <span class="text-3xl">👨‍💻</span>
                </div>
                
                <!-- Company Info -->
                <div class="text-center lg:text-left">
                  <h3 class="text-2xl font-bold text-gray-900 mb-2">
                    {{ currentWork.title }}
                  </h3>
                  <a 
                    v-if="currentWork.companyWebsite" 
                    :href="currentWork.companyWebsite" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    class="inline-flex items-center space-x-2 text-green-600 hover:text-green-700 font-semibold transition-colors duration-300 group"
                  >
                    <span>{{ currentWork.company }}</span>
                    <svg class="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            
            <!-- Description Section -->
            <div class="lg:col-span-2">
              <div class="space-y-6">
                <!-- Description -->
                <div class="space-y-4">
                  <h4 class="text-lg font-semibold text-gray-900">Role & Responsibilities</h4>
                  <div class="space-y-3">
                    <p 
                      v-for="(desc, i) in currentWork.description" 
                      :key="i" 
                      class="text-gray-700 leading-relaxed text-lg"
                    >
                      {{ desc }}
                    </p>
                  </div>
                </div>
                
                <!-- Tags -->
                <div>
                  <h4 class="text-lg font-semibold text-gray-900 mb-4">Technologies & Skills</h4>
                  <div class="flex flex-wrap gap-3">
                    <span
                      v-for="(tag, i) in currentWork.tags"
                      :key="i"
                      class="px-4 py-2 bg-gradient-to-r from-green-500 to-blue-500 text-white text-sm font-medium rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                    >
                      {{ tag }}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Status Bar -->
        <div class="bg-gradient-to-r from-green-500 to-blue-500 px-8 py-4">
          <div class="flex items-center justify-between">
            <div class="flex items-center space-x-3">
              <div class="w-3 h-3 bg-white rounded-full animate-pulse"></div>
              <span class="text-white font-semibold">Currently Active</span>
            </div>
            <span class="text-white/80 text-sm">Full-time Position</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue';
import { usePortfolioStore } from '../store/pinia/portfolio';
import Loader from './commons/Loader.vue';

const portfolioStore = usePortfolioStore();

const currentWork = computed(() => portfolioStore?.currentWork);
const isLoading = computed(() => portfolioStore?.isLoading);
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

/* Responsive adjustments */
@media (max-width: 768px) {
  .grid {
    gap: 2rem;
  }
}

@media (max-width: 640px) {
  .text-lg {
    font-size: 1rem;
  }
}
</style>