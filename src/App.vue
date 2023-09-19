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
