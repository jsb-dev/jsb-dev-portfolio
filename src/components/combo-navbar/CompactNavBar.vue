<template>
    <button @click="toggleDrawer">Menu</button>
    <transition name="slide">
      <NavList v-if="isDrawerOpen" />
    </transition>
  </template>
  
  <script>
  import { ref } from 'vue';
  import NavList from './nav-list/NavList.vue';
  
  export default {
    components: {
      NavList
    },
    setup() {
      const isDrawerOpen = ref(false);
      const toggleDrawer = () => {
        isDrawerOpen.value = !isDrawerOpen.value;
      };
  
      return {
        isDrawerOpen,
        toggleDrawer
      };
    }
  };
  </script>
  
  <style scoped>
  .slide-enter-active,
  .slide-leave-active {
    transition: transform 0.5s;
  }
  .slide-enter, .slide-leave-to {
    transform: translateY(100%);
  }
  </style>
  