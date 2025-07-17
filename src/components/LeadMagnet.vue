<template>
  <section class="relative py-12 lg:py-16 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 overflow-hidden">
    <!-- Background Pattern -->
    <div class="absolute inset-0 opacity-5">
      <div class="absolute inset-0" style="background-image: radial-gradient(circle at 1px 1px, #3b82f6 1px, transparent 0); background-size: 40px 40px;"></div>
    </div>
    
    <!-- Floating Decorative Elements -->
    <div class="absolute top-10 right-10 w-64 h-64 bg-gradient-to-br from-blue-200 to-purple-200 rounded-full blur-3xl opacity-20 animate-pulse"></div>
    <div class="absolute bottom-10 left-10 w-48 h-48 bg-gradient-to-tr from-purple-200 to-blue-200 rounded-full blur-2xl opacity-20 animate-bounce"></div>
    
    <div class="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Success State -->
      <div v-if="isSubmitted" class="text-center animate-fade-in-up">
        <div class="mb-8">
          <div class="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
            <svg class="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
            </svg>
          </div>
          <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Thanks! Your download is on its way
          </h2>
          <p class="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            I've sent the Dev Toolkit to your email. Check your inbox (and spam folder) for the download link.
          </p>
          <div class="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/50 max-w-md mx-auto">
            <h3 class="font-semibold text-gray-900 mb-2">What's included in your Dev Toolkit:</h3>
            <ul class="text-sm text-gray-600 space-y-1">
              <li class="flex items-center">
                <span class="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></span>
                Essential development tools & extensions
              </li>
              <li class="flex items-center">
                <span class="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></span>
                Productivity-boosting workflows
              </li>
              <li class="flex items-center">
                <span class="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></span>
                Recommended learning resources
              </li>
              <li class="flex items-center">
                <span class="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></span>
                Best practices & tips
              </li>
            </ul>
          </div>
        </div>
        <button 
          @click="resetForm"
          class="inline-flex items-center px-6 py-3 bg-gray-800 text-white font-medium rounded-xl hover:bg-gray-700 transition-all duration-300 hover:scale-105"
        >
          <span>Get Another Copy</span>
        </button>
      </div>

      <!-- Main Lead Magnet Form -->
      <div v-else class="text-center">
        <!-- Icon -->
        <div class="mb-8">
          <div class="w-24 h-24 bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl flex items-center justify-center mx-auto shadow-xl">
            <svg class="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path>
            </svg>
          </div>
        </div>

        <!-- Headline -->
        <h2 class="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
          Get My Dev Toolkit – 
          <span class="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Free</span>
        </h2>

        <!-- Subheadline -->
        <p class="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
          Download a curated list of the tools and services I use to build fast, clean, and scalable web applications. 
          Plus get exclusive tips and workflows that have helped me deliver projects 3x faster.
        </p>

        <!-- Value Props -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div class="bg-white/70 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-white/50">
            <div class="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mb-4 mx-auto">
              <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
              </svg>
            </div>
            <h3 class="font-semibold text-gray-900 mb-2">Save Hours</h3>
            <p class="text-sm text-gray-600">Skip the trial and error with proven tools that work</p>
          </div>
          
          <div class="bg-white/70 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-white/50">
            <div class="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mb-4 mx-auto">
              <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
            <h3 class="font-semibold text-gray-900 mb-2">Proven Stack</h3>
            <p class="text-sm text-gray-600">Tools I've used in production for years</p>
          </div>
          
          <div class="bg-white/70 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-white/50">
            <div class="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-4 mx-auto">
              <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
              </svg>
            </div>
            <h3 class="font-semibold text-gray-900 mb-2">Best Practices</h3>
            <p class="text-sm text-gray-600">Learn from my mistakes and successes</p>
          </div>
        </div>

        <!-- Email Form -->
        <div class="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/50 max-w-md mx-auto">
          <form @submit.prevent="handleSubmit" class="space-y-4">
            <div>
              <label for="email" class="block text-sm font-medium text-gray-700 mb-2 text-left">
                Your Email Address
              </label>
              <input
                id="email"
                v-model="email"
                type="email"
                required
                placeholder="you@example.com"
                class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white/50 backdrop-blur-sm"
                :class="{ 'border-red-500 focus:ring-red-500': emailError }"
              />
              <p v-if="emailError" class="text-red-500 text-sm mt-1 text-left">{{ emailError }}</p>
            </div>
            
            <button
              type="submit"
              :disabled="isSubmitting"
              class="w-full group bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-3 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
            >
              <span v-if="!isSubmitting" class="flex items-center justify-center space-x-2">
                <svg class="w-5 h-5 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                </svg>
                <span>Download Now</span>
              </span>
              <span v-else class="flex items-center justify-center space-x-2">
                <svg class="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                  <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                  <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                <span>Processing...</span>
              </span>
            </button>
          </form>
          
          <p class="text-xs text-gray-500 mt-4">
            No spam, ever. Unsubscribe at any time. Your email is safe with me.
          </p>
        </div>

        <!-- Social Proof -->
        <div class="mt-8 flex items-center justify-center space-x-6 text-sm text-gray-500">
          <div class="flex items-center space-x-2">
            <svg class="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            <span>Free forever</span>
          </div>
          <div class="flex items-center space-x-2">
            <svg class="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            <span>Instant download</span>
          </div>
          <div class="flex items-center space-x-2">
            <svg class="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            <span>No credit card</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { ref } from 'vue';

export default {
  name: "LeadMagnet",
  setup() {
    const email = ref('');
    const emailError = ref('');
    const isSubmitting = ref(false);
    const isSubmitted = ref(false);

    const validateEmail = (email) => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    };

    const handleSubmit = async () => {
      // Reset error
      emailError.value = '';
      
      // Validate email
      if (!email.value) {
        emailError.value = 'Please enter your email address';
        return;
      }
      
      if (!validateEmail(email.value)) {
        emailError.value = 'Please enter a valid email address';
        return;
      }

      isSubmitting.value = true;

      try {
        // Simulate API call - replace with your actual form submission
        await new Promise(resolve => setTimeout(resolve, 1500));
        
        // For now, we'll just show success
        // In production, you'd send this to Formspree, your backend, etc.
        console.log('Email submitted:', email.value);
        
        // Show success state
        isSubmitted.value = true;
        
        // Optional: Send to analytics or tracking service
        // gtag('event', 'lead_magnet_download', { email: email.value });
        
      } catch (error) {
        console.error('Error submitting form:', error);
        emailError.value = 'Something went wrong. Please try again.';
      } finally {
        isSubmitting.value = false;
      }
    };

    const resetForm = () => {
      email.value = '';
      emailError.value = '';
      isSubmitted.value = false;
    };

    return {
      email,
      emailError,
      isSubmitting,
      isSubmitted,
      handleSubmit,
      resetForm,
    };
  }
};
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

.animate-fade-in-up {
  animation: fade-in-up 0.8s ease-out forwards;
}

/* Smooth transitions */
* {
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}

/* Focus styles for accessibility */
button:focus-visible,
input:focus-visible {
  outline: 2px solid #3b82f6;
  outline-offset: 2px;
}

/* Glass morphism effect */
.backdrop-blur-sm {
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
}
</style> 