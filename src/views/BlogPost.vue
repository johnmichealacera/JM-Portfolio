<template>
  <div class="bg-cream">
    <taskbar />
    <div class="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <!-- Blog Post Header -->
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <!-- Loading State -->
        <div v-if="isLoading" class="text-center py-12">
          <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p class="text-gray-600">Loading blog post...</p>
        </div>

        <!-- Blog Post Content -->
        <div v-else-if="blogPost" class="text-center mb-12">
          <h1 class="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
            {{ blogPost.title }}
          </h1>
          <div class="flex items-center justify-center space-x-2 text-gray-600 mb-4">
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd" />
            </svg>
            <time :datetime="blogPost.date.toISOString()" class="text-lg font-medium">{{ formatDate(blogPost.date) }}</time>
          </div>

          <!-- Author -->
          <div class="text-gray-600 mb-4">
            <span class="font-medium">By {{ blogPost.author }}</span>
          </div>

          <!-- Tags -->
          <div v-if="blogPost.tags && blogPost.tags.length > 0" class="flex flex-wrap justify-center gap-2 mb-6">
            <span 
              v-for="tag in blogPost.tags" 
              :key="tag"
              class="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full"
            >
              {{ tag }}
            </span>
          </div>
        </div>

        <!-- Not Found State -->
        <div v-else class="text-center py-12">
          <div class="bg-gray-50 rounded-2xl border-2 border-dashed border-gray-300 p-12">
            <svg class="w-16 h-16 mx-auto mb-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
            <h3 class="text-xl font-semibold text-gray-600 mb-2">Blog post not found</h3>
            <p class="text-gray-500">The blog post you're looking for doesn't exist or has been removed.</p>
            <router-link 
              to="/blog" 
              class="inline-flex items-center space-x-2 px-4 py-2 mt-4 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-200"
            >
              <span>Back to Blog</span>
            </router-link>
          </div>
        </div>

        <!-- Blog Content -->
        <article v-if="blogPost" class="prose prose-lg prose-gray max-w-none">
          <div class="bg-white rounded-2xl shadow-lg p-8 md:p-12 border border-gray-100">
            <!-- Render blog content blocks -->
            <div v-for="(contentBlock, index) in blogPost.content" :key="index" class="mb-6">
              <!-- Validate content block structure -->
              <div v-if="!contentBlock || typeof contentBlock !== 'object' || !contentBlock.blockType || !contentBlock.value" class="text-red-500 text-sm">
                Invalid content block structure
              </div>
              
              <!-- Handle different block types -->
              <div v-else-if="contentBlock.blockType === 'paragraph'" class="text-gray-700 leading-relaxed">
                {{ contentBlock.value }}
              </div>
              
              <!-- TODO: Add support for other block types like headings, lists, etc. -->
              <!-- 
              <div v-else-if="contentBlock.blockType === 'heading'" class="text-2xl font-semibold text-gray-900 mb-4">
                {{ contentBlock.value }}
              </div>
              <div v-else-if="contentBlock.blockType === 'list'" class="list-disc list-inside text-gray-700 leading-relaxed">
                <ul>
                  <li v-for="item in contentBlock.value.split('\n')" :key="item">{{ item }}</li>
                </ul>
              </div>
              <div v-else-if="contentBlock.blockType === 'quote'" class="border-l-4 border-blue-500 pl-4 italic text-gray-600">
                "{{ contentBlock.value }}"
              </div>
              -->
              
              <!-- Fallback for unknown block types -->
              <div v-else class="text-gray-700 leading-relaxed">
                {{ contentBlock.value }}
              </div>
            </div>
          </div>
        </article>

        <!-- Back to Blog Link -->
        <div class="text-center mt-12">
          <router-link 
            to="/blog" 
            class="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            <span>Back to Blog</span>
          </router-link>
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
import { onMounted, computed, watch } from 'vue';
import { useRoute } from 'vue-router';

export default {
  name: 'BlogPost',
  components: {
    Taskbar,
    Footer,
  },
  props: {
    slug: {
      type: String,
      required: true
    }
  },
  setup(props) {
    const portfolioStore = usePortfolioStore();
    const route = useRoute();

    // Get the slug from props or route params
    const postSlug = computed(() => props.slug || route.params.slug);

    // Get blog post data from store
    const blogPost = computed(() => {
      const post = portfolioStore.getBlogPostBySlug(postSlug.value);
      console.log('Looking for blog post with slug:', postSlug.value);
      console.log('Available blog posts:', portfolioStore.blogPosts);
      console.log('Found blog post:', post);
      return post;
    });
    const isLoading = computed(() => portfolioStore.isLoading);

    // Helper method for date formatting
    const formatDate = (date) => {
      if (!date) return '';
      return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      });
    };

    onMounted(async () => {
      // Always ensure data is loaded when component mounts
      if (!portfolioStore.isInitialized || portfolioStore.blogPosts.length === 0) {
        await portfolioStore.fetchAllData();
      }
      
      // If still no blog post found after fetching, try to fetch again
      if (!blogPost.value && postSlug.value) {
        console.log('Blog post not found, attempting to fetch data again...');
        await portfolioStore.fetchAllData(true); // Force refresh
      }
    });

    // Watch for route changes to handle navigation between blog posts
    watch(() => route.params.slug, async (newSlug, oldSlug) => {
      if (newSlug && newSlug !== oldSlug) {
        console.log('Route changed, checking if blog post exists...');
        // If the blog post doesn't exist in the current data, fetch again
        if (!portfolioStore.getBlogPostBySlug(newSlug)) {
          console.log('Blog post not found in current data, fetching...');
          await portfolioStore.fetchAllData(true);
        }
      }
    });

    return {
      blogPost,
      isLoading,
      formatDate,
    };
  },
}
</script>

<style scoped>
/* Custom prose styles for better readability */
.prose {
  color: #374151;
}

.prose h3 {
  color: #111827;
  font-weight: 600;
  margin-bottom: 1.5rem;
}

.prose p {
  margin-bottom: 1.5rem;
  line-height: 1.75;
  color: #4B5563;
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

/* Gradient text effect */
.bg-gradient-to-r {
  background-image: linear-gradient(to right, var(--tw-gradient-stops));
}

.from-blue-600 {
  --tw-gradient-from: #2563eb;
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgba(37, 99, 235, 0));
}

.to-purple-600 {
  --tw-gradient-to: #9333ea;
}

.hover\:from-blue-700:hover {
  --tw-gradient-from: #1d4ed8;
}

.hover\:to-purple-700:hover {
  --tw-gradient-to: #7c3aed;
}
</style>
