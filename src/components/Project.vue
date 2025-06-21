<template>
  <section class="relative py-16 lg:py-24 bg-gradient-to-br from-gray-50 to-white overflow-hidden">
    <!-- Background Pattern -->
    <div class="absolute inset-0 opacity-5">
      <div class="absolute inset-0" style="background-image: radial-gradient(circle at 1px 1px, #8b5cf6 1px, transparent 0); background-size: 35px 35px;"></div>
    </div>
    
    <!-- Decorative Elements -->
    <div class="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full blur-3xl opacity-30"></div>
    <div class="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-pink-100 to-purple-100 rounded-full blur-2xl opacity-30"></div>
    
    <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Header Section -->
      <div class="text-center mb-16">
        <div class="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl mb-6 shadow-lg">
          <span class="text-2xl">💼</span>
        </div>
        <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
          Selected Projects
        </h2>
        <p class="text-xl text-gray-600 max-w-3xl mx-auto">
          A showcase of applications I've built to solve real-world problems and explore creative ideas — combining performance, usability, and modern design.
        </p>
        <div class="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto rounded-full mt-6"></div>
      </div>

      <!-- Projects Grid -->
      <loader :isLoading="isLoading" />
      
      <div v-if="!isLoading" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div 
          v-for="(item, index) in projectArr"
          :key="index"
          class="group"
          data-aos="fade-up"
          :data-aos-delay="index * 200"
        >
          <div class="relative bg-white/70 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-200/50 overflow-hidden hover:shadow-2xl transition-all duration-500 hover:scale-105">
            <!-- Project Image -->
            <div 
              v-if="item?.imageLink" 
              class="relative h-64 overflow-hidden"
              :style="{ backgroundImage: `url(${item?.imageLink})` }"
            >
              <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              
              <!-- Project Number Badge -->
              <div class="absolute top-4 left-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg">
                #{{ index + 1 }}
              </div>
              
              <!-- Hover Overlay -->
              <div class="absolute inset-0 bg-gradient-to-t from-purple-900/80 to-pink-900/80 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                <div class="text-center text-white">
                  <div class="text-2xl mb-2">🚀</div>
                  <div class="font-semibold">View Project</div>
                </div>
              </div>
            </div>
            
            <!-- Project Content -->
            <div class="p-6">
              <h3 class="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors duration-300">
                {{ item?.title }}
              </h3>
              
              <p class="text-gray-600 leading-relaxed mb-4 line-clamp-3">
                {{ item?.description }}
              </p>
            </div>
            
            <!-- Modal Trigger -->
            <app-modal 
              class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" 
              :title="item?.title" 
              :description="item?.description" 
              :url="item?.url" 
              :index="index+1"
            ></app-modal>
          </div>
        </div>
      </div>

      <!-- Call to Action -->
      <div class="mt-16 text-center">
        <div class="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 shadow-xl">
          <h3 class="text-2xl font-bold text-white mb-4">
            Have a Project in Mind?
          </h3>
          <p class="text-purple-100 mb-6 max-w-2xl mx-auto">
            Let's collaborate to bring your ideas to life with cutting-edge technology and innovative design
          </p>
          <button 
            @click="navigateToContact"
            class="bg-white text-purple-600 font-semibold px-8 py-3 rounded-xl hover:shadow-xl transition-all duration-300 hover:scale-105 shadow-lg"
          >
            Start a Project
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import AppModal from './AppModal.vue';
import Loader from './commons/Loader.vue';
import { usePortfolioStore } from '../store/pinia/portfolio';
import { computed } from 'vue';
import { useRouter } from 'vue-router';

export default {
  name: "Project",
  components: {
    AppModal,
    Loader,
  },
  setup() {
    const portfolioStore = usePortfolioStore();
    const router = useRouter();
    const projectArr = computed(() => portfolioStore?.projects);
    const isLoading = computed(() => portfolioStore?.isLoading);

    const navigateToContact = () => {
      router.push('/contact');
    };

    return {
      projectArr,
      isLoading,
      navigateToContact,
    };
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
  outline: 2px solid #8b5cf6;
  outline-offset: 2px;
}

/* Line clamp utility */
.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

/* Background image styling */
.bg-project {
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}

/* Hover effects */
.group:hover .bg-project {
  transform: scale(1.05);
  transition: transform 0.3s ease;
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