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

  button {
    border: none;
    background: none;
    cursor: pointer;
    min-height: 3rem;
    min-width: 6.5rem;
    background-color: rgb(93, 94, 182);
    color: white;
  }

  button:hover {
    background-color: #c37ee0df;
    transform: scale(1.1);
    border-radius: 2rem;
    transition: all 0.2s ease-in-out;
  }

  h1 {
    font-size: max(2.5rem, 12pt);
  }

  h2 {
    font-size: max(2rem, 11pt);
  }

  p, h3, code, button, article, li {
    font-size: max(1rem, 10pt);
  }

</style>