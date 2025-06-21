<template>
  <section class="relative py-16 lg:py-24 bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 overflow-hidden">
    <!-- Background Pattern -->
    <div class="absolute inset-0 opacity-5">
      <div class="absolute inset-0" style="background-image: radial-gradient(circle at 1px 1px, #3b82f6 1px, transparent 0); background-size: 40px 40px;"></div>
    </div>
    
    <!-- Decorative Elements -->
    <div class="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-200 to-purple-200 rounded-full blur-3xl opacity-30"></div>
    <div class="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-purple-200 to-blue-200 rounded-full blur-2xl opacity-30"></div>
    
    <div class="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Header Section -->
      <div class="text-center mb-16">
        <div class="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl mb-6 shadow-lg">
          <span class="text-2xl">📞</span>
        </div>
        <h1 class="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
          Let's Connect
        </h1>
        <p class="text-xl lg:text-2xl text-gray-600 mb-6">
          Ready to bring your ideas to life?
        </p>
        <p class="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
          I'm always excited to discuss new projects, collaborations, and opportunities. Let's create something amazing together.
        </p>
        <div class="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mt-8"></div>
      </div>

      <!-- Contact Information Cards -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        <!-- Email Card -->
        <div class="bg-white/70 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-200/50 p-8 hover:shadow-2xl transition-all duration-300 hover:scale-105 group">
          <div class="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
            <span class="text-white text-2xl">📧</span>
          </div>
          <h3 class="text-xl font-bold text-gray-900 mb-4">Email</h3>
          <p class="text-gray-600 mb-4">Let's start a conversation</p>
          <a 
            v-if="!isLoading && userDetailsData?.email"
            :href="`mailto:${userDetailsData.email}`"
            class="text-blue-600 hover:text-blue-700 font-semibold transition-colors duration-300"
          >
            {{ userDetailsData.email }}
          </a>
          <div v-else-if="isLoading" class="skeleton-line w-48 h-6"></div>
        </div>

        <!-- Phone Card -->
        <div class="bg-white/70 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-200/50 p-8 hover:shadow-2xl transition-all duration-300 hover:scale-105 group">
          <div class="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
            <span class="text-white text-2xl">📱</span>
          </div>
          <h3 class="text-xl font-bold text-gray-900 mb-4">Phone</h3>
          <p class="text-gray-600 mb-4">Call me directly</p>
          <a 
            v-if="!isLoading && userDetailsData?.contactNumber"
            :href="`tel:${userDetailsData.contactNumber}`"
            class="text-green-600 hover:text-green-700 font-semibold transition-colors duration-300"
          >
            {{ userDetailsData.contactNumber }}
          </a>
          <div v-else-if="isLoading" class="skeleton-line w-32 h-6"></div>
        </div>

        <!-- Location Card -->
        <div class="bg-white/70 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-200/50 p-8 hover:shadow-2xl transition-all duration-300 hover:scale-105 group">
          <div class="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
            <span class="text-white text-2xl">📍</span>
          </div>
          <h3 class="text-xl font-bold text-gray-900 mb-4">Location</h3>
          <p class="text-gray-600 mb-4">Based in the Philippines</p>
          <p class="text-purple-600 font-semibold">Available for remote work</p>
        </div>
      </div>

      <!-- Availability Status -->
      <div class="bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl p-8 shadow-xl text-center">
        <div class="flex items-center justify-center space-x-3 mb-4">
          <div class="w-4 h-4 bg-white rounded-full animate-pulse"></div>
          <span class="text-white font-semibold text-lg">Currently Available for New Projects</span>
        </div>
        <p class="text-green-100 max-w-2xl mx-auto">
          I'm actively seeking new opportunities and collaborations. Let's discuss how we can work together to bring your vision to life.
        </p>
      </div>
    </div>
  </section>
</template>

<script>
import { usePortfolioStore } from '../store/pinia/portfolio';
import { computed } from 'vue';

export default {
  name: 'ContactInfo',
  setup() {
    const portfolioStore = usePortfolioStore();
    const userDetailsData = computed(() => portfolioStore.userDetails);
    const isLoading = computed(() => portfolioStore.isLoading);

    return {
      isLoading,
      userDetailsData,
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

/* Skeleton loading animation */
.skeleton-line {
  background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
  background-size: 200% 100%;
  animation: loading 1.5s infinite;
  border-radius: 4px;
}

@keyframes loading {
  0% {
    background-position: 200% 0;
  }
  100% {
    background-position: -200% 0;
  }
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .text-4xl {
    font-size: 2.5rem;
  }
  
  .text-xl {
    font-size: 1.125rem;
  }
}

@media (max-width: 640px) {
  .text-4xl {
    font-size: 2rem;
  }
  
  .p-8 {
    padding: 1.5rem;
  }
}
</style>