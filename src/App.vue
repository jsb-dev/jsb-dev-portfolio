<template>
  <router-view></router-view>
</template>

<script>
import { onMounted, onUnmounted, ref } from 'vue';
import { useStore } from 'vuex';

export default {
  name: 'App',
  setup() {
    const store = useStore();
    const updateViewport = () => store.dispatch('updateViewport');
    const resizeTimer = ref(null);

    const tempUpdateViewport = () => {
      clearTimeout(resizeTimer.value);
      resizeTimer.value = setTimeout(updateViewport, 500);
    };

    onMounted(() => {
      window.addEventListener('resize', tempUpdateViewport);
    });

    onUnmounted(() => {
      window.removeEventListener('resize', tempUpdateViewport);
      clearTimeout(resizeTimer.value);
    });

    return {};
  }
}
</script>
