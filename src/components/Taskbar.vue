<template>
  <div class="flex justify-between items-center text-xs font-black px-12 sm:px-64 py-8">
    <router-link to="/" class="uppercase text-xl sm:p-6 p-2 mr-2 bg-burnt text-black hover:bg-gold">Home</router-link>
    <div class="hamburger-icon">
      <button
        @click="isOpen = !isOpen"
        class="focus:outline-none"
        :aria-label="isOpen ? 'Close menu' : 'Open menu'"
        :title="isOpen ? 'Close menu' : 'Open menu'"
      >
        <svg-icon :width="40" :height="40" :icon="isOpen ? 'hamburgerOpen' : 'hamburgerClose'" />
      </button>
      <ul :class="{'hidden': !isOpen, 'flex-col': isOpen}" class="mobile-menu">
        <li class="list-none block mt-2 lg:inline-block bg-burnt hover:bg-gold text-black"><router-link to="/fire" class="hover:underline sm:p-6 uppercase">Dev Manifesto</router-link></li>
        <li class="list-none block mt-2 lg:inline-block bg-burnt hover:bg-gold text-black"><router-link to="/about" class="hover:underline sm:p-6 uppercase">About Me</router-link></li>
        <li class="list-none block mt-2 lg:inline-block bg-burnt hover:bg-gold text-black"><router-link to="/contact" class="hover:underline sm:p-6 uppercase">Contact</router-link></li>
      </ul>
    </div>
    <ul class="flex space-x-4 desktop-only">
      <li class=""><router-link to="/manifesto" class="hover:underline sm:p-6 uppercase bg-burnt hover:bg-gold text-black">Dev Manifesto</router-link></li>
      <li class=""><router-link to="/about" class="hover:underline sm:p-6 uppercase bg-burnt hover:bg-gold text-black">About Me</router-link></li>
      <li class=""><router-link to="/contact" class="hover:underline sm:p-6 uppercase bg-burnt hover:bg-gold text-black">Contact</router-link></li>
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
    padding: 5px;
    border-radius: 0.5rem;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }

  .mobile-menu li {
    display: block;
  }
}
</style>