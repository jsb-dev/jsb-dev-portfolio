<template>
  <div :class="{ 'vertical-container': viewportIsVertical, 'horizontal-container': !viewportIsVertical }">
    <ul :class="{ 'vertical-list': viewportIsVertical, 'horizontal-list': !viewportIsVertical }">
      <TopicCard v-for="topic in topicData" :key="topic.id" :topic="topic.topic" :brief="topic.brief" />
    </ul>
  </div>
</template>

<script>
import { computed } from 'vue';
import { useStore } from 'vuex';
import TopicCard from './TopicCard.vue';

export default {
  props: {
    topicData: {
      type: Array,
      required: true
    }
  },
  components: {
    TopicCard
  },
  setup() {
    const store = useStore();
    const viewportIsVertical = computed(() => store.state.viewportIsVertical);

    return {
      viewportIsVertical
    };
  }
};
</script>

<style scoped>
.vertical-list {
  flex-direction: column;
  justify-content: center;
}

.horizontal-list {
  justify-content: space-between;
}

.vertical-container {
  overflow-x: hidden; /* Prevents horizontal scrolling */
  height: 92vh;
  width: 30vw;
}

.horizontal-container {
  overflow-y: hidden; /* Prevents vertical scrolling */
  width: 92vw;
}

ul {
  display: flex;
  list-style: none;
  padding: 0;
  min-width: 150vw;
  overflow: hidden;
}
</style>
