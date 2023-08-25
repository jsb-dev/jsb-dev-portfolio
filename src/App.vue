<template>
  <div id="app">
    <ComboNavBar />
    <router-view />
  </div>
</template>

<script>
import ComboNavBar from './components/combo-navbar/ComboNavBar.vue';
import './App.css'

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
    border: none;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI',
      Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue',
      sans-serif;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    scrollbar-width: thin;
    scrollbar-color: #565656 #dcdcdc;
  }

  #app {
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    border-radius: 0;
    background-color: #282828;
  }
</style>