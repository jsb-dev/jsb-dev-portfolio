<template>
  <div class="demo-page">
    <button @click="toggleDemo" id="demo-button">Toggle</button>
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
    DemoIndexedPage,
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
#demo-button {
  position: fixed;
  top: 2rem;
  right: 2rem;
  z-index: 1005;
  opacity: 0.9;
}
</style>
