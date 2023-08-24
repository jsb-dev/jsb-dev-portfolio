<template>
  <div id="home-page">
      <section :style="listsContainerStyles" id="lists-container">
        <section>
          <TopicList :topicData="htmlTopicData" />
        </section>
      
        <section>
          <TopicList :topicData="cssTopicData" />
        </section>
        <section>
          <TopicList :topicData="jsTopicData" />
        </section>
      </section>
  </div>
</template>

<script>
import { ref, onMounted, onBeforeUnmount, computed } from 'vue';
import { useStore } from 'vuex';
import TopicList from '@/components/topic-list/TopicList.vue';
import { htmlTopicData as htmlData, cssTopicData as cssData, jsTopicData as jsData } from '@/data/topic-data.js';

export default {
components: {
  TopicList
},
setup() {
  const store = useStore();
  const htmlTopicData = ref([]);
  const cssTopicData = ref([]);
  const jsTopicData = ref([]);

  const loadData = async () => {
    htmlTopicData.value = htmlData;
    cssTopicData.value = cssData;
    jsTopicData.value = jsData;
  };

  const handleResize = () => {
    store.dispatch('updateLayout');
  };

  onMounted(() => {
    loadData();
    window.addEventListener('resize', handleResize);
  });

  onBeforeUnmount(() => {
    window.removeEventListener('resize', handleResize);
  });

  const listsContainerStyles = computed(() => {
    const baseStyles = {
      display: 'flex',
      flexWrap: 'wrap',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: '92vw',
    };
    if (store.state.viewportIsVertical && store.state.viewportIsPortable) {
      return {
        ...baseStyles,
        flexWrap: 'none',
        flexDirection: 'row',
        marginTop: '6vh',
      };
    } else {
      return {
        ...baseStyles,
        flexDirection: 'row',
      };
    }
  });

  return {
    htmlTopicData,
    cssTopicData,
    jsTopicData,
    listsContainerStyles
  };
}
};
</script>

<style scoped>

#home-page {
  width: 100vw;
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
