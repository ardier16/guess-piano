<template>
  <div class="season-winners table">
    <div class="season-winners__row table__row table__row--head">
      <p class="table__cell table__cell--center">
        #
      </p>

      <p class="table__cell">
        Участник
      </p>

      <p class="table__cell">
        Очки
      </p>

      <p class="table__cell">
        Песен угадано
      </p>
    </div>

    <div
      v-for="(winner, i) in topWinners.slice(0, 10)"
      :key="i"
      class="season-winners__row table__row"
      :class="{ 'season-winners__row--bordered': i === 4 }"
    >
      <p class="season-winners__id">
        <template v-if="i < 3">
          <img
            class="season-winners__id-img"
            :src="getTopIcon(i)"
          >
        </template>

        <template v-else>
          {{ i + 1 }}
        </template>
      </p>

      <instagram-profile
        class="season-winners__player"
        :name="winner.player"
      />

      <p class="season-winners__points table__cell">
        <span class="table__cell-lbl">
          Всего очков
        </span>

        <span class="table__cell-val">
          {{ winner.points }}
        </span>
      </p>

      <p class="season-winners__guessed table__cell">
        <span class="table__cell-lbl">
          Песен угадано
        </span>

        <span class="table__cell-val">
          {{ winner.guessed }}
        </span>
      </p>
    </div>
  </div>
</template>

<script>
import InstagramProfile from './InstagramProfile'

export default {
  name: 'SeasonWinners',
  components: { InstagramProfile },

  props: {
    season: { type: Object, required: true }
  },

  computed: {
    top () {
      return this.season.episodes
        .reduce((acc, ep) => [...acc, ...ep.songs], [])
        .reduce((acc, song) => {
          if (!song.winner) { return acc }

          const guessers = [song.winner, ...song.guessers]

          guessers.forEach((item) => {
            if (!acc[item]) {
              acc[item] = {
                points: 0,
                guessed: 0
              }
            }

            acc[item].points += item === song.winner
              ? song.points * 2
              : song.points
            acc[item].guessed++
          })

          return acc
        }, {})
    },

    topWinners () {
      const topMap = Object.entries(this.top)
        .map(([player, { points, guessed }]) => ({
          player,
          points,
          guessed
        }))
      return topMap.sort((a, b) => {
        return b.points === a.points
          ? b.guessed - a.guessed
          : b.points - a.points
      })
    }
  },

  methods: {
    getTopIcon (i) {
      switch (i + 1) {
        case 1:
          return require('@/assets/gold-medal.svg')
        case 2:
          return require('@/assets/silver-medal.svg')
        case 3:
          return require('@/assets/bronze-medal.svg')
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import "./styles/table";

.season-winners {
  &__row {
    grid-template-columns: 128px 1fr 0.4fr 0.4fr;

    @include respond-to(sm) {
      grid-template: "place winner" "points points" "songs songs";
      grid-template-columns: auto 1fr;
    }

    &--bordered {
      border-bottom: 5px solid color(text-primary);

      @include respond-to(sm) {
        border-radius: 8px 8px 0 0;
      }
    }
  }

  &__id {
    display: flex;
    justify-content: center;

    @include respond-to(sm) {
      grid-area: place;
    }

    &-img {
      width: 32px;
      height: 48px;
    }
  }

  &__winner {
    @include respond-to(sm) {
      grid-area: winner;
    }
  }

  &__points {
    @include typo(h400, medium);

    color: color(text-primary);

    @include respond-to(sm) {
      grid-area: points;
      border-top: 2px solid color(block-border);
      padding-top: spacing(300);
    }
  }

  &__guessed {
    @include respond-to(sm) {
      grid-area: songs;
      border-top: 1px solid color(block-border);
      padding-top: spacing(300);
    }
  }

  &__id,
  &__guessed {
    @include typo(h400, medium);

    color: color(text);
  }
}
</style>
