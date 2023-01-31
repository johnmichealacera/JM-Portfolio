<template>
<div class="py-10 px-2">
  <h1 class="text-center text-2xl font-medium">Checkout my Personal Projects</h1>
  <hr class="m-6" />
  <div class="flex space-x-4">
    <div class="bg-project w-1/2 h-96 group">
    <app-modal class="opacity-0 hover:opacity-100"></app-modal>
    </div>
    <div class="bg-shooting-bird w-1/2 h-96 group">
      <shooting-bird-project-modal class="opacity-0 hover:opacity-100"></shooting-bird-project-modal>
    </div>
  </div>
</div>
</template>

<script lang='ts'>
import AppModal from './AppModal.vue';
import ShootingBirdProjectModal from './ShootingBirdProjectModal.vue';

export default {
  name: "Project",
  components: {
    AppModal,
    ShootingBirdProjectModal,
  },
  setup() {
  }
}
</script>

<style scoped>
  .bg-project {
    background-image: url('../../public/todo.png');
    background-repeat: no-repeat;
    background-size: 100% 100%;;
  }
  .bg-shooting-bird {
    background-image: url('../../public/shoot-birds.png');
    background-repeat: no-repeat;
    background-size: 100% 100%;;
  }
</style>