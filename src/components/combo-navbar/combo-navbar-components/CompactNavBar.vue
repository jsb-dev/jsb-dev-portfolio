<template>
  <div id="container">
    <button
      v-if="!isDrawerOpen"
      @click="toggleDrawer"
      class="compact-nav-button"
      id="open-btn"
    ></button>
    <button
      v-if="isDrawerOpen"
      @click="toggleDrawer"
      class="compact-nav-button"
      id="close-btn"
    ></button>
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
  background-color: rgba(32, 32, 32, 0.356);
  z-index: 1000;
  animation: fadeIn 0.2s ease-in-out;
}

#open-btn,
#close-btn {
  position: fixed;
  bottom: 0;
  right: 0;
  z-index: 1005;
  background-size: 50%;
  background-repeat: no-repeat;
  background-position: center;
}

#open-btn {
  background-image: url('../../../assets/icons/menu.png');
}

#close-btn {
  background-image: url('../../../assets/icons/close.png');
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
