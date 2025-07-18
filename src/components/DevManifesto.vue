<template>
  <section class="relative min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 overflow-hidden">
    <!-- Background Pattern -->
    <div class="absolute inset-0 opacity-5">
      <div class="absolute inset-0" style="background-image: radial-gradient(circle at 1px 1px, #3b82f6 1px, transparent 0); background-size: 40px 40px;"></div>
    </div>
    
    <!-- Decorative Elements -->
    <div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-200 to-purple-200 rounded-full blur-3xl opacity-30"></div>
    <div class="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-purple-200 to-blue-200 rounded-full blur-2xl opacity-30"></div>
    
    <div class="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
      <!-- Header Section -->
      <div class="text-center mb-16">
        <div class="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl mb-6 shadow-lg">
          <span class="text-2xl">📜</span>
        </div>
        <h1 class="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
          Personal Developer Manifesto
        </h1>
        <p class="text-xl lg:text-2xl text-gray-600 mb-6">
          "Rooted in growth. Driven by purpose."
        </p>
        <p class="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
          This manifesto is my personal reminder — not to replace faith, but to center myself when the noise of the world tries to distract me from who I am and what I value.
        </p>
        <div class="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mt-8"></div>
      </div>

      <!-- Download Section -->
      <div class="flex flex-col items-center mb-12 space-y-6">
        <!-- Email Collection Form -->
        <div v-if="!emailSubmitted" class="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-white/50 max-w-md w-full">
          <h3 class="text-lg font-semibold text-gray-900 mb-4 text-center">Get Your Copy</h3>
          <form @submit.prevent="submitEmail" class="space-y-4">
            <div>
              <label for="manifesto-email" class="block text-sm font-medium text-gray-700 mb-2">
                Your Email Address
              </label>
              <input
                id="manifesto-email"
                v-model="email"
                type="email"
                required
                placeholder="you@example.com"
                class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white/50 backdrop-blur-sm"
                :class="{ 'border-red-500 focus:ring-red-500': emailError }"
              />
              <p v-if="emailError" class="text-red-500 text-sm mt-1">{{ emailError }}</p>
            </div>
            
            <button
              type="submit"
              :disabled="isSubmitting"
              class="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-3 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <span v-if="!isSubmitting" class="flex items-center justify-center space-x-2">
                <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clip-rule="evenodd" />
                </svg>
                <span>Get Manifesto PDF</span>
              </span>
              <span v-else class="flex items-center justify-center space-x-2">
                <div class="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                <span>Processing...</span>
              </span>
            </button>
          </form>
          
          <p class="text-xs text-gray-500 mt-4 text-center">
            No spam, ever. Your email is safe with me.
          </p>
        </div>

        <!-- Success Message -->
        <div v-if="emailSubmitted" class="bg-green-50 border border-green-200 rounded-2xl p-6 max-w-md w-full text-center">
          <div class="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
            </svg>
          </div>
          <h3 class="text-lg font-semibold text-green-900 mb-2">Thanks! Check Your Email 📧</h3>
          <p class="text-green-700 mb-4">I've received your request and will send you the Developer Manifesto PDF shortly.</p>
          <button 
            @click="emailSubmitted = false; email = ''"
            class="bg-green-600 text-white font-semibold px-6 py-2 rounded-lg hover:bg-green-700 transition-all duration-300"
          >
            Request Another Copy
          </button>
        </div>
      </div>

      <!-- Manifesto Content -->
      <div 
        ref="manifestoContent"
        class="max-w-5xl mx-auto bg-white/70 backdrop-blur-sm rounded-3xl shadow-2xl border border-gray-200/50 overflow-hidden"
      >
        <!-- Content Header -->
        <div class="bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-6 text-white">
          <div class="flex items-center justify-between">
            <div>
              <h2 class="text-2xl font-bold">Developer Principles</h2>
              <p class="text-blue-100">Core values that guide my work and decisions</p>
            </div>
            <div class="hidden sm:block">
              <div class="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                <span class="text-xl">💡</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Manifesto Sections -->
        <div class="p-8 lg:p-12">
          <loader :isLoading="isLoading" />
          
          <div v-if="!isLoading" class="space-y-12">
            <!-- First Section -->
            <section class="manifesto-section">
              <div class="section-header mb-8">
                <div class="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center mb-4">
                  <span class="text-white text-xl">1</span>
                </div>
                <h3 class="text-xl font-semibold text-gray-900">Foundation Principles</h3>
              </div>
              <div class="space-y-6">
                <div 
                  v-for="(line, index) in firstSection" 
                  :key="'first-'+index"
                  class="manifesto-line bg-gray-50/50 rounded-xl p-6 hover:bg-gray-50 transition-all duration-300 hover:shadow-md"
                >
                  <p class="text-gray-700 leading-relaxed text-lg">{{ line }}</p>
                </div>
              </div>
            </section>

            <!-- Second Section -->
            <section class="manifesto-section">
              <div class="section-header mb-8">
                <div class="w-12 h-12 bg-gradient-to-br from-green-500 to-blue-500 rounded-xl flex items-center justify-center mb-4">
                  <span class="text-white text-xl">2</span>
                </div>
                <h3 class="text-xl font-semibold text-gray-900">Growth & Development</h3>
              </div>
              <div class="space-y-6">
                <div 
                  v-for="(line, index) in secondSection" 
                  :key="'second-'+index"
                  class="manifesto-line bg-gray-50/50 rounded-xl p-6 hover:bg-gray-50 transition-all duration-300 hover:shadow-md"
                >
                  <p class="text-gray-700 leading-relaxed text-lg">{{ line }}</p>
                </div>
              </div>
            </section>

            <!-- Final Section -->
            <section class="manifesto-section">
              <div class="section-header mb-8">
                <div class="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mb-4">
                  <span class="text-white text-xl">3</span>
                </div>
                <h3 class="text-xl font-semibold text-gray-900">Purpose & Impact</h3>
              </div>
              <div class="space-y-6">
                <div 
                  v-for="(line, index) in finalSection" 
                  :key="'final-'+index"
                  class="manifesto-line bg-gray-50/50 rounded-xl p-6 hover:bg-gray-50 transition-all duration-300 hover:shadow-md"
                >
                  <p class="text-gray-700 leading-relaxed text-lg">{{ line }}</p>
                </div>
              </div>
            </section>
          </div>
        </div>

        <!-- Footer -->
        <div class="bg-gradient-to-r from-gray-50 to-gray-100 px-8 py-6 border-t border-gray-200">
          <div class="text-center">
            <p class="text-gray-600 font-medium">Living these principles daily</p>
            <p class="text-gray-500 text-sm mt-1">Updated regularly as I grow and learn</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { ref, computed } from 'vue';
