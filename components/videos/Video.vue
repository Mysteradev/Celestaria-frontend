<template>
  <div class="column is-4 video-card">
    <h2>{{title}}</h2>
    <div class="inner-card">
      <img class="image thumbnail" :src="imageUrl" alt="Image de présentation" @click="openLightbox">
      <span class="openIcon">&circlearrowleft;</span>
    </div>
  </div>
</template>

<script>
    export default {
      name: "Video",
      props: {
        title: {
          type: String,
          required: true
        },
        imageUrl: {
          type: String,
          required: true
        }
      },
      methods: {
        openLightbox() {
          this.$emit("event-open-lightbox")
        }
      }
    }
</script>

<style lang="scss" scoped>
.video-card {
  transition: .5s all;
  border-radius: 5px;

  .inner-card {
    -webkit-box-shadow: 0px 10px 20px 0px rgba(0,0,0,0.75);
    -moz-box-shadow: 0px 10px 20px 0px rgba(0,0,0,0.75);
    box-shadow: 0px 10px 20px 0px rgba(0,0,0,0.75);
    cursor: pointer;

    .thumbnail {
      max-height: 250px;
      width: 100%;
    }

    .openIcon {
      position: absolute;
      display: block;
      text-align: center;
      line-height: 39px;
      bottom: -20px;
      right: -20px;
      background: #46B04B;
      height: 40px;
      width: 40px;
      border-radius: 50%;
      color: #FFFFFF;
      cursor: pointer;
    }
  }

  &:hover {
    transform: translateY(-5px);
  }
}
</style>
