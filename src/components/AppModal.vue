<template>
  <ul class="h-full flex flex-col justify-center items-center bg-cream text-forest sm:space-y-6 space-y-4 p-5 rounded-lg shadow-md transition hover:shadow-lg bg-opacity-75">
    <li class="sm:text-2xl text-sm font-semibold text-center">
      Project {{ index }} – {{ title }}
    </li>
    <li class="text-xs sm:text-base text-center sm:px-4 sm:py-2 px-0 py-0 sm:leading-relaxed sm:line-clamp-none line-clamp-6">
      {{ description }}
    </li>
    <li>
      <a
        class="inline-block bg-forest text-cream sm:text-lg text-xs sm:px-4 sm:py-2 p-1 rounded-md hover:bg-olive transition-colors duration-200"
        :href="url"
        target="_blank"
        rel="noopener noreferrer"
      >
        SEE PROJECT
      </a>
    </li>
  </ul>
</template>
<script>
import { computed, toRefs } from 'vue';
  export default {
    name: 'app-modal',
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
    setup(props){
    const { url } = toRefs(props);
    const todoAppUrl = computed(() => url);

    return {
      todoAppUrl
    }
  }
  };
</script>