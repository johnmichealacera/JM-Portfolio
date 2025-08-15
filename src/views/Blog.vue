<template>
  <div class="bg-cream">
    <taskbar />
    <div class="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <!-- Blog Header -->
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div class="text-center mb-12">
          <h1 class="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
            Blog
          </h1>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            Thoughts, learnings, and reflections from my journey as a developer and entrepreneur.
          </p>
        </div>

        <!-- Blog Posts Grid -->
        <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <!-- Founder Journey Post -->
          <article class="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div class="p-6">
              <div class="flex items-center space-x-2 text-sm text-gray-500 mb-3">
                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd" />
                </svg>
                <time datetime="2025-08-14">August 14, 2025</time>
              </div>
              
              <h2 class="text-xl font-semibold text-gray-900 mb-3 line-clamp-2">
                My Learnings and Failures in My Founder Journey
              </h2>
              
              <p class="text-gray-600 mb-4 line-clamp-3">
                Lessons and reflections from the early days of my founder path. Exploring the challenges, failures, and key insights gained along the way.
              </p>
              
              <router-link 
                to="/blog/my-founder-journey"
                class="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-medium transition-colors duration-200 group"
              >
                <span>Read More</span>
                <svg class="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
              </router-link>
            </div>
          </article>

          <!-- Coming Soon Posts -->
          <article class="bg-gray-50 rounded-2xl border-2 border-dashed border-gray-300 p-6 flex items-center justify-center">
            <div class="text-center text-gray-500">
              <svg class="w-12 h-12 mx-auto mb-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
              <p class="text-sm">More posts coming soon...</p>
            </div>
          </article>

          <article class="bg-gray-50 rounded-2xl border-2 border-dashed border-gray-300 p-6 flex items-center justify-center">
            <div class="text-center text-gray-500">
              <svg class="w-12 h-12 mx-auto mb-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
              <p class="text-sm">More posts coming soon...</p>
            </div>
          </article>
        </div>

        <!-- Newsletter Signup -->
        <div class="mt-16 text-center">
          <div class="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <h3 class="text-2xl font-bold mb-3">Stay Updated</h3>
            <p class="text-blue-100 mb-6 max-w-2xl mx-auto">
              Get notified when I publish new insights about development, entrepreneurship, and my journey.
            </p>
            
            <!-- Email Form -->
            <div v-if="!isSubmitted" class="max-w-md mx-auto">
              <form @submit.prevent="handleSubmit" class="space-y-4">
                <div>
                  <input 
                    v-model="email"
                    type="email" 
                    placeholder="Enter your email"
                    required
                    class="w-full px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-600"
                    :class="{ 'border-red-500 focus:ring-red-500': emailError }"
                  >
                  <p v-if="emailError" class="text-red-300 text-sm mt-1 text-left">{{ emailError }}</p>
                </div>
                
                <button 
                  type="submit"
                  :disabled="isSubmitting"
                  class="w-full px-6 py-3 bg-white text-blue-600 font-medium rounded-lg hover:bg-gray-100 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <span v-if="!isSubmitting">Subscribe</span>
                  <span v-else class="flex items-center justify-center space-x-2">
                    <div class="animate-spin rounded-full h-4 w-4 border-b-2 border-blue-600"></div>
                    <span>Subscribing...</span>
                  </span>
                </button>
              </form>
              
              <p class="text-xs text-blue-200 mt-4 text-center">
                No spam, ever. Your email is safe with me.
              </p>
            </div>

            <!-- Success Message -->
            <div v-if="isSubmitted" class="max-w-md mx-auto">
              <div class="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              <h4 class="text-xl font-semibold mb-2">Thanks for subscribing! 📧</h4>
              <p class="text-blue-100 mb-4">You'll be the first to know when I publish new content.</p>
              <button 
                @click="resetForm"
                class="bg-white/20 text-white font-medium px-6 py-2 rounded-lg hover:bg-white/30 transition-all duration-300"
              >
                Subscribe Another Email
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Taskbar from '../components/Taskbar.vue';
import Footer from '../components/Footer.vue';
import { usePortfolioStore } from '../store/pinia/portfolio';
import { onMounted, ref } from 'vue';

export default {
  name: 'Blog',
  components: {
    Taskbar,
    Footer,
  },
  setup() {
    const portfolioStore = usePortfolioStore();
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
        // TODO: Backend Integration - Replace Web3Forms with backend API call
        // Reference: This should integrate with your portfolio backend to store subscribers
        // and potentially send welcome emails through your own email service
        
        // Send notification to you about the new subscriber
        const response = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            access_key: '125c0549-5a3c-40bf-9503-69ee60b9b8f0',
            subject: `New Blog Subscription: ${email.value}`,
            message: `
Someone subscribed to your blog newsletter!

Email: ${email.value}
Date: ${new Date().toLocaleString()}
User Agent: ${navigator.userAgent}
IP: [Web3Forms will include this]

Please add them to your newsletter list.
            `,
            botcheck: '',
          })
        });

        if (response.ok) {
          const result = await response.json();
          console.log('Web3Forms response:', result);
          
          if (!result.success) {
            throw new Error('Web3Forms submission failed: ' + result.message);
          }
        } else {
          const errorText = await response.text();
          console.error('Web3Forms error response:', errorText);
          throw new Error('Form submission failed: ' + response.status);
        }

        // Show success state
        isSubmitted.value = true;
        
        // Optional: Send to analytics
        if (typeof window !== 'undefined' && window.gtag) {
          window.gtag('event', 'blog_subscription', { 
            email: email.value,
            content_type: 'newsletter',
            content_title: 'Blog Subscription'
          });
        }
        
        // Clear the form
        email.value = '';
        
      } catch (error) {
        console.error('Error submitting subscription:', error);
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

    onMounted(() => {
      // Only fetch if data isn't already loaded
      if (!portfolioStore.isInitialized) {
        portfolioStore.fetchAllData();
      }
    });

    return {
      email,
      emailError,
      isSubmitting,
      isSubmitted,
      handleSubmit,
      resetForm,
    };
  },
}
</script>

<style scoped>
/* Line clamp utilities */
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

/* Enhanced typography */
.text-4xl {
  font-size: 2.25rem;
  line-height: 2.5rem;
}

@media (min-width: 768px) {
  .text-4xl {
    font-size: 3rem;
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

/* Hover effects */
.hover\:-translate-y-1:hover {
  transform: translateY(-0.25rem);
}
</style>
