<template>
  <router-view></router-view>
</template>

<script>
import { onMounted, onUnmounted } from 'vue';
import { useStore } from 'vuex';

export default {
  name: 'App',
  setup() {
    const store = useStore();
    const updateViewport = () => store.dispatch('updateViewport');

    onMounted(() => {
      window.addEventListener('resize', updateViewport);
    });

    onUnmounted(() => {
      window.removeEventListener('resize', updateViewport);
    });

    return {};
  }
}
</script>
