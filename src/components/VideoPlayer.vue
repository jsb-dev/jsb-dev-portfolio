<template>
  <div class="video-container">
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
    videoSrc() {
      return require(`@/assets/videos/${this.assetName}.mp4`);
    },
  },
};
</script>

<style>
.video-container {
  position: relative;
  overflow: hidden;
  width: 85rem;
  max-width: 75vw;
  padding-top: 56.25%; /* 16:9 Aspect Ratio */
}

.video-tag {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  border-radius: 10px;
}
</style>
