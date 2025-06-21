<template>
  <nav class="bg-white/95 backdrop-blur-sm border-b border-gray-200/50 sticky top-0 z-50 shadow-sm">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-16">
        <!-- Logo/Brand -->
        <div class="flex-shrink-0">
          <router-link 
            to="/" 
            class="flex items-center space-x-2 group"
            @click="closeMobileMenu"
          >
            <div class="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105">
              <span class="text-white font-bold text-sm">JM</span>
            </div>
            <span class="text-xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
              John Micheal
            </span>
          </router-link>
        </div>

        <!-- Desktop Navigation -->
        <div class="hidden md:flex items-center space-x-1">
          <router-link 
            v-for="item in navigationItems" 
            :key="item.path"
            :to="item.path"
            class="relative px-4 py-2 text-sm font-medium text-gray-700 rounded-lg transition-all duration-200 hover:text-blue-600 hover:bg-blue-50 group"
            :class="{ 'text-blue-600 bg-blue-50': $route.path === item.path }"
          >
            {{ item.name }}
            <span 
              class="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-300 group-hover:w-full"
              :class="{ 'w-full': $route.path === item.path }"
            ></span>
          </router-link>
        </div>

        <!-- Mobile menu button -->
        <div class="md:hidden">
          <button
            @click="toggleMobileMenu"
            class="relative w-10 h-10 flex items-center justify-center rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            :aria-label="isMobileMenuOpen ? 'Close menu' : 'Open menu'"
          >
            <div class="relative w-6 h-6">
              <span 
                class="absolute top-0 left-0 w-6 h-0.5 bg-gray-700 transform transition-all duration-300"
                :class="isMobileMenuOpen ? 'rotate-45 translate-y-2.5' : 'translate-y-0'"
              ></span>
              <span 
                class="absolute top-2 left-0 w-6 h-0.5 bg-gray-700 transform transition-all duration-300"
                :class="isMobileMenuOpen ? 'opacity-0' : 'opacity-100'"
              ></span>
              <span 
                class="absolute top-4 left-0 w-6 h-0.5 bg-gray-700 transform transition-all duration-300"
                :class="isMobileMenuOpen ? '-rotate-45 -translate-y-2.5' : 'translate-y-0'"
              ></span>
            </div>
          </button>
        </div>
      </div>

      <!-- Mobile Navigation Menu -->
      <div 
        class="md:hidden"
        :class="isMobileMenuOpen ? 'block' : 'hidden'"
      >
        <div class="px-2 pt-2 pb-3 space-y-1 bg-white rounded-lg shadow-lg border border-gray-200 mt-2">
          <router-link
            v-for="item in navigationItems"
            :key="item.path"
            :to="item.path"
            @click="closeMobileMenu"
            class="block px-3 py-2 text-base font-medium rounded-md transition-all duration-200 hover:bg-blue-50 hover:text-blue-600"
            :class="$route.path === item.path ? 'bg-blue-50 text-blue-600' : 'text-gray-700'"
          >
            <div class="flex items-center space-x-3">
              <component :is="item.icon" class="w-5 h-5" />
              <span>{{ item.name }}</span>
              <div 
                v-if="$route.path === item.path"
                class="ml-auto w-2 h-2 bg-blue-600 rounded-full"
              ></div>
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import { ref, computed } from 'vue';

// Simple icon components
const ManifestoIcon = {
  template: `<svg fill="currentColor" viewBox="0 0 20 20"><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>`
};

const AboutIcon = {
  template: `<svg fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"/></svg>`
};

const ContactIcon = {
  template: `<svg fill="currentColor" viewBox="0 0 20 20"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/></svg>`
};

const PortfolioIcon = {
  template: `<svg fill="currentColor" viewBox="0 0 20 20"><path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"/></svg>`
};

export default {
  name: 'Taskbar',
  components: {
    ManifestoIcon,
    AboutIcon,
    ContactIcon,
    PortfolioIcon
  },
  setup() {
    const isMobileMenuOpen = ref(false);

    const navigationItems = computed(() => [
      {
        name: 'Portfolio',
        path: '/portfolio',
        icon: PortfolioIcon
      },
      {
        name: 'Manifesto',
        path: '/manifesto',
        icon: ManifestoIcon
      },
      {
        name: 'About',
        path: '/about',
        icon: AboutIcon
      },
      {
        name: 'Contact',
        path: '/contact',
        icon: ContactIcon
      }
    ]);

    const toggleMobileMenu = () => {
      isMobileMenuOpen.value = !isMobileMenuOpen.value;
    };

    const closeMobileMenu = () => {
      isMobileMenuOpen.value = false;
    };

    return {
      isMobileMenuOpen,
      navigationItems,
      toggleMobileMenu,
      closeMobileMenu
    };
  }
};
</script>

<style scoped>
/* Custom scrollbar for mobile menu */
.mobile-menu::-webkit-scrollbar {
  width: 4px;
}

.mobile-menu::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 2px;
}

.mobile-menu::-webkit-scrollbar-thumb {
  background: #c1c1c1;
  border-radius: 2px;
}

.mobile-menu::-webkit-scrollbar-thumb:hover {
  background: #a8a8a8;
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

/* Hover effects for desktop navigation */
.router-link-active {
  position: relative;
}

.router-link-active::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 100%;
  height: 2px;
  background: linear-gradient(90deg, #3b82f6, #8b5cf6);
  border-radius: 1px;
}

/* Mobile menu animation */
.mobile-menu-enter-active,
.mobile-menu-leave-active {
  transition: all 0.3s ease;
}

.mobile-menu-enter-from,
.mobile-menu-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

/* Glass morphism effect for the navbar */
.bg-white\/95 {
  background-color: rgba(255, 255, 255, 0.95);
}

.backdrop-blur-sm {
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
}

/* Enhanced shadow for depth */
.shadow-sm {
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05), 0 1px 3px 1px rgba(0, 0, 0, 0.1);
}
</style>