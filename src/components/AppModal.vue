<template>
  <ul class="h-full flex flex-col justify-center items-center bg-cream text-forest space-y-5 p-5 rounded-lg shadow-md transition hover:shadow-lg bg-opacity-75">
    <li class="sm:text-2xl text-base font-semibold text-center">
      Project {{ index }} – {{ title }}
    </li>
    <li class="text-xs sm:text-base text-center px-2">
      {{ description }}
    </li>
    <li>
      <a
        class="inline-block bg-gold text-cream text-sm px-4 py-2 rounded-md hover:bg-burnt transition-colors duration-200"
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