<template>
  <div
    :style="{ marginTop: pageShellMarginTop, alignItems: pageShellAlignItems }"
    class="page-shell"
  >
    <div :style="{ height: mainContainerHeight }" class="main-container">
      <section id="content-container" class="content-container">
        <h1>Hello there</h1>
        <section id="about-section">
          <h2>About Myself</h2>
          <div
            v-for="(content, index) in aboutData"
            :key="'about-' + index"
            class="map-container"
          >
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

        <section id="contact-section">
          <h2>Contact</h2>
          <ul id="contact-list">
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

        <section
          class="resume-section"
          v-for="(sectionData, index) in resumeData"
          :key="'section-' + index"
        >
          <div class="map-container">
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
h2,
h3 {
  margin-top: 4rem;
}

#content-container {
  padding: 1rem 2rem;
}

ul {
  padding-left: 4rem;
}

li {
  list-style-type: square;
}

.map-container {
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;

  & > * {
    margin-bottom: 0.5rem;
  }

  & > *:last-child {
    margin-bottom: 0;
  }

  & > ul {
    margin-top: 0.5rem;
  }

  & > ul > li {
    margin-bottom: 0.5rem;
    font-weight: 700;
  }

  & > ul > li:last-child {
    margin-bottom: 0;
  }
}

#contact-section {
  margin: 5rem 0;
}

#contact-section * {
  margin: 1rem;
}

#contact-list li {
  padding: 0;
  margin: 0;
}
</style>
