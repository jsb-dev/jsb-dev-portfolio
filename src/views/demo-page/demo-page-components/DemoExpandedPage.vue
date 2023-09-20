<template>
  <div
    :style="{ alignItems: pageShellAlignItems, marginTop: pageShellMarginTop }"
    class="page-shell"
  >
    <div :style="{ height: mainContainerHeight }" class="main-container">
      <section class="content-section">
        <h1>HTML, CSS and JavaScript</h1>

        <!-- HTML Section -->
        <section class="topic-section">
          <h2>HTML Fundamentals</h2>
          <div
            v-for="(topicData, index) in htmlTopicData"
            :key="'html-' + index"
          >
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
import {
  htmlTopicData,
  cssTopicData,
  jsTopicData,
} from '../../../assets/data/topic-data.js';
import { onMounted, onBeforeUnmount } from 'vue';
import { mapState, useStore } from 'vuex';

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
              code: `let variableName = "value";\nconst constantName = "constant value";`,
            };
          case 2:
            return {
              ...item,
              code: `function functionName(parameters) {\n  // function body\n}`,
            };
          default:
            return item;
        }
      }),
    };
  },
  computed: {
    ...mapState(['viewportIsVertical', 'viewportIsPortable']),
    mainContainerHeight() {
      return this.viewportIsVertical ? '96vh' : '82vh';
    },
    pageShellAlignItems() {
      return this.viewportIsPortable ? 'center' : 'space-around';
    },
    pageShellMarginTop() {
      return this.viewportIsPortable ? '0' : '3vh';
    },
  },
  setup() {
    const store = useStore();
    const handleResize = () => {
      store.dispatch('updateLayout');
    };

    onMounted(() => {
      window.addEventListener('resize', handleResize);
    });

    onBeforeUnmount(() => {
      window.removeEventListener('resize', handleResize);
    });
  },
};
</script>

<style scoped>
h1 {
  margin-bottom: 1rem;
}

p,
code {
  margin: 1.3rem 0;
}

.topic-section,
section {
  padding: 1rem 2rem;
}

code {
  background-color: #4e4e4e;
  font-family: monospace;
  padding: 1rem 2rem;
  display: block;
}
</style>
