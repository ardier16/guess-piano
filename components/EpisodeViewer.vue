<template>
  <div class="episode-viewer table">
    <div class="episode-viewer__row table__row table__row--head">
      <p>#</p>
      <p>Песня</p>
      <p>Победитель</p>
      <p>Очки</p>
      <p>Угадавшие</p>
    </div>

    <div
      v-for="(song, i) in episode.songs"
      :key="i"
      class="episode-viewer__row table__row"
    >
      <p class="episode-viewer__song-id">
        {{ i + 1 }}
      </p>

      <p class="episode-viewer__song-name">
        {{ song.name }}
      </p>

      <p class="episode-viewer__song-winner">
        {{ song.winner }}
      </p>

      <p class="episode-viewer__song-points">
        {{ song.points }}
      </p>

      <p class="episode-viewer__song-guessers">
        {{ song.guessers.join('\n') }}
      </p>
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
@import "./styles/table";

.episode-viewer {
  &__row {
    display: grid;
    grid-template-columns: 0.5fr 1fr 0.8fr 0.5fr 0.8fr;
  }
}
</style>
