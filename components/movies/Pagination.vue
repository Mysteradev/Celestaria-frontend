<template>
  <nav class="pagination is-centered pb-5" role="navigation" aria-label="pagination">
    <a class="pagination-previous">Précédent</a>
    <a class="pagination-next">Suivant</a>
    <ul class="pagination-list">
      <li>
        <NuxtLink :to="`/movies/${getCurrentPage}`" class="pagination-link is-current" :aria-label="`Page ${getCurrentPage}`" aria-current="page">{{getCurrentPage}}</NuxtLink>
      </li>
      <li>
        <NuxtLink :to="`/movies/${getNextPage}`" class="pagination-link" :aria-label="`Aller à la page ${getNextPage}`">{{getNextPage}}</NuxtLink>
      </li>
      <li>
        <NuxtLink :to="`/movies/${getNextPageOfNextPage}`" class="pagination-link" :aria-label="`Aller à la page ${getNextPageOfNextPage}`">{{getNextPageOfNextPage}}</NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "Pagination",
  data() {
    return {
      currentPage: 1
    }
  },
  computed: {
    ...mapGetters({
      getCurrentPage: 'listMovies/getCurrentPage'
    }),
    /**
     * Get the next number of the current page
     * @returns {number}
     */
    getNextPage(){
      return Number(this.getCurrentPage) + 1
    },

    /**
     * @returns {number}
     */
    //TODO That's omega shit
    getNextPageOfNextPage() {
      return Number(this.getNextPage) + 1
    }
  }
}
</script>

<style scoped>

</style>
