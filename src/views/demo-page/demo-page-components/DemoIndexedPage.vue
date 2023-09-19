<template>
  <div
    :style="{ alignItems: pageShellAlignItems, marginTop: pageShellMarginTop }"
    class="page-shell"
  >
    <section :style="listsContainerStyles" class="main-container">
      <section>
        <h3>HTML</h3>
        <TopicList :topicData="htmlTopicData" />
      </section>
      <section>
        <h3>CSS</h3>
        <TopicList :topicData="cssTopicData" />
      </section>
      <section>
        <h3>JavaScript</h3>
        <TopicList :topicData="jsTopicData" />
      </section>
    </section>
  </div>
</template>

<script>
import { ref, onMounted, onBeforeUnmount, computed } from 'vue';
import { mapState, useStore } from 'vuex';
import TopicList from '@/components/topic-list/TopicList.vue';
import {
  htmlTopicData as htmlData,
  cssTopicData as cssData,
  jsTopicData as jsData,
} from '../../../assets/data/topic-data.js';

export default {
  components: {
    TopicList,
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
        flexDirection: 'row',
        flexWrap: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        animation: 'fadeIn 0.5s ease-in-out',
      };
      if (store.state.viewportIsVertical && store.state.viewportIsPortable) {
        return {
          ...baseStyles,
          paddingTop: '20vh',
          flexWrap: 'none',
          overflow: 'hidden',
        };
      } else {
        return {
          ...baseStyles,
          flexDirection: 'column',
        };
      }
    });

    return {
      htmlTopicData,
      cssTopicData,
      jsTopicData,
      listsContainerStyles,
    };
  },
};
</script>
