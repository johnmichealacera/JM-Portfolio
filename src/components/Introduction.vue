<template>
  <section class="relative min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 overflow-hidden">
    <!-- Animated Background Pattern -->
    <div class="absolute inset-0 opacity-10">
      <div class="absolute inset-0 animate-pulse" style="background-image: radial-gradient(circle at 1px 1px, #3b82f6 1px, transparent 0); background-size: 40px 40px;"></div>
    </div>
    
    <!-- Floating Decorative Elements -->
    <div class="absolute top-20 right-20 w-72 h-72 bg-gradient-to-br from-blue-200 to-purple-200 rounded-full blur-3xl opacity-20 animate-bounce"></div>
    <div class="absolute bottom-20 left-20 w-64 h-64 bg-gradient-to-tr from-purple-200 to-blue-200 rounded-full blur-2xl opacity-20 animate-pulse"></div>
    <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-indigo-200 to-blue-200 rounded-full blur-3xl opacity-10 animate-spin" style="animation-duration: 20s;"></div>
    
    <div class="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
      <div v-if="!isLoading" class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[80vh]">
        <!-- Left: Content Section -->
        <div ref="leftContent" class="space-y-8">
          <!-- Greeting Badge -->
          <div class="inline-flex items-center space-x-3 bg-white/80 backdrop-blur-sm rounded-2xl px-6 py-3 shadow-lg border border-white/50 animate-fade-in-up">
            <span class="text-2xl animate-wave">👋</span>
            <span class="text-gray-700 font-medium">Hello, I'm</span>
          </div>

          <!-- Main Headline -->
          <div class="space-y-4 animate-fade-in-up" style="animation-delay: 0.2s;">
            <h1 class="text-5xl lg:text-7xl xl:text-8xl font-bold text-gray-900 leading-tight">
              <span class="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                {{ fullName || 'John Micheal Acera' }}
              </span>
            </h1>
            <div class="h-1 w-24 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
          </div>

          <!-- Subheadline / Description -->
          <div class="animate-fade-in-up" style="animation-delay: 0.4s;">
            <p class="text-xl lg:text-2xl text-gray-700 leading-relaxed font-medium max-w-2xl">
              {{ jobDescription || "I'm a purpose-driven fullstack developer with a strong passion for backend systems, mentoring others, and building software that matters." }}
            </p>
          </div>

          <!-- Call to Action Buttons -->
          <div class="flex flex-col sm:flex-row gap-4 animate-fade-in-up" style="animation-delay: 0.6s;">
            <!-- Primary CTA -->
            <button 
              @click="scrollToContact"
              class="group bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold px-8 py-4 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 transform hover:-translate-y-1"
            >
              <span class="flex items-center space-x-2">
                <span>Start Your Project With Me</span>
                <svg class="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                </svg>
              </span>
            </button>
            
            <!-- Secondary CTA -->
            <button 
              @click="scrollToProjects"
              class="group bg-white/80 backdrop-blur-sm text-gray-700 font-semibold px-8 py-4 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 transform hover:-translate-y-1 border border-gray-200/50"
            >
              <span class="flex items-center space-x-2">
                <span>View My Work</span>
                <svg class="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                </svg>
              </span>
            </button>
          </div>

          <!-- Expertise Highlights -->
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 animate-fade-in-up" style="animation-delay: 0.8s;">
            <div 
              v-for="(item, index) in introArrData" 
              :key="index"
              class="group bg-white/70 backdrop-blur-sm rounded-xl p-4 lg:p-6 shadow-lg border border-white/50 hover:shadow-xl transition-all duration-300 hover:scale-105 hover:bg-white/90"
            >
              <div class="flex items-center space-x-4">
                <div class="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                  <svg-icon 
                    :icon="item?.icon" 
                    class="w-6 h-6 text-white"
                  />
                </div>
                <div>
                  <h3 class="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                    {{ item?.title }}
                  </h3>
                </div>
              </div>
            </div>
          </div>

          <!-- Social Proof / Stats -->
          <div class="flex items-center space-x-6 pt-4 animate-fade-in-up" style="animation-delay: 1s;">
            <div class="flex items-center space-x-2 text-gray-600">
              <div class="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span class="text-sm font-medium">Available for new projects</span>
            </div>
            <div class="flex items-center space-x-2 text-gray-600">
              <span class="text-sm font-medium">📍 Remote & Worldwide</span>
            </div>
          </div>
        </div>

        <!-- Right: Visual Section -->
        <div class="flex justify-center lg:justify-end animate-fade-in-up" style="animation-delay: 0.3s;">
          <div class="relative">
            <!-- Main Profile Image -->
            <div class="relative">
              <img
                ref="profileImage"
                src="/jm-bg.png"
                alt="John Micheal Acera - Fullstack Developer"
                class="w-80 h-80 lg:w-96 lg:h-96 xl:w-[28rem] xl:h-[28rem] rounded-3xl shadow-2xl object-cover border-4 border-white/80 backdrop-blur-sm"
                :style="imageHeightStyle"
              />
              
              <!-- Floating Elements -->
              <div class="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center shadow-lg animate-bounce">
                <span class="text-2xl">⭐</span>
              </div>
              
              <div class="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-br from-green-400 to-blue-500 rounded-xl flex items-center justify-center shadow-lg animate-pulse">
                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              
              <!-- Code Snippet Overlay -->
              <div class="absolute top-8 -left-8 bg-gray-900 text-green-400 p-4 rounded-lg shadow-xl max-w-xs opacity-90 backdrop-blur-sm border border-gray-700">
                <div class="flex items-center space-x-2 mb-2">
                  <div class="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div class="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div class="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <div class="text-xs font-mono">
                  <div class="text-blue-400">const</div>
                  <div class="text-yellow-400">developer</div>
                  <div class="text-white">= {</div>
                  <div class="text-green-400 ml-2">name: <span class="text-white">{{ `'${fullName}'` }}</span>,</div>
                  <div class="text-green-400 ml-2">passion: <span class="text-white">'Building'</span></div>
                  <div class="text-white">};</div>
                </div>
              </div>
            </div>
            
            <!-- Background Glow -->
            <div class="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-3xl blur-2xl -z-10 animate-pulse"></div>
          </div>
        </div>
      </div>
      
      <!-- Scroll Indicator -->
      <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div class="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <div class="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
      
      <!-- Loader -->
      <loader :isLoading="isLoading" />
    </div>
  </section>
