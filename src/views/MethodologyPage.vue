<template>
  <div v-if="imagesLoaded">
    <div
      :style="{
        alignItems: pageShellAlignItems,
        marginTop: pageShellMarginTop,
      }"
      class="page-shell"
    >
      <div :style="{ height: mainContainerHeight }" class="main-container">
        <section id="problem-solving-section" class="content-container">
          <h1>Problem Solving Methodology</h1>
          <div
            v-for="(item, index) in problemSolvingData"
            :key="index"
            id="topic-map-container"
          >
            <div
              v-if="index % 2 === 0"
              class="topic-container"
              :style="{
                flexDirection: viewportIsPortable ? 'column' : 'row',
              }"
            >
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
  </div>
  <div v-else class="loading-container">
    <div class="spinner"></div>
  </div>
</template>

<script>
import { onMounted, onBeforeUnmount } from 'vue';
import { mapState, useStore } from 'vuex';
import { problemSolvingData } from '@/assets/data/methodology-data';

export default {
  name: 'MethodologyPage',
  data() {
    return {
      problemSolvingData,
      imagesLoaded: false,
    };
  },
  computed: {
    ...mapState(['viewportIsVertical', 'viewportIsPortable']),
    mainContainerHeight() {
      return this.viewportIsVertical ? '98dvh' : '90dvh';
    },
    pageShellAlignItems() {
      return this.viewportIsPortable ? 'center' : 'space-around';
    },
    pageShellMarginTop() {
      return this.viewportIsPortable ? '0' : '3vh';
    },
  },
  methods: {
    async loadImages() {
      const imgPromises = [];

      for (let index = 1; index <= 6; index++) {
        imgPromises.push(
          new Promise((resolve) => {
            const img = new Image();
            img.src = require(`@/assets/images/methodology_${index}.jpg`);
            img.onload = resolve;
          })
        );
      }

      await Promise.all(imgPromises);
      this.imagesLoaded = true;
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
  mounted() {
    this.loadImages();
  },
};
</script>

<style scoped>
h2 {
  padding: 0;
  margin: 0;
}

#problem-solving-section {
  padding: 4rem;
}

.problem-solving-text {
  padding: 2rem;
}

#topic-map-container {
  display: flex;
  flex-direction: row;
}

#topic-map-container:nth-child(4) h2,
#topic-map-container:nth-child(8) h2,
#topic-map-container:nth-child(12) h2 {
  margin-left: 4vw;
  margin-right: 0;
  padding-right: 0;
}

.topic-section,
section {
  padding: 1rem;
}

.topic-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0;
}

.loading-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.spinner {
  border: 0.8rem solid rgba(123, 123, 123, 0.442);
  width: 6rem;
  height: 6rem;
  border-radius: 50%;
  border-top-color: #9b9b9b80;
  animation: spin 1s ease-in-out infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
