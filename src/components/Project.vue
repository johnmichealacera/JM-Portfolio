<template>
<div class="py-10 px-2">
  <h1 class="text-center text-2xl font-medium">Checkout my Personal Projects</h1>
  <hr class="m-6">
  <div class="bg-project w-1/2 h-96 group" @mouseover="showModal" @mouseleave="hideModal">
    <app-modal v-if="modalVisible"></app-modal>
  </div>
</div>
</template>

<script lang='ts'>
import AppModal from './AppModal.vue';
import { ref } from 'vue';

const modalVisible = ref(false);
export default {
  name: "Project",
  components: {
    AppModal,
  },
  setup() {
    const showModal = () => {
      modalVisible.value = true;
    };
    const hideModal = () => {
      modalVisible.value = false;
    };
    return {
      showModal,
      modalVisible,
      hideModal,
    }
  }
}
</script>

<style scoped>
  .bg-project {
    background-image: url('../../public/todo.png');
    background-repeat: no-repeat;
    background-size: 100% 100%;;
  }
</style>