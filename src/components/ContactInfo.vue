<template>
  <div class="h-80 w-full min-h-full flex justify-center items-center flex-auto justify-items-center p-12 bg-olive relative">
    <div class="border-2 rounded-full flex flex-col justify-center w-auto p-6 items-center bg-cream relative">
      <svg-icon icon="contactMe"></svg-icon>  
      <div class="text-lg sm:text-5xl font-semibold py-2 text-forest">
        <!-- Hardcoding fullname for SEO visibility -->
        <h1><strong>John Micheal Acera</strong></h1>
      </div>
      
      <!-- Skeleton Loading -->
      <div v-if="isLoading" class="skeleton-container">
        <div class="skeleton-line"></div>
        <div class="skeleton-line"></div>
      </div>
      
      <div v-else> 
        <h2 class="font-semibold">📧 Email: {{ userDetailsData?.email }}</h2>
        <h2 class="font-semibold">📱 Phone: {{ userDetailsData?.contactNumber }}</h2>
      </div>
    </div>
  </div>
</template>

<script>
import SvgIcon from './commons/SvgIcon.vue';
import { usePortfolioStore } from '../store/pinia/portfolio';
import { computed } from 'vue';
export default {
  name: 'AboutMe',
  components: {
    SvgIcon
  },
  setup() {
    const portfolioStore = usePortfolioStore();
    const userDetailsData = computed(() => portfolioStore.userDetails);
    const isLoading = computed(() => portfolioStore.isLoading);

    return {
      isLoading,
      userDetailsData,
    }
  }
}
</script>

<style scoped>
.skeleton-container {
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
  max-width: 300px;
  margin: 20px 0;
}

.skeleton-line {
  height: 20px;
  background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
  background-size: 200% 100%;
  animation: loading 1.5s infinite;
  border-radius: 4px;
}

.skeleton-line:first-child {
  width: 80%;
}

.skeleton-line:last-child {
  width: 70%;
}

@keyframes loading {
  0% {
    background-position: 200% 0;
  }
  100% {
    background-position: -200% 0;
  }
}
</style>