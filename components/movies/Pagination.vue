<template>
  <nav class="pagination is-centered pb-5" role="navigation" aria-label="pagination">
    <a class="pagination-previous">Précédent</a>
    <a class="pagination-next">Suivant</a>
    <ul class="pagination-list">
      <li>
        <a class="pagination-link is-current" :aria-label="`Page ${currentPage}`" aria-current="page">{{currentPage}}</a>
      </li>
      <li>
        <a class="pagination-link" :aria-label="`Aller à la page ${getNextPage}`">{{getNextPage}}</a>
      </li>
      <li>
        <a class="pagination-link" :aria-label="`Aller à la page ${getNextPageOfNextPage}`">{{getNextPageOfNextPage}}</a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "Pagination",
  data() {
    return {
      currentPage: 1
    }
  },
  computed: {
    /**
     * Get the next number of the current page
     * @returns {number}
     */
    getNextPage(){
      return this.currentPage + 1
    },

    /**
     * @returns {number}
     */
    //TODO That's omega shit
    getNextPageOfNextPage() {
      return this.getNextPage + 1
    }
  }
}
</script>

<style scoped>

</style>
