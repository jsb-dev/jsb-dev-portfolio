<template>
  <div
    :style="{ alignItems: pageShellAlignItems, marginTop: pageShellMarginTop }"
    class="page-shell"
  >
    <div :style="{ height: mainContainerHeight }" class="main-container">
      <section class="content-container">
        <h1>Portfolio</h1>
        <section id="portfolio-section">
          <div v-for="(item, index) in portfolioData" :key="index">
            <component :is="item.tag">{{ item.text }}</component>
            <div v-if="item.tag === 'h2'">
              <VideoPlayer
                class="video-player"
                v-for="(assetName, assetIndex) in videoAssets[item.text]"
                :key="assetIndex"
                :assetName="assetName"
              ></VideoPlayer>
            </div>
          </div>
        </section>
      </section>
    </div>
  </div>
</template>

<script>
import { onMounted, onBeforeUnmount } from 'vue';
import { mapState, useStore } from 'vuex';
import { portfolioData } from '../assets/data/portfolio-data.js';
import VideoPlayer from '../components/VideoPlayer.vue';

export default {
  name: 'PortfolioPage',
  components: {
    VideoPlayer,
  },
  data() {
    return {
      portfolioData,
      videoAssets: {
        Applicate: ['portfolio_1'],
        'Bs. CS': ['portfolio_2', 'portfolio_3', 'portfolio_4'],
      },
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
h1 {
  margin: 2rem;
}

p {
  padding: 1rem 2rem;
}

h2,
p {
  margin: 2rem 0 4rem;
}

#portfolio-section {
  padding: 1rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.video-player {
  margin: 2rem 0;
}
</style>
