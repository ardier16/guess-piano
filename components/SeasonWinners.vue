<template>
  <div class="season-winners">
    <div
      v-for="(winner, i) in topWinners.slice(0, 10)"
      :key="i"
      class="season-winners__row"
    >
      <p>{{ i + 1 }} </p>
      <p>{{ winner.player }}</p>
      <p>{{ winner.points }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SeasonWinners',

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
.season-winners {
  &__row {
    display: grid;
    grid-template-columns: 0.5fr 1fr 1fr;
  }
}
</style>
