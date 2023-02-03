<template>
  <div v-if="isLoading" class="loading" :style="`height: ${height}px`"></div>
</template>
<script>
export default {
  name: 'Loader',
  props: { 
    isLoading:{ 
      type: Boolean, 
      default: false 
    },
    height:{ 
      type: Number, 
      default: 200 
    } 
  },
}
</script>
<style>
.loading {
  background: transparent url('../../assets/loader.gif') center no-repeat;
  width: 100%;
}
</style>