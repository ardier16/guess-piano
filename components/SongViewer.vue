<template>
  <div class="episode-viewer__row table__row">
    <p class="episode-viewer__id">
      {{ index + 1 }}
    </p>

    <p class="episode-viewer__name">
      {{ song.name }}
    </p>

    <instagram-profile
      class="episode-viewer__winner"
      :name="song.winner"
    />

    <p class="episode-viewer__points">
      {{ song.points }}
    </p>

    <div class="episode-viewer__guessers">
      <div
        v-if="isGuessersShown"
        class="episode-viewer__guessers-items"
      >
        <instagram-profile
          v-for="(guesser, i) in song.guessers"
          :key="i"
          :name="guesser"
          short
        />
      </div>

      <button
        v-else-if="song.guessers.length"
        class="song-viewer__guessers-btn"
        @click="isGuessersShown = !isGuessersShown"
      >
        Показать
      </button>

      <p v-else>
        –
      </p>
    </div>
  </div>
</template>

<script>
import InstagramProfile from './InstagramProfile'

export default {
  name: 'SongViewer',
  components: { InstagramProfile },

  props: {
    song: { type: Object, required: true },
    index: { type: Number, required: true }
  },

  data () {
    return {
      isGuessersShown: false
    }
  }
}
</script>

<style lang="scss" scoped>
.song-viewer {
  &__guessers {
    &-items {
      display: grid;
      gap: spacing(300);
    }

    &-btn {
      @include typo(h200, medium);

      background-color: transparent;
      border: none;
      color: blue;
    }
  }
}
</style>