</template>

<script>
import SvgIcon from './commons/SvgIcon.vue';
import Loader from './commons/Loader.vue';
import { onMounted, ref, nextTick, computed, onUnmounted } from 'vue';
import { usePortfolioStore } from '../store/pinia/portfolio';

export default {
  name: "Introduction",
  components: {
    SvgIcon,
    Loader,
  },
  setup() {
    const imageHeight = ref(null);
    const leftContent = ref(null);
    const windowWidth = ref(window.innerWidth);

    const setHeight = () => {
      if (leftContent.value && windowWidth.value >= 1024) {
        imageHeight.value = leftContent.value.offsetHeight;
      }
    };

    const handleResize = () => {
      windowWidth.value = window.innerWidth;
      setHeight();
    };
    
    // Smooth scroll functions
    const scrollToProjects = () => {
      const projectsSection = document.querySelector('#projects') || document.querySelector('.project-section');
      if (projectsSection) {
        projectsSection.scrollIntoView({ behavior: 'smooth' });
      } else {
        // Fallback to router navigation
        window.location.href = '/portfolio';
      }
    };

    const scrollToContact = () => {
      const contactSection = document.querySelector('#contact') || document.querySelector('.contact-section');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      } else {
        // Fallback to router navigation
        window.location.href = '/contact';
      }
    };
    
    onMounted(() => {
      nextTick(() => {
        setHeight();
        window.addEventListener('resize', handleResize);
      });
    });
    
    onUnmounted(() => {
      window.removeEventListener('resize', handleResize);
    });
    
    const portfolioStore = usePortfolioStore();
    
    // Use computed properties that react to store changes
    const introArrData = computed(() => portfolioStore?.introductions?.expertise);
    const fullName = computed(() => portfolioStore?.introductions?.fullName);
    const jobDescription = computed(() => portfolioStore?.introductions?.jobDescription);
    const bgImage = computed(() => portfolioStore?.userInfoData?.bgUrl);
    const isLoading = computed(() => portfolioStore?.isLoading);
    
    // Computed for image height style
    const imageHeightStyle = computed(() => {
      if (windowWidth.value >= 1024) {
        return { height: imageHeight.value + 'px' };
      } else {
        return { 
          height: 'auto',
          maxHeight: '320px'
        };
      }
    });

    return {
      introArrData,
      isLoading,
      fullName,
      jobDescription,
      bgImage,
      imageHeight,
      leftContent,
      imageHeightStyle,
      scrollToProjects,
      scrollToContact,
    }
  }
}
</script>

<style scoped>
/* Custom animations */
@keyframes fade-in-up {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes wave {
  0%, 100% {
    transform: rotate(0deg);
  }
  25% {
    transform: rotate(20deg);
  }
  75% {
    transform: rotate(-15deg);
  }
}

.animate-fade-in-up {
  animation: fade-in-up 0.8s ease-out forwards;
  opacity: 0;
}

.animate-wave {
  animation: wave 2s ease-in-out infinite;
}

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

/* Responsive adjustments */
@media (max-width: 1024px) {
  .container {
    padding-top: 2rem;
    padding-bottom: 2rem;
  }
}

@media (max-width: 640px) {
  h1 {
    font-size: 3rem;
  }
  
  .text-xl {
    font-size: 1.125rem;
  }
}

/* Glass morphism effect */
.backdrop-blur-sm {
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
}
</style>