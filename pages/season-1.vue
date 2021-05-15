<template>
  <div class="season-1">
    <div>
      <h1 class="season-1__title">
        #GUESSPIANO Сезон 1
      </h1>

      {{ topWinners }}

      <div class="season-1__episodes">
        <episode-viewer
          v-for="(episode, i) in seasonData.episodes"
          :key="i"
          class="season-1__episode"
          :episode="episode"
        />
      </div>
    </div>
  </div>
</template>

<script>
import EpisodeViewer from '@/components/EpisodeViewer.vue'
import season1Data from '@/data/season-1.json'

export default {
  name: 'Season1',
  components: { EpisodeViewer },

  computed: {
    top () {
      return season1Data.episodes
        .reduce((acc, ep) => [...acc, ...ep.songs], [])
        .reduce((acc, song) => {
          if (!acc[song.winner]) {
            acc[song.winner] = 0
          }

          acc[song.winner] += song.points * 2

          song.guessers.forEach((item) => {
            if (!acc[item]) {
              acc[item] = 0
            }

            acc[item] += song.points
          })

          return acc
        }, {})
    },

    topWinners () {
      const topMap = Object.entries(this.top)
        .map(([player, points]) => ({ player, points }))
      return topMap.sort((a, b) => b.points - a.points)
    },

    seasonData: () => season1Data
  }
}
</script>

<style>
.season-1 {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.season-1__title {
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
