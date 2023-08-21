<template>
    <div id="home-page">
      <section>
        <TopicList :topicData="htmlTopicData" />
      </section>
      
      <section>
        <TopicList :topicData="cssTopicData" />
      </section>
  
      <section>
        <TopicList :topicData="jsTopicData" />
      </section>
    </div>
  </template>

<script>
import { ref, onMounted } from 'vue';
import TopicList from '@/components/topic-list/TopicList.vue';
import { htmlTopicData as htmlData, cssTopicData as cssData, jsTopicData as jsData } from '@/data/topic-data.js';

export default {
  components: {
    TopicList
  },
  setup() {
    const htmlTopicData = ref([]);
    const cssTopicData = ref([]);
    const jsTopicData = ref([]);

    const loadData = async () => {
      htmlTopicData.value = htmlData;
      cssTopicData.value = cssData;
      jsTopicData.value = jsData;
    };

    onMounted(loadData);

    return {
      htmlTopicData,
      cssTopicData,
      jsTopicData
    };
  }
};
</script>

  
  <style scoped>
  #home-page {
    width: 100vw;
    height: 100vh;
    overflow: hidden;
  }
  </style>
  