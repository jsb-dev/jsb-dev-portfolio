<template>
  <div id="container">
    <button v-if="!isDrawerOpen" @click="toggleDrawer" id="open-btn">Menu</button>
    <button v-if="isDrawerOpen" @click="toggleDrawer" id="close-btn">Close</button>
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
#container {
  position: fixed;
  bottom: 8rem;
  right: 10rem;
  z-index: 1000;
}

.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 1000;
}

#open-btn,

#close-btn {
  position: fixed;
  bottom: 15vh;
  left: 9vw;
  z-index: 1005;
  transition: all .1s ease-in-out;
  width: 7rem;
  height: 7rem;
}

#open-btn {
  box-shadow: 0 .5rem 7rem 1rem rgba(0, 0, 0, .7), 0 .5rem 1.2rem 1.2rem rgba(0, 0, 0, 0.1);
}

.modal {
  position: absolute;
  bottom: 7rem;
  right: 1rem;
  z-index: 1002;
  opacity: 1;
  transition: all .1s ease-in-out;
}

.slide-enter-active,
.slide-leave-active,
.slide-enter,
.slide-leave {
  opacity: 0;
  transition: all .2s ease-in-out;
  transform: translateY(30%);
}

</style>

  