<template>
  <div class="field is-grouped">
    <label class="label is-hidden" for="searchByTitle">Label</label>
    <div class="control is-expanded">
      <input class="input flat-input" type="text" id="searchByTitle" placeholder="Un voyage qui à mal tourné..." v-model="search">
    </div>
    <div class="control">
      <a href="#" class="button rounded-button">
        <FontAwesomeIcon :icon="['fas', 'search']"/>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "searchBar"
}
</script>

<style scoped>

</style>
