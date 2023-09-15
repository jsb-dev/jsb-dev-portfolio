<template>
    <div id="portfolio-page">
      <div :style="{ height: mainContainerHeight }" id="main-container">
        <section id="portfolio-section">
          <h1>My Portfolio</h1>
        </section>
      </div>
    </div>
  </template>
  
  <script>
  import { mapState } from 'vuex';
  
  export default {
    name: 'PortfolioPage',
    data() {
    },
    computed: {
      ...mapState(['viewportIsVertical']),
      mainContainerHeight() {
        return this.viewportIsVertical ? '96vh' : '82vh';
      }
    },
    created() {
      window.addEventListener('resize', this.$store.dispatch.bind(this, 'updateLayout'));
    },
    unmounted() {
      window.removeEventListener('resize', this.$store.dispatch.bind(this, 'updateLayout'));
    }
  }
  </script>
  
  <style scoped>
  #portfolio-page {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  #portfolio-page {
    width: 100vw;
    height: 100vh;
    overflow: hidden;
  }
  
  #main-container {
    overflow-Y: scroll;
    width: 94vw;
    background-color: #d4d4d4;
    box-shadow: 0 1.5rem 1rem 1rem rgba(0, 0, 0, 1);
  }
  
  #problem-solving-section {
    padding: 1rem 2rem;
  }
  
  h1 {
    color: #131313;
    margin-bottom: 1rem;
  }
  
  h2 {
    color: #2f2f2f;
  }
  
  h3 {
    color: #484848;
  }
  
  p {
    margin: 1.3rem 0;
  }
  
  .topic-section, section {
    padding: 1rem 2rem;
  }
  </style>