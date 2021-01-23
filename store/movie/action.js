export default {
  /**
   * Récupère les vidéos du chapitre correspondant
   * @param state
   * @param commit
   * @constructor
   */
  GET_TITLE: async function({ state, commit }) {
    commit('SET_LOADING', true);
    //TODO Changer l'URL de l'API pour y inclure le chapitre actuel en le récupérant depuis le state
    await this.$axios.$get(`https://picsum.photos/v2/list?limit=10`)
      .then(response => {
        commit('SET_TITLE', response);
        commit('SET_LOADING', false);
      }, err => {
        console.log(`An error occured ${err}`)
      })
    ;
  },
  /**
   * Récupère les vidéos du chapitre correspondant
   * @param state
   * @param commit
   * @constructor
   */
  GET_THUMBNAIL_URL: async function({ state, commit }) {
    commit('SET_LOADING', true);
    //TODO Changer l'URL de l'API pour y inclure le chapitre actuel en le récupérant depuis le state
    await this.$axios.$get(`https://picsum.photos/v2/list?limit=10`)
      .then(response => {
        commit('SET_THUMBNAIL_URL', response);
        commit('SET_LOADING', false);
      }, err => {
        console.log(`An error occured ${err}`)
      })
    ;
  },
  /**
   * Récupère les vidéos du chapitre correspondant
   * @param state
   * @param commit
   * @constructor
   */
  GET_MOVIEL_URL: async function({ state, commit }) {
    commit('SET_LOADING', true);
    //TODO Changer l'URL de l'API pour y inclure le chapitre actuel en le récupérant depuis le state
    await this.$axios.$get(`https://picsum.photos/v2/list?limit=10`)
      .then(response => {
        commit('SET_MOVIE_URL', response);
        commit('SET_LOADING', false);
      }, err => {
        console.log(`An error occured ${err}`)
      })
    ;
  },
  /**
   * Récupère les vidéos du chapitre correspondant
   * @param state
   * @param commit
   * @constructor
   */
  GET_MOVIE_SLUG: async function({ state, commit }) {
    commit('SET_LOADING', true);
    //TODO Changer l'URL de l'API pour y inclure le chapitre actuel en le récupérant depuis le state
    await this.$axios.$get(`https://picsum.photos/v2/list?limit=10`)
      .then(response => {
        commit('SET_MOVIE_SLUG', response);
        commit('SET_LOADING', false);
      }, err => {
        console.log(`An error occured ${err}`)
      })
    ;
  },
}
