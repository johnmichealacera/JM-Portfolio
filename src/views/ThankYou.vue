<template>
  <div class="flex flex-col items-center justify-center h-screen text-white bg-color">
    <h1 class="text-4xl font-bold mb-4 text-center">Thank you for your email!</h1>
    <p class="text-lg mb-4 text-center">We have received your message and will get back to you as soon as possible.</p>
    <router-link to="/" class="bg-gray-800 text-white py-2 px-4 rounded-md shadow-md hover:bg-gray-900">Return to Home</router-link>
  </div>
</template>

<style scoped>
.bg-color {
  background-color: #01a2a6;
}
</style>