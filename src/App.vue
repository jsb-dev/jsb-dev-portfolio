<template>
  <div id="app">
    <ComboNavBar />
    <HUDComponent />
    <router-view />
  </div>
</template>

<script>
import ComboNavBar from './components/combo-navbar/ComboNavBar.vue';
import HUDComponent from './components/HUDComponent.vue';
import './App.css';

export default {
  name: 'App',
  components: {
    ComboNavBar,
    HUDComponent,
  },
};
</script>