import html2pdf from 'html2pdf.js';
import { usePortfolioStore } from '../store/pinia/portfolio';
import Loader from './commons/Loader.vue';

export default {
  name: 'DevManifesto',
  components: {
    Loader
  },
  setup() {
    const manifestoContent = ref(null);
    const isGeneratingPDF = ref(false);
    const email = ref('');
    const emailError = ref('');
    const isSubmitting = ref(false);
    const emailSubmitted = ref(false);
    const portfolioStore = usePortfolioStore();
    const firstSection = computed(() => portfolioStore.firstSection);
    const secondSection = computed(() => portfolioStore.secondSection);
    const finalSection = computed(() => portfolioStore.finalSection);
    const isLoading = computed(() => portfolioStore.isLoading);
    
    const getStaticContent = () => {
      return `
        <div class="manifesto-content max-w-4xl mx-auto bg-white p-8 rounded-lg">
          <header class="text-center mb-12">
            <h1 class="text-3xl font-bold mb-4 text-gray-900">Personal Developer Manifesto</h1>
            <h2 class="text-xl italic text-gray-600">"Rooted in growth. Driven by purpose."</h2>
            <p class="text-base italic text-gray-600 max-w-2xl mx-auto">
              This manifesto is my personal reminder — not to replace faith, but to center myself when the noise of the world tries to distract me from who I am and what I value.
            </p>
          </header>

          <div class="manifesto-sections space-y-12">
            <section class="space-y-6">
              ${firstSection.value.map(line => `<p class="manifesto-line">${line}</p>`).join('')}
            </section>

            <section class="space-y-6">
              ${secondSection.value.map(line => `<p class="manifesto-line">${line}</p>`).join('')}
            </section>

            <section class="space-y-6">
              ${finalSection.value.map(line => `<p class="manifesto-line">${line}</p>`).join('')}
            </section>
          </div>
        </div>
      `;
    };
    
    const validateEmail = (email) => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    };

    const submitEmail = async () => {
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
        // Submit to Web3Forms for notification
        const response = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            access_key: '125c0549-5a3c-40bf-9503-69ee60b9b8f0',
            subject: `New Manifesto Request: ${email.value}`,
            message: `
Someone requested your Developer Manifesto PDF!

Email: ${email.value}
Date: ${new Date().toLocaleString()}
User Agent: ${navigator.userAgent}
IP: [Web3Forms will include this]

Please send them the PDF manually.
            `,
            botcheck: '', // Anti-bot protection
          })
        });

        if (response.ok) {
          // Show success state
          emailSubmitted.value = true;
          
          // Optional: Send to analytics
          if (typeof window !== 'undefined' && window.gtag) {
            window.gtag('event', 'manifesto_download', { 
              email: email.value,
              content_type: 'manifesto',
              content_title: 'Developer Manifesto'
            });
          }
          
          // Clear the form
          email.value = '';
        } else {
          throw new Error('Form submission failed');
        }
        
      } catch (error) {
        console.error('Error submitting form:', error);
        emailError.value = 'Something went wrong. Please try again.';
      } finally {
        isSubmitting.value = false;
      }
    };

    const downloadPDF = async () => {
      isGeneratingPDF.value = true;
      let pdfContent = null;

      try {
        pdfContent = document.createElement('div');
        pdfContent.className = 'pdf-content';
        pdfContent.innerHTML = getStaticContent();
        document.body.appendChild(pdfContent);

        const options = {
          margin: 1,
          filename: 'Personal-Developer-Manifesto.pdf',
          image: { type: 'jpeg', quality: 0.98 },
          html2canvas: { 
            scale: 2,
            useCORS: true,
            letterRendering: true
          },
          jsPDF: { 
            unit: 'in', 
            format: 'letter', 
            orientation: 'portrait' 
          }
        };

        await html2pdf().set(options).from(pdfContent).save();

      } catch (error) {
        console.error('Error generating PDF:', error);
        alert('There was an error generating the PDF. Please try again.');
      } finally {
        if (pdfContent && document.body.contains(pdfContent)) {
          document.body.removeChild(pdfContent);
        }
        isGeneratingPDF.value = false;
      }
    };

    return {
      manifestoContent,
      email,
      emailError,
      isSubmitting,
      emailSubmitted,
      submitEmail,
      isGeneratingPDF,
      firstSection,
      secondSection,
      finalSection,
      downloadPDF,
      isLoading
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
  outline: 2px solid #3b82f6;
  outline-offset: 2px;
}

