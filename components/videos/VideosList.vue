<template>
  <div class="videos-list">
    <h1 class="title is-1">Choisir le chapitre 1...</h1>
    <div class="columns is-multiline">
      <Video v-for="video in videos" :key="video.id" :imageUrl="video.imageUrl" :videoUrl="video.videoUrl" :title="video.title" @event-open-lightbox="openLightboxTest(video.url)" v-lightbox/>
    </div>
    <Lightbox v-show="isOpen" @event-close-lightbox="closeLightBox"/>
  </div>
</template>

<script>
  import { mapState } from 'vuex';
  import Video from "./Video";
  import Lightbox from "@/components/lightbox/Lightbox";

  export default {
    name: "VideosList",
    components: {
      Video,
      Lightbox
    },
    data() {
      return {
        isOpen: false,
        videos: [
          {
            "albumId": 1,
            "id": 1,
            "title": "accusamus beatae ad facilis cum similique qui sunt",
            "imageUrl": "https://via.placeholder.com/600/92c952",
            "thumbnailUrl": "https://via.placeholder.com/150/92c952",
            "videoUrl": "https://picsum.photos/id/1005/200/300"
          },
          {
            "albumId": 1,
            "id": 2,
            "title": "reprehenderit est deserunt velit ipsam",
            "imageUrl": "https://via.placeholder.com/600/771796",
            "thumbnailUrl": "https://via.placeholder.com/150/771796",
            "videoUrl": "https://picsum.photos/id/1006/200/300"
          },
          {
            "albumId": 1,
            "id": 3,
            "title": "officia porro iure quia iusto qui ipsa ut modi",
            "imageUrl": "https://via.placeholder.com/600/24f355",
            "thumbnailUrl": "https://via.placeholder.com/150/24f355",
            "videoUrl": "https://picsum.photos/id/1/200/300"
          },
          {
            "albumId": 1,
            "id": 4,
            "title": "culpa odio esse rerum omnis laboriosam voluptate",
            "imageUrl": "https://via.placeholder.com/600/d32776",
            "thumbnailUrl": "https://via.placeholder.com/150/d32776",
            "videoUrl": "https://picsum.photos/id/1013/200/300"
          },
          {
            "albumId": 1,
            "id": 5,
            "title": "natus nisi omnis corporis facere molestiae rerum in",
            "imageUrl": "https://via.placeholder.com/600/f66b97",
            "thumbnailUrl": "https://via.placeholder.com/150/f66b97",
            "videoUrl": "https://picsum.photos/id/1011/200/300"
          },
        ]
      }
    },
    mounted() {
      // this.$store.dispatch('GET_ALL_VIDEOS_LIST');
    },
    // computed: mapState([
    //   'videos'
    // ]),
    methods: {
      openLightboxTest: function(url) {
        this.isOpen = true;
      },
      closeLightBox: function() {
        this.isOpen = false;
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>
