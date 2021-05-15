<template>
  <div class="season-winners">
    {{ topWinners }}
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
          acc[song.winner] = acc[song.winner] || 0 + song.points * 2

          song.guessers.forEach((item) => {
            acc[item] = acc[item] || 0 + song.points
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
