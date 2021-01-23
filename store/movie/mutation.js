export default {
  /**
   * @param state
   * @param title
   * @constructor
   */
  SET_TITLE: (state, title) => {
    state.title = title;
  },
  /**
   * Change l'état du chargement (true/false)
   * @param state
   * @param isLoading
   * @constructor
   */
  SET_LOADING: (state, isLoading) => {
    state.isLoading = isLoading;
  },
  /**
   * @param state
   * @param thumbnailUrl
   * @constructor
   */
  SET_THUMBNAIL_URL: (state, thumbnailUrl) => {
    state.thumbnailUrl = thumbnailUrl;
  },
  /**
   * @param state
   * @param videoUrl
   * @constructor
   */
  SET_VIDEO_URL: (state, videoUrl) => {
    state.videoUrl = videoUrl;
  },
  /**
   * @param state
   * @param movieSlug
   * @constructor
   */
  SET_MOVIE_SLUG: (state, movieSlug) => {
    state.movieSlug = movieSlug;
  }
}
