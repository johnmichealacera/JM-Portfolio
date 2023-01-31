<template>
    <ul class="h-full flex flex-col justify-center items-center bg-gray-900 bg-opacity-75 text-white space-y-5">
        <li class="text-2xl"><strong>Project 1 </strong>To Do App</li>
        <li class="text-sm">A simple to do list using pure javascript, DOM and events.</li>
        <li><a class="bg-blue-600 m-2 p-2 rounded text-white text-opacity-60 hover:text-opacity-90 text-sm" :href=todoAppUrl target="_blank">SEE PROJECT</a></li>
    </ul>
</template>
<script>
import { computed } from 'vue';
  export default {
    name: 'app-modal',
    setup(){
    const todoAppUrl = computed(() => process.env.VUE_APP_TODO);

    return {
      todoAppUrl
    }
  }
  };
</script>