/* Manifesto line animations */
.manifesto-line {
  opacity: 0;
  animation: fadeInUp 0.6s ease-out forwards;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Staggered animation delays */
.manifesto-line:nth-child(1) { animation-delay: 0.1s; }
.manifesto-line:nth-child(2) { animation-delay: 0.2s; }
.manifesto-line:nth-child(3) { animation-delay: 0.3s; }
.manifesto-line:nth-child(4) { animation-delay: 0.4s; }
.manifesto-line:nth-child(5) { animation-delay: 0.5s; }
.manifesto-line:nth-child(6) { animation-delay: 0.6s; }
.manifesto-line:nth-child(7) { animation-delay: 0.7s; }
.manifesto-line:nth-child(8) { animation-delay: 0.8s; }
.manifesto-line:nth-child(9) { animation-delay: 0.9s; }
.manifesto-line:nth-child(10) { animation-delay: 1s; }
.manifesto-line:nth-child(11) { animation-delay: 1.1s; }
.manifesto-line:nth-child(12) { animation-delay: 1.2s; }
.manifesto-line:nth-child(13) { animation-delay: 1.3s; }
.manifesto-line:nth-child(14) { animation-delay: 1.4s; }
.manifesto-line:nth-child(15) { animation-delay: 1.5s; }

/* Section styling */
.manifesto-section {
  scroll-margin-top: 2rem;
}

.section-header {
  border-bottom: 2px solid #e5e7eb;
  padding-bottom: 1rem;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .text-4xl {
    font-size: 2.5rem;
  }
  
  .text-2xl {
    font-size: 1.5rem;
  }
  
  .text-lg {
    font-size: 1rem;
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

/* Print styles for PDF */
@media print {
  .manifesto-content {
    box-shadow: none;
    border: none;
  }
}

/* PDF content styles */
.pdf-content {
  position: absolute;
  left: -9999px;
  top: -9999px;
}

.pdf-content .manifesto-content {
  background-color: #ffffff;
  color: #000000;
  padding: 2in;
  width: 8.5in;
  min-height: 11in;
  box-shadow: none;
  border: none;
}

.pdf-content .manifesto-sections {
  font-family: 'Georgia', serif;
  font-size: 12pt;
  line-height: 1.6;
}

.pdf-content h1 {
  font-size: 24pt;
  margin-bottom: 0.5in;
}

.pdf-content h2 {
  font-size: 18pt;
  margin-bottom: 0.75in;
}

.pdf-content .manifesto-line {
  margin-bottom: 0.25in;
  opacity: 1 !important;
  animation: none !important;
}
</style>