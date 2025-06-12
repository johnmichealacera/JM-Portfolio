<template>
  <div class="manifesto-container py-16 px-4 sm:px-8">
    <!-- Download Button -->
    <div class="max-w-4xl mb-6 flex justify-end align-end">
      <button 
        @click="downloadPDF"
        class="download-btn px-6 py-2 bg-cream text-forest rounded-lg hover:bg-opacity-90 transition-all flex items-center justify-end"
        :disabled="isGeneratingPDF"
      >
        <span v-if="isGeneratingPDF">Generating PDF...</span>
        <span v-else>
          <div class="flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clip-rule="evenodd" />
            </svg>
            <span>Download Manifesto</span>
          </div>
        </span>
      </button>
    </div>

    <!-- Manifesto Content -->
    <div 
      ref="manifestoContent"
      data-aos="fade-up" 
      class="manifesto-content max-w-4xl mx-auto bg-forest text-cream p-8 sm:p-12 rounded-lg border-2"
    >
      <header class="text-center mb-12">
        <h1 class="text-3xl sm:text-4xl font-bold mb-4">Personal Developer Manifesto</h1>
        <h2 class="text-xl sm:text-2xl italic">"Rooted in growth. Driven by purpose."</h2>
        <!-- Add the introduction text -->
        <p class="text-base sm:text-lg italic text-cream/90 max-w-2xl mx-auto">
          This manifesto is my personal reminder — not to replace faith, but to center myself when the noise of the world tries to distract me from who I am and what I value.
        </p>
      </header>

      <div class="manifesto-sections space-y-12">
        <loader :isLoading="isLoading"/>
        <!-- First Section -->
        <section class="space-y-6">
          <template v-for="(line, index) in firstSection" :key="'first-'+index">
            <p class="manifesto-line">{{ line }}</p>
          </template>
        </section>

        <!-- Second Section -->
        <section class="space-y-6">
          <template v-for="(line, index) in secondSection" :key="'second-'+index">
            <p class="manifesto-line">{{ line }}</p>
          </template>
        </section>

        <!-- Final Section -->
        <section class="space-y-6">
          <template v-for="(line, index) in finalSection" :key="'final-'+index">
            <p class="manifesto-line">{{ line }}</p>
          </template>
        </section>
      </div>
    </div>
  </div>
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
    const portfolioStore = usePortfolioStore();
    const firstSection = computed(() => portfolioStore.firstSection);
    const secondSection = computed(() => portfolioStore.secondSection);
    const finalSection = computed(() => portfolioStore.finalSection);
    const isLoading = computed(() => portfolioStore.isLoading);
    const getStaticContent = () => {
      return `
        <div class="manifesto-content max-w-4xl mx-auto bg-forest text-cream p-8 sm:p-12 rounded-lg border-2">
          <header class="text-center mb-12">
            <h1 class="text-3xl sm:text-4xl font-bold mb-4">Personal Developer Manifesto</h1>
            <h2 class="text-xl sm:text-2xl italic">"Rooted in growth. Driven by purpose."</h2>
            <p class="text-base sm:text-lg italic text-cream/90 max-w-2xl mx-auto">
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
    // TODO: Transfer it as a helper function
    const downloadPDF = async () => {
      isGeneratingPDF.value = true;
      let pdfContent = null;

      try {
        // Create a new div for PDF content
        pdfContent = document.createElement('div');
        pdfContent.className = 'pdf-content';
        
        // Set the static content
        pdfContent.innerHTML = getStaticContent();

        // Add the container to the document temporarily
        document.body.appendChild(pdfContent);

        // PDF options
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

        // Generate PDF
        await html2pdf().set(options).from(pdfContent).save();

      } catch (error) {
        console.error('Error generating PDF:', error);
        alert('There was an error generating the PDF. Please try again.');
      } finally {
        // ✅ ALWAYS clean up, regardless of success or failure
        if (pdfContent && document.body.contains(pdfContent)) {
          document.body.removeChild(pdfContent);
        }
        isGeneratingPDF.value = false;
      }
    };

    return {
      manifestoContent,
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
.manifesto-container {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  /* justify-content: center; */
  background-color: rgba(0, 0, 0, 0.02);
}

.manifesto-content {
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
}

.manifesto-sections {
  font-family: 'Georgia', serif;
  font-size: 1.125rem;
  line-height: 1.75;
}

.manifesto-line {
  opacity: 0;
  animation: fadeIn 0.5s ease-in forwards;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Add animation delay for each line */
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

/* Responsive text sizes */
@media (max-width: 640px) {
  .manifesto-sections {
    font-size: 1rem;
  }
}

.download-btn {
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.download-btn:hover {
  transform: translateY(-1px);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.download-btn:disabled {
  opacity: 0.7;
  cursor: not-allowed;
  transform: none;
}

/* Add print styles to ensure proper PDF rendering */
@media print {
  .manifesto-container {
    padding: 0;
    margin: 0;
  }

  .manifesto-content {
    box-shadow: none;
    border: none;
  }

  .download-btn {
    display: none;
  }
}

/* Add specific styles for PDF content */
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