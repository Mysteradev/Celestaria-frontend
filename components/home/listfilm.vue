<template>
  <div class="columns mt-5 mb-5" >
    <div class="column" v-for="video in videos">
      <p class="has-text-centered">{{ video.author }}</p>
      <a :href="video.download_url">
        <img :src="video.download_url" alt="" class="image-home">
      </a>
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
