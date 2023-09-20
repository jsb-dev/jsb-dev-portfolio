<template>
  <div
    :style="{ alignItems: pageShellAlignItems, marginTop: pageShellMarginTop }"
    class="page-shell"
  >
    <div :style="{ height: mainContainerHeight }" class="main-container">
      <section class="content-container">
        <h1>HTML, CSS and JavaScript</h1>

        <section class="topic-section" id="html-section">
          <h2>HTML Fundamentals</h2>
          <div
            v-for="(topicData, index) in htmlTopicData"
            :key="'html-' + index"
            class="topic-map-container"
          >
            <h3>{{ topicData.topic }}</h3>
            <p>{{ topicData.brief }}</p>
            <code v-if="topicData.code">{{ topicData.code }}</code>
          </div>
        </section>

        <!-- CSS Section -->
        <section class="topic-section" id="css-section">
          <div class="h2-container">
            <h2>CSS Concepts</h2>
          </div>
          <div
            v-for="(topicData, index) in cssTopicData"
            :key="'css-' + index"
            class="topic-map-container"
          >
            <h3>{{ topicData.topic }}</h3>
            <p>{{ topicData.brief }}</p>
            <code v-if="topicData.code">{{ topicData.code }}</code>
          </div>
        </section>

        <!-- JS Section -->
        <section class="topic-section" id="js-section">
          <h2>JavaScript Capabilities</h2>
          <div
            v-for="(topicData, index) in jsTopicData"
            :key="'js-' + index"
            class="topic-map-container"
          >
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
  margin: 1rem;
}

h2,
h3,
p,
code {
  margin: 5rem 0;
}

#css-section {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;
  grid-gap: 1rem;
}

.topic-section,
section {
  padding: 1rem 2rem;
}

#html-section .topic-map-container:nth-child(even) {
  box-shadow: inset 0 0 3rem 0.2rem rgba(255, 255, 255, 0.2);
  padding: 2rem;
}

#html-section .topic-map-container:nth-child(even) * {
  text-align: right;
}

#css-section .h2-container,
#css-section .topic-map-container:nth-child(4),
#css-section .topic-map-container:nth-child(5),
#css-section .topic-map-container:nth-child(8),
#css-section .topic-map-container:nth-child(9),
#css-section .topic-map-container:nth-child(12),
#css-section .topic-map-container:nth-child(13),
#css-section .topic-map-container:nth-child(16) {
  background-color: #303030;
  padding: 0 3rem;
}

#css-section .h2-container {
  display: flex;
}

code {
  background-color: #4e4e4e;
  font-family: monospace;
  padding: 1rem 2rem;
  display: block;
}
</style>
