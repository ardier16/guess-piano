<template>
  <div class="episode-viewer table">
    <div class="episode-viewer__row table__row table__row--head">
      <p>#</p>
      <p>Песня</p>
      <p>Победитель</p>
      <p>Очки</p>
      <p>Угадавшие</p>
    </div>

    <song-viewer
      v-for="(song, i) in episode.songs"
      :key="i"
      class="episode-viewer__row table__row"
      :song="song"
      :index="i"
    />
  </div>
</template>

<script>
import SongViewer from './SongViewer'

export default {
  name: 'EpisodeViewer',
  components: { SongViewer },

  props: {
    episode: { type: Object, required: true }
  }
}
</script>

<style lang="scss" scoped>
@import "./styles/table";

.episode-viewer {
  &__row {
    display: grid;
    grid-template-columns: 0.2fr 0.9fr 1fr 0.2fr 0.6fr;
  }
}
</style>
