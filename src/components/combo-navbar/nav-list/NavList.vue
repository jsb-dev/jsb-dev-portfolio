<template>
    <div>
      <HoriNavList v-if="!viewportIsVertical && !viewportIsPortable" />
      <CircleNavList v-else />
    </div>
  </template>
  
  <script>
  import { computed } from 'vue';
  import { useStore } from 'vuex';
  import HoriNavList from './HoriNavList.vue';
  import CircleNavList from './CircleNavList.vue';
  
  export default {
    components: {
      HoriNavList,
      CircleNavList
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
  