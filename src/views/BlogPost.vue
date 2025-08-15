<template>
  <div class="bg-cream">
    <taskbar />
    <div class="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <!-- Blog Post Header -->
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div class="text-center mb-12">
          <h1 class="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
            My Learnings and Failures in My Founder Journey
          </h1>
          <div class="flex items-center justify-center space-x-2 text-gray-600">
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd" />
            </svg>
            <time datetime="2025-08-14" class="text-lg font-medium">August 14, 2025</time>
          </div>
        </div>

        <!-- Blog Content -->
        <article class="prose prose-lg prose-gray max-w-none">
          <!-- TODO: Backend Integration - This content should be fetched from a database/CMS
               - Blog posts should be stored in a database with fields: title, content, date, slug, meta_description, etc.
               - Content should be markdown/rich text that gets rendered to HTML
               - Add support for blog categories, tags, and search functionality
               - Implement pagination for multiple blog posts
               - Add reading time estimation and view count tracking
               - Consider adding comments system and social sharing
          -->
          <div class="bg-white rounded-2xl shadow-lg p-8 md:p-12 border border-gray-100">
            <h3 class="text-2xl font-semibold text-gray-900 mb-6">
              My learnings and failures in my founder journey
            </h3>

            <p class="text-gray-700 leading-relaxed mb-6">
              Recently, I have been grinding my way out into creating something that I would call my own — something my passion can speak to and could solve a pain point in the world.
            </p>

            <p class="text-gray-700 leading-relaxed mb-6">
              I have read and watched a lot of founder mindset content over the past months, and first it talked about solving a problem that is a personal pain point on my side. I tried that, invested energy, effort, time, and a little bit of cash to create apps and websites for it.
            </p>

            <p class="text-gray-700 leading-relaxed mb-6">
              But you know what?
            </p>

            <p class="text-gray-700 leading-relaxed mb-6">
              Since that is personally my pain point, I thought others could also resonate. But sadly, the place where I live, the people who are here are stuck in a traditional mindset. Even if it is given for free, they have not embraced the app. Even if it does not work how they loved it, I always tell them to let me know how we can modify or evolve it into something of their own. But still, I was met with just some shallow approval but they did not use the app — just some respectful denial, and sadly indifference or what we call being ghosted.
            </p>

            <p class="text-gray-700 leading-relaxed mb-6">
              And that is fine since I know being a founder is much more than this experience. Compared to astronomical experiences others do, like mortgaging their properties, eating ramen, sleeping 4 to 5 hours daily, divorcing their spouses — and the list can go on.
            </p>

            <p class="text-gray-700 leading-relaxed mb-6">
              I am still living a full life: sleeping at least 6 to 7 hours, having my family with me even if most of the time I am misunderstood, still having my home, eating properly on what I truly want. But still, the ache inside me is fully waking me up early in the mornings and so on.
            </p>

            <p class="text-gray-700 leading-relaxed mb-6">
              I like to ship something, and I realize something I know I have already watched in some videos that I tried to reject: it is solving expensive problems — and that is something of a mindset shift I will try later on. Instead of focusing on my personal pain point where users are local here in the country and do not even understand it yet.
            </p>

            <p class="text-gray-700 leading-relaxed mb-6">
              They might think I will be the one benefiting from it more, even though it is mostly free and I am thinking for the long game. I want it to be a win/win solution, not just for me but for them importantly. Money is just a tool, a purpose-driven life is something I am striving for.
            </p>

            <p class="text-gray-700 leading-relaxed mb-6">
              Otherwise, I am just sharing it here for some memories to look back on in the future.
            </p>

            <p class="text-gray-700 leading-relaxed mb-6">
              Let us see how this founder journey goes on. Ciao!
            </p>
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
import { onMounted } from 'vue';

export default {
  name: 'BlogPost',
  components: {
    Taskbar,
    Footer,
  },
  setup() {
    const portfolioStore = usePortfolioStore();

    onMounted(() => {
      // Only fetch if data isn't already loaded
      if (!portfolioStore.isInitialized) {
        portfolioStore.fetchAllData();
      }
    })
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
