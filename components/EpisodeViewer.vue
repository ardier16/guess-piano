<template>
  <div class="episode-viewer">
    <div
      v-for="(song, i) in episode.songs"
      :key="i"
      class="episode-viewer__song"
    >
      <p>{{ i + 1 }}</p>
      <p>{{ song.name }}</p>
      <p>{{ song.winner }}</p>
      <p>{{ song.guessers }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'EpisodeViewer',

  props: {
    episode: { type: Object, required: true }
  }
}
</script>

<style lang="scss" scoped>
.episode-viewer {
  &__song {
    display: grid;
    grid-template-columns: 0.5fr 1fr 0.8fr 0.8fr;
  }
}
</style>
