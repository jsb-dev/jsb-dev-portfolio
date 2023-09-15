<template>
    <div id="methodology-page">
      <div :style="{ height: mainContainerHeight }" id="main-container">
        <section id="problem-solving-section">
          <div v-for="(item, index) in problemSolvingData" :key="index">
            <div v-if="index % 2 === 0" class="topic-container">
              <component :is="item.tag" class="problem-solving-text">{{ item.text }}</component>
              <img v-if="index > 0 && ((index / 2) <= 6)" :src="require(`@/assets/images/methodology_${index / 2}.jpg`)"/>
            </div>
            <div v-else class="problem-solving-text">
              <component :is="item.tag" class="problem-solving-text">{{ item.text }}</component>
          </div>
          </div>
        </section>
      </div>
    </div>
  </template>
  
  <script>
  import { mapState } from 'vuex';
  import { problemSolvingData } from '@/assets/data/methodology-data.';
  
  export default {
    name: 'MethodologyPage',
    data() {
      return {
        problemSolvingData
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
  
  <style scoped>
  #methodology-page {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  #methodology-page {
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

  .problem-solving-text {
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

  img {
    width: 50%;
  }
  
  .topic-section, section {
    padding: 1rem 2rem;
  }

  .topic-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 0 8rem;
  }
  </style>
