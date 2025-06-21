<template>
  <footer class="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
    <!-- Background Pattern -->
    <div class="absolute inset-0 opacity-5">
      <div class="absolute inset-0" style="background-image: radial-gradient(circle at 1px 1px, white 1px, transparent 0); background-size: 20px 20px;"></div>
    </div>
    
    <!-- Main Footer Content -->
    <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Top Section -->
      <div class="py-16 border-b border-gray-700/50">
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <!-- Brand Section -->
          <div class="lg:col-span-1">
            <div class="flex items-center space-x-3 mb-4">
              <div class="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center shadow-lg">
                <span class="text-white font-bold text-sm">JM</span>
              </div>
              <span class="text-xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                John Micheal Acera
              </span>
            </div>
            <p class="text-gray-300 leading-relaxed mb-6">
              Passionate software developer crafting digital experiences that make a difference. 
              Let's turn your ideas into reality.
            </p>
            <div class="flex space-x-4">
              <a
                v-for="(item, index) in socialMediaArrData"
                :key="index"
                :href="item?.url"
                target="_blank"
                rel="noopener noreferrer"
                :aria-label="`${item?.type} Profile`"
                class="group relative p-3 bg-gray-800/50 hover:bg-gray-700/70 rounded-lg transition-all duration-300 hover:scale-110 hover:shadow-lg"
              >
                <svg-icon 
                  :icon="item?.type" 
                  :width="24" 
                  :height="24"
                  class="text-gray-300 group-hover:text-white transition-colors duration-300"
                />
                <span class="sr-only">{{ item?.type }} Profile</span>
              </a>
            </div>
          </div>

          <!-- Quick Links -->
          <div class="lg:col-span-1">
            <h3 class="text-lg font-semibold mb-6 text-white">Quick Links</h3>
            <ul class="space-y-3">
              <li>
                <router-link 
                  to="/" 
                  class="text-gray-300 hover:text-white transition-colors duration-200 flex items-center group"
                  @click="scrollToTop"
                >
                  <span class="w-2 h-2 bg-blue-500 rounded-full mr-3 group-hover:scale-150 transition-transform duration-200"></span>
                  Home
                </router-link>
              </li>
              <li>
                <router-link 
                  to="/portfolio" 
                  class="text-gray-300 hover:text-white transition-colors duration-200 flex items-center group"
                  @click="scrollToTop"
                >
                  <span class="w-2 h-2 bg-purple-500 rounded-full mr-3 group-hover:scale-150 transition-transform duration-200"></span>
                  Portfolio
                </router-link>
              </li>
              <li>
                <router-link 
                  to="/about" 
                  class="text-gray-300 hover:text-white transition-colors duration-200 flex items-center group"
                  @click="scrollToTop"
                >
                  <span class="w-2 h-2 bg-green-500 rounded-full mr-3 group-hover:scale-150 transition-transform duration-200"></span>
                  About Me
                </router-link>
              </li>
              <li>
                <router-link 
                  to="/manifesto" 
                  class="text-gray-300 hover:text-white transition-colors duration-200 flex items-center group"
                  @click="scrollToTop"
                >
                  <span class="w-2 h-2 bg-yellow-500 rounded-full mr-3 group-hover:scale-150 transition-transform duration-200"></span>
                  Developer Manifesto
                </router-link>
              </li>
            </ul>
          </div>

          <!-- Contact CTA -->
          <div class="lg:col-span-1">
            <h3 class="text-lg font-semibold mb-6 text-white">Ready to Collaborate?</h3>
            <p class="text-gray-300 mb-6 leading-relaxed">
              Let's discuss your next project and bring your vision to life. 
              I'm here to help you succeed.
            </p>
            <router-link 
              to="/contact" 
              @click="scrollToTop"
              class="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-xl group"
            >
              <span>Get In Touch</span>
              <svg class="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
              </svg>
            </router-link>
          </div>
        </div>
      </div>

      <!-- Bottom Section -->
      <div class="py-8">
        <div class="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <!-- Copyright -->
          <div class="text-gray-400 text-sm">
            <p>&copy; {{ currentYear }} John Micheal Acera. All rights reserved.</p>
          </div>

          <!-- Back to Top Button -->
          <button
            @click="scrollToTop"
            class="group flex items-center space-x-2 px-4 py-2 bg-gray-800/50 hover:bg-gray-700/70 rounded-lg transition-all duration-300 hover:scale-105"
            aria-label="Back to top"
          >
            <svg class="w-5 h-5 text-gray-400 group-hover:text-white transition-colors duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18"></path>
            </svg>
            <span class="text-gray-400 group-hover:text-white transition-colors duration-200 text-sm">Back to Top</span>
          </button>
        </div>
      </div>
    </div>

    <!-- Decorative Elements -->
    <div class="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600"></div>
    <div class="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-600/10 to-purple-600/10 rounded-full blur-3xl"></div>
    <div class="absolute top-1/2 left-0 w-24 h-24 bg-gradient-to-br from-purple-600/10 to-blue-600/10 rounded-full blur-2xl"></div>
  </footer>
</template>

<script>
import { computed } from 'vue';
import SvgIcon from './commons/SvgIcon.vue';
import { usePortfolioStore } from '../store/pinia/portfolio';

export default {
  name: "FooterBar",
  components: {
    SvgIcon,
  },
  setup() {
    const portfolioStore = usePortfolioStore();
    const socialMediaArrData = computed(() => portfolioStore?.socialMedia);
    const isLoading = computed(() => portfolioStore?.isLoading);
    
    const currentYear = computed(() => new Date().getFullYear());
    
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    }

    return {
      socialMediaArrData,
      isLoading,
      scrollToTop,
      currentYear,
    }
  }
}
</script>

<style scoped>
/* Custom scrollbar for better UX */
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: #1f2937;
}

::-webkit-scrollbar-thumb {
  background: #4b5563;
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: #6b7280;
}

/* Smooth transitions for all interactive elements */
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

/* Hover effects for social media icons */
.group:hover svg {
  filter: drop-shadow(0 0 8px rgba(59, 130, 246, 0.5));
}

/* Gradient text animation */
@keyframes gradient-shift {
  0%, 100% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
}

.bg-gradient-to-r {
  background-size: 200% 200%;
  animation: gradient-shift 3s ease infinite;
}
</style>
