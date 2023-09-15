<template>
  <div id="homepage">
    <div :style="{ height: mainContainerHeight }" id="main-container">
      <section id="content-section">
        <h1>My Resume</h1>

        <section
          class="topic-section"
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
import { mapState } from 'vuex';

export default {
  name: 'HomePage',
  data() {
    return {
      resumeData,
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
#homepage {
  display: flex;
  justify-content: center;
  align-items: center;
}

#homepage {
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

#content-section {
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

.topic-section, section {
  padding: 1rem 2rem;
}
</style>
@/assets/data/resume-data.js../assets/sb/resume-data.js