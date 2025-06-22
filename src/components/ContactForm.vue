<template>
  <section class="relative py-16 lg:py-24 bg-gradient-to-br from-gray-50 to-white overflow-hidden">
    <!-- Background Pattern -->
    <div class="absolute inset-0 opacity-5">
      <div class="absolute inset-0" style="background-image: radial-gradient(circle at 1px 1px, #10b981 1px, transparent 0); background-size: 30px 30px;"></div>
    </div>
    
    <!-- Decorative Elements -->
    <div class="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-green-100 to-blue-100 rounded-full blur-3xl opacity-30"></div>
    <div class="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-blue-100 to-green-100 rounded-full blur-2xl opacity-30"></div>
    
    <div class="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Header Section -->
      <div class="text-center mb-16">
        <div class="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-green-600 to-blue-600 rounded-2xl mb-6 shadow-lg">
          <span class="text-2xl">💬</span>
        </div>
        <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
          Start a Conversation
        </h2>
        <p class="text-xl text-gray-600 max-w-2xl mx-auto">
          If you like what you see and want to work together, I'd love to hear from you...
        </p>
        <div class="w-24 h-1 bg-gradient-to-r from-green-600 to-blue-600 mx-auto rounded-full mt-6"></div>
      </div>

      <!-- Contact Form -->
      <div class="bg-white/70 backdrop-blur-sm rounded-3xl shadow-2xl border border-gray-200/50 overflow-hidden">
        <!-- Form Header -->
        <div class="bg-gradient-to-r from-green-600 to-blue-600 px-8 py-6 text-white">
          <div class="flex items-center justify-between">
            <div>
              <h3 class="text-2xl font-bold">Get In Touch</h3>
              <p class="text-green-100">Tell me about your project</p>
            </div>
            <div class="hidden sm:block">
              <div class="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                <span class="text-xl">🚀</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Form Content -->
        <div class="p-8 lg:p-12">
          <form 
            action="https://formsubmit.co/jm@johnmichealacera.com" 
            method="POST"
            class="space-y-8"
          >
            <!-- Disable captcha and set redirect -->
            <input type="hidden" name="_captcha" value="false">
            <input type="hidden" name="_next" value="https://johnmichealacera.com/thank-you">

            <!-- Name Field -->
            <div class="space-y-2">
              <label class="block text-sm font-semibold text-gray-700" for="name">
                Full Name *
              </label>
              <div class="relative">
                <div class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <span class="text-gray-400">👤</span>
                </div>
                <input 
                  class="w-full pl-12 pr-4 py-4 bg-white/50 backdrop-blur-sm border border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300 placeholder-gray-400"
                  id="name" 
                  type="text" 
                  name="name" 
                  placeholder="Enter your full name" 
                  required
                >
              </div>
            </div>

            <!-- Email Field -->
            <div class="space-y-2">
              <label class="block text-sm font-semibold text-gray-700" for="email">
                Email Address *
              </label>
              <div class="relative">
                <div class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <span class="text-gray-400">📧</span>
                </div>
                <input 
                  class="w-full pl-12 pr-4 py-4 bg-white/50 backdrop-blur-sm border border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300 placeholder-gray-400"
                  name="email" 
                  id="email" 
                  type="email" 
                  placeholder="Enter your email address" 
                  required
                >
              </div>
            </div>

            <!-- Message Field -->
            <div class="space-y-2">
              <label class="block text-sm font-semibold text-gray-700" for="message">
                Project Details *
              </label>
              <div class="relative">
                <div class="absolute top-4 left-4 flex items-start pointer-events-none">
                  <span class="text-gray-400">💡</span>
                </div>
                <textarea 
                  name="message" 
                  id="message" 
                  rows="8"
                  class="w-full pl-12 pr-4 py-4 bg-white/50 backdrop-blur-sm border border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300 placeholder-gray-400 resize-none"
                  placeholder="Tell me about your project, timeline, budget, and any specific requirements..."
                  required
                ></textarea>
              </div>
            </div>

            <!-- Submit Button -->
            <div class="flex justify-center pt-4">
              <button 
                type="submit"
                class="bg-gradient-to-r from-green-600 to-blue-600 text-white font-semibold px-12 py-4 rounded-xl hover:shadow-xl transition-all duration-300 hover:scale-105 shadow-lg flex items-center space-x-3 group"
              >
                <span>Send Message</span>
                <svg class="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path>
                </svg>
              </button>
            </div>
          </form>
        </div>

        <!-- Form Footer -->
        <div class="bg-gradient-to-r from-gray-50 to-gray-100 px-8 py-6 border-t border-gray-200">
          <div class="text-center">
            <p class="text-gray-600 font-medium">I typically respond within 24 hours</p>
            <p class="text-gray-500 text-sm mt-1">Let's make something amazing together!</p>
          </div>
        </div>
      </div>

      <!-- Additional Info -->
      <div class="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div class="bg-white/70 backdrop-blur-sm rounded-xl p-6 text-center shadow-lg border border-gray-200/50">
          <div class="w-12 h-12 bg-gradient-to-br from-green-500 to-blue-500 rounded-xl flex items-center justify-center mx-auto mb-4">
            <span class="text-white text-xl">⚡</span>
          </div>
          <h3 class="text-lg font-semibold text-gray-900 mb-2">Quick Response</h3>
          <p class="text-gray-600 text-sm">Get back to you within 24 hours</p>
        </div>
        
        <div class="bg-white/70 backdrop-blur-sm rounded-xl p-6 text-center shadow-lg border border-gray-200/50">
          <div class="w-12 h-12 bg-gradient-to-br from-green-500 to-blue-500 rounded-xl flex items-center justify-center mx-auto mb-4">
            <span class="text-white text-xl">🤝</span>
          </div>
          <h3 class="text-lg font-semibold text-gray-900 mb-2">Free Consultation</h3>
          <p class="text-gray-600 text-sm">Initial project discussion at no cost</p>
        </div>
        
        <div class="bg-white/70 backdrop-blur-sm rounded-xl p-6 text-center shadow-lg border border-gray-200/50">
          <div class="w-12 h-12 bg-gradient-to-br from-green-500 to-blue-500 rounded-xl flex items-center justify-center mx-auto mb-4">
            <span class="text-white text-xl">🔒</span>
          </div>
          <h3 class="text-lg font-semibold text-gray-900 mb-2">Secure & Private</h3>
          <p class="text-gray-600 text-sm">Your information is safe with us</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { computed } from 'vue';

export default {
  name: 'ContactForm',
  setup() {
    const actionString = computed(() => `https://formsubmit.io/send/${process.env.VUE_APP_FORM_EMAIL_CODE}`);
    const redirectUrl = computed(() => `${process.env.VUE_APP_REDIRECT_URL}/thank-you`);
    
    return {
      actionString,
      redirectUrl,
    }
  },
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
input:focus-visible,
textarea:focus-visible {
  outline: 2px solid #10b981;
  outline-offset: 2px;
}

/* Form field animations */
input:focus,
textarea:focus {
  transform: translateY(-1px);
  box-shadow: 0 10px 25px rgba(16, 185, 129, 0.1);
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .text-3xl {
    font-size: 2rem;
  }
  
  .p-8 {
    padding: 1.5rem;
  }
}

@media (max-width: 640px) {
  .text-3xl {
    font-size: 1.75rem;
  }
  
  .px-12 {
    padding-left: 2rem;
    padding-right: 2rem;
  }
}
</style>