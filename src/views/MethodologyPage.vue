<template>
  <div
    :style="{ alignItems: pageShellAlignItems, marginTop: pageShellMarginTop }"
    class="page-shell"
  >
    <div :style="{ height: mainContainerHeight }" class="main-container">
      <section id="problem-solving-section">
        <div v-for="(item, index) in problemSolvingData" :key="index">
          <div v-if="index % 2 === 0" class="topic-container">
            <component :is="item.tag" class="problem-solving-text">{{
              item.text
            }}</component>
            <img
              v-if="index > 0 && index / 2 <= 6"
              :src="require(`@/assets/images/methodology_${index / 2}.jpg`)"
            />
          </div>
          <div v-else class="problem-solving-text">
            <component :is="item.tag" class="problem-solving-text">{{
              item.text
            }}</component>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import { onMounted, onBeforeUnmount } from 'vue';
import { mapState, useStore } from 'vuex';
import { problemSolvingData } from '@/assets/data/methodology-data.';

export default {
  name: 'MethodologyPage',
  data() {
    return {
      problemSolvingData,
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
#problem-solving-section {
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

img {
  width: 50%;
}

.topic-section,
section {
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
