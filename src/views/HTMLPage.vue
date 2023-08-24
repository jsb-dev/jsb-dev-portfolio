<template>
    <div class="html-page">
      <div :style="{ height: mainContainerHeight }" class="main-container">
        <h1>HTML Topics</h1>
  
        <!-- HTML5 Semantics Section -->
        <section>
          <h2>{{ htmlTopicData[0].topic }}</h2>
          <p>{{ htmlTopicData[0].brief }}</p>
        </section>
  
        <!-- HTML Forms Section -->
        <section>
          <h2>{{ htmlTopicData[1].topic }}</h2>
          <p>{{ htmlTopicData[1].brief }}</p>
          <code>
            &lt;form action="/submit" method="post"&gt;
              &lt;input type="text" name="name" placeholder="Enter your name"&gt;
              &lt;input type="submit" value="Submit"&gt;
            &lt;/form&gt;
          </code>
        </section>
  
        <!-- HTML Tables Section -->
        <section>
          <h2>{{ htmlTopicData[2].topic }}</h2>
          <p>{{ htmlTopicData[2].brief }}</p>
          <code>
            &lt;table&gt;
              &lt;tr&gt;
                &lt;th&gt;Header 1&lt;/th&gt;
                &lt;th&gt;Header 2&lt;/th&gt;
              &lt;/tr&gt;
              &lt;tr&gt;
                &lt;td&gt;Row1Col1&lt;/td&gt;
                &lt;td&gt;Row1Col2&lt;/td&gt;
              &lt;/tr&gt;
            &lt;/table&gt;
          </code>
        </section>
  
        <!-- Additional Sections for other topics -->
        <section v-for="(topicData, index) in htmlTopicData.slice(3)" :key="index">
          <h2>{{ topicData.topic }}</h2>
          <p>{{ topicData.brief }}</p>
        </section>
      </div>
    </div>
  </template>
  
  <script>
  import { htmlTopicData } from '../data/topic-data.js';
  import { mapState } from 'vuex';
  
  export default {
    name: 'HTMLPage',
    data() {
      return {
        htmlTopicData
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
  .html-page {
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
    box-shadow: 0 1.5rem 1rem 1rem rgba(0, 0, 0, 1)
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
  
  ul {
    margin: 1rem 0 0 2rem;
    background-color: #f5f5f5;
    display: block;
    padding: 1rem 2rem;
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
  