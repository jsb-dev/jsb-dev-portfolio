<template>
    <ul :class="{ 'vertical-list': viewportIsVertical, 'horizontal-list': !viewportIsVertical }">
      <TopicCard v-for="topic in topicData" :key="topic.id" :topic="topic.topic" :brief="topic.brief" />
    </ul>
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
    /* vertical list styles here */
  }
  
  .horizontal-list {
    /* horizontal list styles here */
  }
  </style>
  