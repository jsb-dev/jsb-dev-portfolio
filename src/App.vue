<template>
  <div id="app">
    <ComboNavBar />
    <router-view />
  </div>
</template>

<script>
import ComboNavBar from './components/combo-navbar/ComboNavBar.vue';

export default {
  name: 'App',
  components: {
    ComboNavBar
  }
};
</script>

<style>
  :root {
    font-size: 1vmax;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    border-radius: 0.5rem;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI',
      Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue',
      sans-serif;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  }

  #app {
    width: 100vw;
    height: 100vh;
    overflow: hidden;
  }
</style>