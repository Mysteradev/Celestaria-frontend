<template>
  <div class="list-movies">
    <div class="columns is-multiline">
      <Video v-for="movie in movies" :key="movie.id" :id="movie.id" :thumbnailUrl="movie.download_url" :videoUrl="movie.videoUrl" :title="movie.author" />
    </div>
  </div>
</template>

<script>
import Video from "@/components/movieMaker/Video";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "listMovies",
  components: {Video},
  props: {
    triggerPage: {
      type: String,
      required: true
    }
  },
  created() {
    this.fetchMovies(this.triggerPage);
  },
  methods: {
    ...mapActions({
      fetchMovies: 'listMovies/FETCH_MOVIES'
    })
  },
  computed:
    mapGetters({
      'movies': 'listMovies/getMovies'
    })
}
</script>

<style scoped>

</style>
