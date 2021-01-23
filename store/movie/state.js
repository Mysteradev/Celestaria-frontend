export default () => ({
  title: this.$route.params.title,
  isLoading: false,
  thumbnailUrl: this.$route.params.thumbnailUrl,
  videoUrl : this.$route.params.videoUrl,
  movieSlug: this.$route.params.slug
})
