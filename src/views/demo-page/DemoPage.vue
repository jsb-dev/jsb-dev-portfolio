<template>
  <div class="demo-page">
    <button @click="toggleDemo" id="demo-button">!</button>
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
  top: min(7vh, 2rem);
  right: 0;
  z-index: 1005;
  font-size: 2rem;
}
</style>
