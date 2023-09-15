<template>
    <div id="portfolio-page">
      <div :style="{ height: mainContainerHeight }" id="main-container">
        <section id="portfolio-section">
          <div v-for="(item, index) in portfolioData" :key="index">
            <component :is="item.tag">{{ item.text }}</component>
            <div v-if="item.tag === 'h2'">
              <VideoPlayer
                v-for="(assetName, assetIndex) in videoAssets[item.text]"
                :key="assetIndex"
                :assetName="assetName"
              ></VideoPlayer>
            </div>
          </div>
        </section>
      </div>
    </div>
  </template>
  
  <script>
  import { mapState } from 'vuex';
  import { portfolioData } from '../assets/data/portfolio-data.js';
  import VideoPlayer from '../components/VideoPlayer.vue';  // Rename it to VideoPlayer
  
  export default {
    name: 'PortfolioPage',
    components: {
      VideoPlayer
    },
    data() {
      return {
        portfolioData,
        videoAssets: {
          'Applicate': ['portfolio_1'],
          'Bs. CS': ['portfolio_2', 'portfolio_3', 'portfolio_4'],
          // Add more asset names here if you have more h2 sections
        }
      };
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
  
  <!-- Styles remain the same -->
  
  
  
  <style scoped>
  #methodology-page {
    display: flex;
    justify-content: center;
    align-items: center;
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
  
  #portfolio-section {
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

  </style>