<template>
  <div class="page-shell">
    <section :style="{ ...listsContainerStyles }" class="main-container">
      <section
        class="content-container"
        :style="{ marginTop: contentContainerMargin }"
      >
        <h2>HTML</h2>
        <TopicList :topicData="htmlTopicData" />
      </section>
      <section
        class="content-container"
        :style="{ marginTop: contentContainerMargin }"
      >
        <h2>CSS</h2>
        <TopicList :topicData="cssTopicData" />
      </section>
      <section
        class="content-container"
        :style="{ marginTop: contentContainerMargin }"
      >
        <h2>JS</h2>
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
    contentContainerStyle() {
      return {
        marginTop: this.viewportIsVertical ? '5rem' : '0',
      };
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
      if (store.state.viewportIsPortable && !store.state.viewportIsVertical) {
        return {
          ...baseStyles,
          flexDirection: 'column',
        };
      } else {
        return {
          ...baseStyles,
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

<style scoped>
section {
  margin: 0;
}

.content-container {
  margin-top: min(5rem, 20px);
}
</style>
