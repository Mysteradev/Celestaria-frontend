<template>
  <div class="container">
    <div class="columns ml-3 mr-3 mt-6 mb-6" >
      <div class="clomun">
        <h3 class="is-size-3">Retrouver ici des films d'autres utilisateurs</h3>
      </div>
    </div>
    <div class="columns ml-3 mr-3 mt-6 mb-6" >
      <div class="column" v-for="video in videos">
        <p class="has-text-centered">{{ video.author }}</p>
        <a :href="video.download_url">
          <img :src="video.download_url" alt="">
        </a>
      </div>
    </div>
  </div>
</template>
<script>

import axios from "axios";

export default {
  name: "listfilm",
  data() {
    return {
      videos: []
    }
  },
  mounted() {
    axios
      .get('https://picsum.photos/v2/list?limit=4')
      .then(response => (this.videos = response.data))
      .catch(error => {console.log(error);})
  }
}
</script>

<style scoped>
.image-home{
  height: 299px;
}
</style>
