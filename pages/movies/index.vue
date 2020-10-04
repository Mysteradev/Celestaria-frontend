<template>
  <div class="container">
    <section class="hero is-medium is-bold">
      <div class="hero-body">
        <div class="container">
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
        </div>
      </div>
    </section>
    <ListMovies trigger-page="movies"/>

    <Footer/>
  </div>
</template>

<script>
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from "@fortawesome/fontawesome-svg-core";
import ListMovies from "@/components/movies/listMovies";
import Footer from "@/components/shared/Footer";

library.add(faSearch);

export default {
  name: "movies",
  components: {
    Footer,
    ListMovies,
    FontAwesomeIcon,
  },
  data() {
    return {
      search: ''
    }
  },
}
</script>

<style lang="scss" scoped>
  .flat-input {
    border: none;
    border-bottom: 2px solid #929da9;
    border-radius: 0;
    box-shadow: none;
    font-size: 32px;

    &::placeholder {
      color: #929da9;
    }
  }

  .rounded-button {
    border: none;
    padding: 11px;
    font-size: 32px;
  }
</style>
