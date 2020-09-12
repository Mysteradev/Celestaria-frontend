<template>
    <div class="preview-video">
      <span class="close-button" @click="closeLightbox">&cross;</span>
      <h2>test</h2>
<!--      <video :src="src" :poster="poster"></video>-->
    </div>
</template>

<script>
    export default {
      name: "Lightbox",
      methods: {
        closeLightbox() {
          this.$emit("event-close-lightbox")
        }
      }
      // props: {
      //   poster: {
      //     type: String,
      //     required: true
      //   },
      //   src: {
      //     type: String,
      //     required: true
      //   },
      //
      // }
    }
</script>

<style lang="scss" scoped>
  .close-button {
    position: absolute;
    right: 30px;
    top: 10px;
    cursor: pointer;
    font-size: 30px;
  }

  .preview-video {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: #000;
    background-color: rgba(#000, 0.9);
  }
</style>
