<template>
  <div class="bg-cream">
    <taskbar />
    <div class="min-h-screen bg-gradient-to-br from-gray-50 to-white flex items-center justify-center">
      <div class="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <!-- 404 Icon -->
        <div class="mb-8">
          <svg class="w-32 h-32 mx-auto text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.47-.881-6.08-2.33M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        </div>

        <!-- 404 Text -->
        <h1 class="text-6xl md:text-8xl font-bold text-gray-900 mb-4">404</h1>
        <h2 class="text-2xl md:text-3xl font-semibold text-gray-700 mb-4">Page Not Found</h2>
        <p class="text-lg text-gray-600 mb-8 max-w-md mx-auto">
          The page you're looking for doesn't exist or has been moved. Let's get you back on track!
        </p>

        <!-- Action Buttons -->
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <router-link 
            to="/" 
            class="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            <span>Go Home</span>
          </router-link>
          
          <router-link 
            to="/blog" 
            class="inline-flex items-center space-x-2 px-6 py-3 bg-white text-gray-700 font-medium rounded-lg border-2 border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
            </svg>
            <span>Browse Blog</span>
          </router-link>
        </div>

        <!-- Additional Help -->
        <div class="mt-12 text-center">
          <p class="text-sm text-gray-500 mb-4">Can't find what you're looking for?</p>
          <router-link 
            to="/contact" 
            class="text-blue-600 hover:text-blue-700 font-medium transition-colors duration-200"
          >
            Contact me for help
          </router-link>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Taskbar from '../components/Taskbar.vue';
import Footer from '../components/Footer.vue';

export default {
  name: 'NotFound',
  components: {
    Taskbar,
    Footer,
  },
}
</script>

<style scoped>
/* Enhanced typography */
.text-6xl {
  font-size: 3.75rem;
  line-height: 1;
}

@media (min-width: 768px) {
  .text-6xl {
    font-size: 6rem;
    line-height: 1;
  }
}

.text-8xl {
  font-size: 6rem;
  line-height: 1;
}

@media (min-width: 768px) {
  .text-8xl {
    font-size: 8rem;
    line-height: 1;
  }
}

/* Smooth transitions */
.transition-all {
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 300ms;
}

/* Enhanced shadows */
.shadow-lg {
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
}

.shadow-xl {
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
}

/* Gradient text effect */
.bg-gradient-to-r {
  background-image: linear-gradient(to right, var(--tw-gradient-stops));
}

.from-blue-600 {
  --tw-gradient-from: #2563eb;
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgba(37, 99, 235, 0));
}

.to-purple-600 {
  --tw-gradient-to: #9333ea;
}

.hover\:from-blue-700:hover {
  --tw-gradient-from: #1d4ed8;
}

.hover\:to-purple-700:hover {
  --tw-gradient-to: #7c3aed;
}
</style>
