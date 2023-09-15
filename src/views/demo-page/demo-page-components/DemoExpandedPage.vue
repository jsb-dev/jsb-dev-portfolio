<template>
    <div class="demo-expanded-page">
      <div :style="{ height: mainContainerHeight }" class="main-container">
        <section class="content-section">
          <h1>HTML, CSS and JavaScript</h1>
  
          <!-- HTML Section -->
          <section class="topic-section">
            <h2>HTML Fundamentals</h2>
            <div v-for="(topicData, index) in htmlTopicData" :key="'html-' + index">
              <h3>{{ topicData.topic }}</h3>
              <p>{{ topicData.brief }}</p>
              <code v-if="topicData.code">{{ topicData.code }}</code>
            </div>
          </section>
  
          <!-- CSS Section -->
          <section class="topic-section">
            <h2>CSS Concepts</h2>
            <div v-for="(topicData, index) in cssTopicData" :key="'css-' + index">
              <h3>{{ topicData.topic }}</h3>
              <p>{{ topicData.brief }}</p>
              <code v-if="topicData.code">{{ topicData.code }}</code>
            </div>
          </section>
  
          <!-- JS Section -->
          <section class="topic-section">
            <h2>JavaScript Capabilities</h2>
            <div v-for="(topicData, index) in jsTopicData" :key="'js-' + index">
              <h3>{{ topicData.topic }}</h3>
              <p>{{ topicData.brief }}</p>
              <code v-if="topicData.code">{{ topicData.code }}</code>
            </div>
          </section>
        </section>
      </div>
    </div>
  </template>
  

  <script>
import { htmlTopicData, cssTopicData, jsTopicData } from '../../../assets/data/topic-data.js';
import { mapState } from 'vuex';

export default {
  name: 'DemoExpandedPage',
  data() {
    return {
      htmlTopicData,
      cssTopicData,
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
.demo-expanded-page,
.html-page,
#css-page,
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
  box-shadow: 0 1.5rem 1rem 1rem rgba(0, 0, 0, 1);
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

p, code {
  margin: 1.3rem 0;
}

.topic-section, section {
  padding: 1rem 2rem;
}

code {
  background-color: #f5f5f5;
  font-family: monospace;
  padding: 1rem 2rem;
  display: block;
}
</style>
@/assets/data/topic-data.js../../../assets/sb/topic-data.js