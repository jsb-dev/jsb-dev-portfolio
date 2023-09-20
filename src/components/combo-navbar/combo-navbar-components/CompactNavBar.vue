<template>
  <div id="container">
    <button
      v-if="!isDrawerOpen"
      @click="toggleDrawer"
      class="compact-nav-button"
      id="open-btn"
    >
      Menu
    </button>
    <button
      v-if="isDrawerOpen"
      @click="toggleDrawer"
      class="compact-nav-button"
      id="close-btn"
    >
      Close
    </button>
    <div v-if="isDrawerOpen" class="overlay" @click="toggleDrawer"></div>
    <div>
      <div v-if="isDrawerOpen" class="modal">
        <NavList />
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import NavList from './nav-list/NavList.vue';

export default {
  components: {
    NavList,
  },
  setup() {
    const isDrawerOpen = ref(false);
    const toggleDrawer = () => {
      isDrawerOpen.value = !isDrawerOpen.value;
    };

    return {
      isDrawerOpen,
      toggleDrawer,
    };
  },
};
</script>

<style scoped>
#container {
  position: fixed;
  bottom: 8rem;
  right: 8rem;
  z-index: 1000;
}

.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 1000;
  animation: fadeIn 0.2s ease-in-out;
}

#open-btn,
#close-btn {
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  z-index: 1005;
  opacity: 0.8;
}

.modal {
  position: absolute;
  bottom: 7rem;
  right: 1rem;
  z-index: 1002;
  opacity: 1;
  animation: fadeIn 0.2s ease-in-out;
}

.slide-enter-active,
.slide-leave-active,
.slide-enter,
.slide-leave {
  opacity: 0;
  transition: all 0.2s ease-in-out;
  transform: translateY(30%);
}
</style>
