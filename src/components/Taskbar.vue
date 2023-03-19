<template>
  <div class="flex justify-evenly items-center text-xs font-black text-gray-500 p-10">
    <router-link to="/" class="hover:bg-green-700 uppercase text-white text-xl name-link rounded-full p-2 mr-2" v-if="!isLoading">Home</router-link>
    <div class="hamburger-icon block">
      <button @click="isOpen = !isOpen" class="focus:outline-none">
        <svg-icon :width="40" :height="40" icon="hamburgerClose" v-if="!isOpen"></svg-icon> 
        <svg-icon :width="40" :height="40" icon="hamburgerOpen" v-else></svg-icon>
      </button>
      <ul :class="{'hidden': !isOpen, 'flex-col': isOpen}" class="mobile-menu">
        <li class="list-none block mt-2 lg:inline-block text-gray-500 hover:text-white"><router-link to="/about" class="hover:underline sm:p-6 uppercase">About Me</router-link></li>
        <li class="list-none block mt-2 lg:inline-block text-gray-500 hover:text-white"><router-link to="/portfolio" class="hover:underline sm:p-6 uppercase">Portfolio</router-link></li>
        <li class="list-none block mt-2 lg:inline-block text-gray-500 hover:text-white"><router-link to="/contact" class="hover:underline sm:p-6 uppercase">Contact</router-link></li>
      </ul>
    </div>
    <ul class="flex space-x-4 desktop-only">
      <li class=""><router-link to="/about" class="hover:underline sm:p-6 uppercase">About Me</router-link></li>
      <li class=""><router-link to="/portfolio" class="hover:underline sm:p-6 uppercase">Portfolio</router-link></li>
      <li class=""><router-link to="/contact" class="hover:underline sm:p-6 uppercase">Contact</router-link></li>
    </ul>
  </div>
</template>

<script>
import { ref } from 'vue';
import SvgIcon from './commons/SvgIcon.vue';
export default {
  name: 'Taskbar',
  components: {
    SvgIcon
  },
  setup() {
    const isOpen = ref(false);
    const showMenu = ref(false);

    return {
      isOpen,
      showMenu,
    }
  }
}
</script>

<style scoped>
  .name-link {
    background-color: #01a2a6;
  }

  @media screen and (min-width: 768px) {
    .hamburger-icon {
      display: none;
    }
  }
  @media only screen and (max-width: 767px) {
    .desktop-only {
      display: none;
    }
  }
  .name-link:hover {
    opacity: 0.8;
  }

@media (max-width: 640px) {
  .mobile-menu {
    position: absolute;
    z-index: 9999;
    background-color: #fff;
    padding: 5px;
    border-radius: 0.5rem;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }

  .mobile-menu li {
    display: block;
  }
}
</style>