<template>
  <div class="song-viewer__row table__row">
    <p class="song-viewer__id">
      {{ index + 1 }}
    </p>

    <p class="song-viewer__name">
      {{ song.name }}
    </p>

    <instagram-profile
      class="song-viewer__winner"
      :name="song.winner"
    />

    <p class="song-viewer__points">
      {{ song.points }}
    </p>

    <div class="song-viewer__guessers">
      <div
        v-if="isGuessersShown"
        class="song-viewer__guessers-items"
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

      <p
        v-else
        class="song-viewer__guessers-stub"
      >
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
  &__id,
  &__guessers-stub {
    @include typo(h300, medium);

    color: color(text);
  }

  &__name {
    @include typo(h300, medium);

    color: color(text);
  }

  &__points {
    @include typo(h300, medium);

    color: color(text);
  }

  &__guessers {
    &-items {
      display: grid;
      gap: spacing(300);
    }

    &-btn {
      @include typo(h200, medium);

      background-color: transparent;
      border: none;
      color: color(text-primary);
    }
  }
}
</style>
