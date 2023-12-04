<template>
  <div id="container">
    <button
      v-if="!isDrawerOpen"
      @click="toggleDrawer"
      class="compact-nav-button"
      id="open-btn"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="100%"
        width="80%"
        viewBox="0 0 448 512"
      >
        <path
          d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"
          fill="rgb(185, 208, 237)"
        />
      </svg>
    </button>
    <button
      v-if="isDrawerOpen"
      @click="toggleDrawer"
      class="compact-nav-button"
      id="close-btn"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="100%"
        width="80%"
        viewBox="0 0 384 512"
      >
        <path
          d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"
          fill="rgb(185, 208, 237)"
        />
      </svg>
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
  bottom: 0;
  right: 0;
  z-index: 1000;
}

.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(22, 22, 22, 0.812);
  z-index: 1000;
  animation: fadeIn 0.2s ease-in-out;
}

#open-btn,
#close-btn {
  position: fixed;
  bottom: 0;
  right: 1rem;
  width: 50px;
  height: 50px;
  z-index: 1005;
  box-shadow: 0 0 3rem 0.1rem rgba(0, 0, 0, 0.8),
    inset 0 0 1.6rem 0.2rem rgba(0, 0, 0, 0.7);
}
.modal {
  position: absolute;
  bottom: 7rem;
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
