<template>
  <div class="season-winners table">
    <div class="season-winners__row table__row table__row--head">
      <p>#</p>
      <p>Участник</p>
      <p>Очки</p>
    </div>

    <div
      v-for="(winner, i) in topWinners.slice(0, 10)"
      :key="i"
      class="season-winners__row table__row"
    >
      <p class="season-winners__id">
        {{ i + 1 }}
      </p>

      <instagram-profile
        class="season-winners__player"
        :name="winner.player"
      />

      <p class="season-winners__points">
        {{ winner.points }}
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
          acc[song.winner] = (acc[song.winner] || 0) + song.points * 2

          song.guessers.forEach((item) => {
            acc[item] = (acc[item] || 0) + song.points
          })

          return acc
        }, {})
    },

    topWinners () {
      const topMap = Object.entries(this.top)
        .map(([player, points]) => ({ player, points }))
      return topMap.sort((a, b) => b.points - a.points)
    }
  }
}
</script>

<style lang="scss" scoped>
@import "./styles/table";

.season-winners {
  &__row {
    grid-template-columns: 0.5fr 1fr 1fr;
  }
}
</style>
