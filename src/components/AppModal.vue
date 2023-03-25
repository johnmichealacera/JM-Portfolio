<template>
    <ul class="h-full flex flex-col justify-center items-center bg-gray-900 bg-opacity-75 text-white space-y-5">
        <li class="sm:text-2xl text-base"><strong>Project {{ index }}&nbsp;</strong>{{ title }}</li>
        <li class="text-xs sm:text-base">{{ description }}</li>
        <li><a class="bg-blue-600 m-0 sm:m-2 p-0 sm:p-2 rounded text-white text-opacity-60 hover:text-opacity-90 text-sm" :href=url target="_blank">SEE PROJECT</a></li>
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