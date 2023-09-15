<template>
  <div :style="{ padding: aspectRatioPadding }" class="video-container">
    <video controls :src="videoSrc" class="video-tag"></video>
  </div>
</template>

<script>
export default {
  props: {
    assetName: {
      type: String,
      required: true,
    },
  },
  computed: {
    aspectRatioPadding() {
      return '56.25%';  // 16:9 aspect ratio
    },
    videoSrc() {
      return require(`@/assets/videos/${this.assetName}.mp4`);
    },
  },
};
</script>

<style>
.video-container {
  position: relative;
  width: 100%;
  overflow: hidden;
}

.video-tag {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 10px;
}
</style>
