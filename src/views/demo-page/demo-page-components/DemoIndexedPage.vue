<template>
  <div
    :style="{ alignItems: pageShellAlignItems, marginTop: pageShellMarginTop }"
    class="page-shell"
  >
    <section
      :style="{ ...listsContainerStyles, height: mainContainerHeight }"
      class="main-container"
    >
      <section>
        <h2>HTML</h2>
        <TopicList :topicData="htmlTopicData" />
      </section>
      <section>
        <h2>CSS</h2>
        <TopicList :topicData="cssTopicData" />
      </section>
      <section>
        <h2>JavaScript</h2>
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
      return this.viewportIsPortable ? '0' : '.9vh';
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
        justifyContent: 'space-between',
        alignItems: 'center',
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
