<template>
  <div class="absolute inset-0 flex items-center justify-center pointer-events-none">
    <!-- Overlay: Lower opacity for better image visibility -->
    <div class="absolute inset-0 bg-gradient-to-br from-purple-900/50 via-pink-900/50 to-purple-900/50 rounded-2xl transition-all duration-300 z-10"></div>
    <!-- Modal Content -->
    <div class="relative bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl border border-white/20 p-8 max-w-sm w-full mx-auto my-auto transform transition-all duration-300 scale-95 group-hover:scale-100 z-20 flex flex-col items-center justify-center min-h-[320px] min-w-[320px]">
      <!-- Project Title -->
      <h3 class="text-2xl font-bold text-gray-900 text-center mb-6 leading-tight">
        {{ title }}
      </h3>
      <!-- Project Description -->
      <p v-if="description" class="text-gray-600 text-center mb-8 leading-relaxed text-sm">
        {{ description }}
      </p>
      <!-- Action Button -->
      <div class="space-y-4 w-full">
        <a
          v-if="url"
          :href="url"
          target="_blank"
          rel="noopener noreferrer"
          class="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold py-3 px-6 rounded-xl hover:shadow-xl transition-all duration-300 hover:scale-105 shadow-lg flex items-center justify-center space-x-2 group-btn pointer-events-auto"
        >
          <span>View Project</span>
          <svg class="w-4 h-4 group-hover-btn:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
          </svg>
        </a>
      </div>
      <!-- Decorative Elements -->
      <div class="absolute top-4 right-4 w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-60"></div>
      <div class="absolute bottom-4 left-4 w-1 h-1 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-40"></div>
    </div>
  </div>
</template>

<script>
import { computed, toRefs } from 'vue';

export default {
  name: 'AppModal',
  props: {
    index: {
      type: Number,
      default: 1,
    },
    title: {
      type: String,
      default: '',
    },
    description: {
      type: String,
      default: '',
    },
    url: {
      type: String,
      default: '',
    },
  },
  setup(props) {
    const { url } = toRefs(props);
    const todoAppUrl = computed(() => url);

    return {
      todoAppUrl
    }
  }
};
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

/* Modal animations */
@keyframes modalFadeIn {
  from {
    opacity: 0;
    transform: scale(0.9) translateY(-10px);
  }
  to {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
}

/* Hover effects */
.group:hover .opacity-0 {
  animation: modalFadeIn 0.3s ease-out forwards;
}

/* Responsive adjustments */
@media (max-width: 640px) {
  .text-2xl {
    font-size: 1.5rem;
  }
  .p-8 {
    padding: 1.5rem;
  }
  .min-h-\[320px\] {
    min-height: 220px;
  }
  .min-w-\[320px\] {
    min-width: 220px;
  }
}

/* Glassmorphism effects */
.backdrop-blur-md {
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
}

/* Button hover effects */
.group-btn:hover {
  transform: translateY(-1px);
}
</style>