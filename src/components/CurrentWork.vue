<template>
  <div data-aos="fade-up" class="p-4 sm:p-8 md:p-12 border-2 bg-white flex justify-center">
    <div class="max-w-5xl w-full">
      <h2 class="text-center text-xl sm:text-2xl font-medium text-forest mb-4">
        🧩 Current Work
      </h2>
      <hr class="m-4 sm:m-6" />
      <loader :isLoading="isLoading"/>
      <div v-if="!isLoading && currentWork" class="bg-gradient-to-r from-forest/5 to-forest/10 p-6 sm:p-8 rounded-lg border border-forest/20">
        <div class="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-6">
          <!-- Icon Container -->
          <div class="flex-shrink-0 mx-auto sm:mx-0">
            <div class="w-16 h-16 bg-forest rounded-lg flex items-center justify-center shadow-lg">
              <span class="text-cream text-2xl">👨‍💻</span>
            </div>
          </div>
          
          <!-- Content Container -->
          <div class="flex-1 min-w-0">
            <!-- Title and Company -->
            <div class="mb-4">
              <h3 class="text-lg sm:text-xl font-semibold text-forest mb-2">
                {{ currentWork.title }}
              </h3>
              <a 
                v-if="currentWork.companyWebsite" 
                :href="currentWork.companyWebsite" 
                target="_blank" 
                rel="noopener noreferrer"
                class="text-sm text-forest/70 hover:text-forest underline transition-colors"
              >
                {{ currentWork.company }}
              </a>
            </div>
            
            <!-- Description -->
            <div class="space-y-3 text-sm sm:text-base leading-relaxed text-forest">
              <p 
                v-for="(desc, i) in currentWork.description" 
                :key="i" 
                class="text-justify"
              >
                {{ desc }}
              </p>
            </div>
            
            <!-- Tags -->
            <div class="mt-6 flex flex-wrap gap-2">
              <span
                v-for="(tag, i) in currentWork.tags"
                :key="i"
                class="px-3 py-1 bg-forest text-cream text-xs rounded-full font-medium"
              >
                {{ tag }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
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
/* Responsive styles for better mobile readability */
@media (max-width: 640px) {
  .text-sm.sm\:text-base {
    font-size: 0.9375rem; /* 15px */
    line-height: 1.6;
    letter-spacing: 0.01em;
  }
}

@media (max-width: 360px) {
  .text-sm.sm\:text-base {
    font-size: 0.875rem; /* 14px */
  }
}

/* Smooth transitions */
.transition-colors {
  transition: color 0.2s ease-in-out;
}
</style>