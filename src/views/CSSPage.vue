<template>
    <div id="css-page">
      <div :style="{ height: mainContainerHeight }" id="main-container">  
      <h1>CSS Topics</h1>
      <!-- CSS Basics Section -->
      <section>
        <h2>CSS Basics</h2>
        <ul>
          <li>{{ cssTopicData[0].brief }}</li>
          <li>{{ cssTopicData[1].brief }}</li>
          <li>{{ cssTopicData[2].brief }}</li>
          <li>{{ cssTopicData[3].brief }}</li>
          <li>{{ cssTopicData[4].brief }}</li>
        </ul>
      </section>
      <!-- CSS Typography and Colors Section -->
      <section>
        <h2>Typography and Colors</h2>
        <p>{{ cssTopicData[5].brief }}</p>
        <p>{{ cssTopicData[6].brief }}</p>
        <code>
          color: red;
          background-color: #f5f5f5;
        </code>
        <p>{{ cssTopicData[7].brief }}</p>
      </section>
      <!-- CSS Transitions, Flexbox, and Grid Section -->
      <section>
        <h2>Advanced Styling</h2>
        <p>{{ cssTopicData[8].brief }}</p>
        <!-- Flexbox -->
        <h3>CSS Flexbox Layout</h3>
        <p>{{ cssTopicData[9].brief }}</p>
        <code>
          .flex-container {
            display: flex;
            flex-wrap: wrap;
          }
        </code>
        <!-- Grid -->
        <h3>CSS Grid Layout</h3>
        <p>{{ cssTopicData[10].brief }}</p>
        <code>
          .grid-container {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
          }
        </code>
      </section>
      <!-- Responsive Design, Preprocessors, and Frameworks Section -->
      <section>
        <h2>Extensions and Tools</h2>
        <p>{{ cssTopicData[11].brief }}</p>
        <p>{{ cssTopicData[12].brief }}</p>
        <p>{{ cssTopicData[13].brief }}</p>
      </section>
      <!-- Web Accessibility Section -->
      <section>
        <h2>Web Accessibility</h2>
        <p>{{ cssTopicData[14].brief }}</p>
      </section>
    </div>
  </div>
</template>

<script>
import { cssTopicData } from '../data/topic-data.js';
import { mapState } from 'vuex';

export default {
  name: 'CSSPage',
  data() {
    return {
      cssTopicData
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
#css-page {
  display: flex;
  justify-content: center;
  align-items: center;
}

#main-container {
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

ul {
  background-color: #f5f5f5;
  display: block;
  padding: 1rem 2rem;
  margin: 1rem 0;
}
</style>
