<template>
    <div class="js-page">
      <div :style="{ height: mainContainerHeight }" class="main-container">
        <h1>JavaScript Capabilities</h1>
  
        <section v-for="(topic, index) in jsTopicData" :key="index">
          <h3>{{ topic.topic }}</h3>
          <p>{{ topic.brief }}</p>
          <code v-if="topic.code">{{ topic.code }}</code>
        </section>
      </div>
    </div>
  </template>
  
  <script>
  import { jsTopicData } from '../data/topic-data.js';
  import { mapState } from 'vuex';
  
  export default {
    name: 'JSPage',
    data() {
      return {
        jsTopicData: jsTopicData.map((item, index) => {
          switch (index) {
            case 1:
              return {
                ...item,
                code: `let variableName = "value";\nconst constantName = "constant value";`
              };
            case 2:
              return {
                ...item,
                code: `function functionName(parameters) {\n  // function body\n}`
              };
            default:
              return item;
          }
        })
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
  .js-page {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .main-container {
    margin-top: 2rem;
    padding: 1rem 2rem;
    width: 94vw;
    height: 82vh;
    overflow-Y: scroll;
    background-color: #d4d4d4;
    box-shadow: 0 0 1rem 1rem rgba(0, 0, 0, 1);
  }
  
  h1 {
    color: #131313;
  }
  
  h2 {
    color: #2f2f2f;
  }
  
  h3 {
    color: #484848;
  }
  
  p, code {
    margin: 1.3rem 0;
  }
  
  section {
    padding: 1rem 2rem;
  }
  
  code {
    background-color: #f5f5f5;
    font-family: monospace;
    padding: 1rem 2rem;
    display: block;
  }
  </style>
  