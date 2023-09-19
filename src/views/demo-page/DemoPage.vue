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
  bottom: 5vh;
  left: 10vw;
  z-index: 1005;
  width: 8rem;
  height: 8rem;
  border-radius: 2.5rem;
  opacity: 0.8;
  transition: all 0.1s ease-in-out;
}
</style>
