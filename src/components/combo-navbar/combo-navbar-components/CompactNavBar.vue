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
    <transition name="slide">
      <div v-if="isDrawerOpen" class="modal">
        <NavList />
      </div>
    </transition>
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
}

#open-btn,
#close-btn {
  position: fixed;
  bottom: 4vh;
  right: 4vw;
  z-index: 1005;
  opacity: 0.8;
}

#open-btn {
  box-shadow: 0 0.5rem 7rem 1rem rgba(0, 0, 0, 0.7),
    0 0.5rem 1.8rem 1.5rem rgba(0, 0, 0, 0.5);
  background-color: rgba(46, 198, 74, 0.909);
}

#open-btn:hover {
  background-color: rgba(33, 143, 53, 0.909);
}

#close-btn {
  opacity: 0.8;
  background-color: rgba(198, 46, 46, 0.909);
}

#close-btn:hover {
  background-color: rgba(158, 36, 36, 0.909);
}

.modal {
  position: absolute;
  bottom: 7rem;
  right: 1rem;
  z-index: 1002;
  opacity: 1;
  transition: all 0.1s ease-in-out;
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
