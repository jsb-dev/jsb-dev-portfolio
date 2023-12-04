<template>
  <div class="demo-page">
    <button @click="toggleDemo" id="demo-button">
      <svg
        v-if="!isExpanded"
        xmlns="http://www.w3.org/2000/svg"
        height="100%"
        width="100%"
        viewBox="0 0 576 512"
      >
        <path
          d="M384 128c70.7 0 128 57.3 128 128s-57.3 128-128 128H192c-70.7 0-128-57.3-128-128s57.3-128 128-128H384zM576 256c0-106-86-192-192-192H192C86 64 0 150 0 256S86 448 192 448H384c106 0 192-86 192-192zM192 352a96 96 0 1 0 0-192 96 96 0 1 0 0 192z"
          fill="rgb(185, 208, 237)"
        />
      </svg>

      <svg
        v-else
        xmlns="http://www.w3.org/2000/svg"
        height="100%"
        width="100%"
        viewBox="0 0 576 512"
      >
        <path
          d="M192 64C86 64 0 150 0 256S86 448 192 448H384c106 0 192-86 192-192s-86-192-192-192H192zm192 96a96 96 0 1 1 0 192 96 96 0 1 1 0-192z"
          fill="rgb(185, 208, 237)"
        />
      </svg>
    </button>
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
  margin: 1rem;
  z-index: 1005;
  position: fixed;
  bottom: 0;
  right: 10rem;
  width: 50px;
  height: 50px;
  background-color: rgb(81, 150, 77);
  box-shadow: 0 0 3rem 0.1rem rgba(0, 0, 0, 0.8),
    inset 0 0 1.6rem 0.2rem rgba(0, 0, 0, 0.3);
}
</style>
