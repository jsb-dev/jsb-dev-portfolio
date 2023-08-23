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
    border-radius: 0;
    border-radius: 2rem; 
  }

::-webkit-scrollbar {
  width: 10px; 
  height: 10px; 
  border-radius: 2rem;
}

::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 2rem; 
}

::-webkit-scrollbar-thumb {
  background: #888; 
  border-radius: 2rem; 
}

::-webkit-scrollbar-thumb:hover {
  background: #555; 
  border-radius: 2rem;
}

* {
  scrollbar-width: thin;
  scrollbar-color: #3b3a3a #aeaeae;
}


  button {
    border: none;
    background: none;
    cursor: pointer;
    min-width: 50px;
    min-height: 20px;
    font-size: max(1rem, 8pt);
  }

  p, li {
    font-size: max(1rem, 8pt);
  }

  h1 {
    font-size: max(1.2rem, 11pt);
  }

  h2 {
    font-size: max(1rem, 8pt);
  }
</style>