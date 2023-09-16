<template>
  <div id="app">
    <ComboNavBar />
    <router-view />
  </div>
</template>

<script>
import ComboNavBar from './components/combo-navbar/ComboNavBar.vue';
import './App.css';

export default {
  name: 'App',
  components: {
    ComboNavBar,
  },
};
</script>

<style>
#app {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  border-radius: 0;
  background-color: #282828;
}
</style>
