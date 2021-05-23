<template>
  <div class="song-viewer table__row">
    <p class="song-viewer__id">
      {{ index + 1 }}
    </p>

    <p class="song-viewer__name">
      {{ song.name }}
    </p>

    <p class="song-viewer__winner table__cell">
      <span class="table__cell-lbl">
        Победитель
      </span>

      <instagram-profile
        class="song-viewer__winner-val table__cell-val"
        :name="song.winner"
      />
    </p>

    <p class="song-viewer__points table__cell">
      <span class="table__cell-lbl">
        Очки
      </span>

      <span class="table__cell-val">
        {{ song.points }}
      </span>
    </p>

    <div class="song-viewer__guessers table__cell">
      <span class="table__cell-lbl">
        Угадавшие
      </span>

      <div class="table__cell-val">
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
@import "./styles/table";

.song-viewer {
  display: grid;
  grid-template-columns: 0.2fr 0.9fr 1fr 0.2fr 0.6fr;

  @include respond-to(sm) {
    grid-template:
      "id song"
      "winner winner"
      "points points"
      "guessers guessers";
    grid-template-columns: auto 1fr;
  }

  &__id,
  &__guessers-stub {
    @include typo(h300, medium);

    color: color(text);
  }

  &__id {
    @include respond-to(sm) {
      grid-area: id;
    }
  }

  &__name {
    @include typo(h300, medium);

    color: color(text);

    @include respond-to(sm) {
      grid-area: song;
    }
  }

  &__winner {
    @include respond-to(sm) {
      grid-area: winner;
      border-top: 2px solid color(block-border);
      padding-top: spacing(300);
    }
  }

  &__points {
    @include typo(h300, medium);

    color: color(text);

    @include respond-to(sm) {
      grid-area: points;
    }
  }

  &__guessers {
    @include respond-to(sm) {
      grid-area: guessers;
    }

    &-items {
      display: grid;
      gap: spacing(300);

      @include respond-to(sm) {
        justify-items: end;
      }
    }

    &-btn {
      @include typo(h200, medium);

      background-color: transparent;
      border: none;
      color: color(text-primary);
    }
  }

  &__points,
  &__guessers {
    @include respond-to(sm) {
      border-top: 1px solid color(block-border);
      padding-top: spacing(300);
    }
  }
}
</style>
