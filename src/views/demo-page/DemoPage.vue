<template>
    <div class="demo-page">
      <button @click="toggleDemo">Toggle Demo View</button>
  
      <!-- Conditional rendering -->
      <DemoExpandedPage v-if="isExpanded" />
      <DemoIndexedPage v-else />
    </div>
  </template>
  

  <script>
import DemoExpandedPage from './demo-page-components/DemoExpandedPage.vue';
import DemoIndexedPage from './demo-page-components/DemoIndexedPage.vue';

export default {
  name: 'DemoPage',
  components: {
    DemoExpandedPage,
    DemoIndexedPage
  },
  data() {
    return {
      isExpanded: false,
    };
  },
  methods: {
    toggleDemo() {
      this.isExpanded = !this.isExpanded;
    },
  },
};
</script>

<style scoped>
</style>
