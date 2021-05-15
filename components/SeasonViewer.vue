<template>
  <div class="season-viewer">
    <div class="season-viewer__links">
      <a
        class="season-viewer__link"
        href="#winners"
      >
        Победители
      </a>

      <a
        v-for="(episode, i) in season.episodes"
        :key="i"
        class="season-viewer__link"
        :href="`#episode-${i + 1}`"
      >
        Серия {{ i + 1 }}
      </a>
    </div>

    <season-winners
      v-show="!$route.hash || $route.hash === '#winners'"
      :season="season"
    />

    <div class="season-viewer__episodes">
      <episode-viewer
        v-for="(episode, i) in season.episodes"
        v-show="$route.hash === `#episode-${i + 1}`"
        :key="i"
        class="season-viewer__episode"
        :episode="episode"
      />
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
  }
}
</script>

<style>
.season-viewer {
  margin: 0 auto;
  min-height: 100vh;
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
