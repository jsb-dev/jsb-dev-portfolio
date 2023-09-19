<template>
  <div
    :style="{ marginTop: pageShellMarginTop, alignItems: pageShellAlignItems }"
    class="page-shell"
  >
    <div :style="{ height: mainContainerHeight }" class="main-container">
      <section id="content-container">
        <h1>Hello there</h1>
        <section id="contact-section">
          <h2>Contact Details</h2>
          <ul>
            <li>
              Email:
              <a href="mailto:jsb-dev@outlook.com">jsb-dev@outlook.com</a>
            </li>
            <li>
              LinkedIn:
              <a
                href="https://www.linkedin.com/in/jacob-booth-1a9390233/"
                target="_blank"
                >Jacob Booth</a
              >
            </li>
            <li>
              GitHub:
              <a href="https://github.com/jsb-dev" target="_blank">jsb-dev</a>
            </li>
          </ul>
        </section>
        <section id="about-section">
          <div v-for="(content, index) in aboutData" :key="'about-' + index">
            <component :is="content.tag" v-if="content.tag !== 'ul'">
              <strong v-if="content.strong">{{ content.text }}</strong>
              <template v-else>{{ content.text }}</template>
            </component>

            <ul v-if="content.tag === 'ul'">
              <li
                v-for="(listItem, listItemIndex) in content.listItems"
                :key="'listItem-' + listItemIndex"
              >
                {{ listItem }}
              </li>
            </ul>
          </div>
        </section>

        <h1>My Resume</h1>
        <section
          class="resume-section"
          v-for="(sectionData, index) in resumeData"
          :key="'section-' + index"
        >
          <h2>{{ sectionData.topic }}</h2>

          <div v-if="Array.isArray(sectionData.brief)">
            <div
              v-for="(nestedTopicData, nestedIndex) in sectionData.brief"
              :key="'nested-' + nestedIndex"
            >
              <h3>{{ nestedTopicData.topic }}</h3>
              <p>{{ nestedTopicData.brief }}</p>
            </div>
          </div>
          <div v-else>
            <p>{{ sectionData.brief }}</p>
          </div>
        </section>
      </section>
    </div>
  </div>
</template>

<script>
import { resumeData } from '../assets/data/resume-data.js';
import { aboutData } from '../assets/data/about-data.js';
import { mapState, useStore } from 'vuex';
import { onMounted, onBeforeUnmount } from 'vue';

export default {
  name: 'HomePage',
  data() {
    return {
      aboutData,
      resumeData,
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
#content-container {
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

.resume-section,
section {
  padding: 1rem 2rem;
}
</style>
