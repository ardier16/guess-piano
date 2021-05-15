<template>
  <div class="season-viewer">
    <div>
      {{ topWinners }}

      <div class="season-viewer__episodes">
        <episode-viewer
          v-for="(episode, i) in season.episodes"
          :key="i"
          class="season-viewer__episode"
          :episode="episode"
        />
      </div>
    </div>
  </div>
</template>

<script>
import EpisodeViewer from './EpisodeViewer.vue'

export default {
  name: 'SeasonViewer',
  components: { EpisodeViewer },

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

<style>
.season-viewer {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.season-viewer__title {
  font-family:
    'Quicksand',
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}
</style>
