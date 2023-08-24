<template>
    <div>
      <CompactNavBar v-if="viewportIsVertical || viewportIsPortable" />
      <FullNavBar v-else />
    </div>
  </template>
  
  <script>
  import { computed } from 'vue';
  import { useStore } from 'vuex';
  import CompactNavBar from './CompactNavBar.vue';
  import FullNavBar from './FullNavBar.vue';
  
  export default {
    components: {
      CompactNavBar,
      FullNavBar
    },
    setup() {
      const store = useStore();
      const viewportIsVertical = computed(() => store.state.viewportIsVertical);
      const viewportIsPortable = computed(() => store.state.viewportIsPortable);
  
      return {
        viewportIsVertical,
        viewportIsPortable
      };
    }
  };
  </script>
  