<template>
  <div class="container mt-4">
    <div class="columns">
      <div class="column is-three-quarters">
        <h3 class="is-size-3 title mb-4">Un film cool <button class="button is-link is-light">Partager !</button></h3>
        <video controls class="movie-player" >
          <source src="http://techslides.com/demos/sample-videos/small.mp4" type="video/mp4">
        </video>
        <p class="mt-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam dolore expedita mollitia praesentium provident recusandae velit. Atque corporis dolor dolorum, enim illum ipsum laborum, magnam nihil pariatur, placeat quasi quo?</p>
      </div>
      <div class="column">
        <verticallistfilm/>
      </div>
    </div>
  </div>
</template>
<script>

import verticallistfilm from "../../components/movie/verticalListFilm";
import {mapMutations} from "vuex";

export default {
  components: {verticallistfilm},
  name: "movie",
  data() {
    return {
    }
  },
  methods: {
    ...mapMutations({
      setTitle: 'movie/SET_TITLE',
      setVideoUrl: 'movie/SET_MOVIE_URL',
      setThumbnailUrl: 'movie/SET_THUMBNAIL_URL',
      setMovieSlug: 'movie/SET_MOVIE_SLUG'
    })
  },
  mounted() {
    this.setTitle(this.$route.params.title);
    this.setVideoUrl(this.$route.params.videoUrl);
    this.setThumbnailUrl(this.$route.params.thumbnailUrl);
    this.setMovieSlug(this.$route.params.slug);
  }
}
</script>

<style>
.movie-player {
  width: 100%;
  height: auto;
}
</style>
