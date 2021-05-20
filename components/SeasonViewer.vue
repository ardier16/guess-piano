<template>
  <div class="season-viewer">
    <h2 class="season-viewer__title">
      Сезон #{{ season.id }}
    </h2>

    <div class="season-viewer__links">
      <nuxt-link
        class="season-viewer__link"
        active-class="season-viewer__link--active"
        to="#winners"
      >
        Победители
      </nuxt-link>

      <nuxt-link
        v-for="(episode, i) in season.episodes"
        :key="i"
        class="season-viewer__link"
        active-class="season-viewer__link--active"
        :to="`#episode-${i + 1}`"
      >
        Серия {{ i + 1 }}
      </nuxt-link>
    </div>

    <div class="season-viewer__main">
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

<style lang="scss" scoped>
.season-viewer {
  display: flex;
  flex-direction: column;
  justify-content: center;

  &__title {
    @include typo(h700, medium);

    text-align: center;
  }

  &__links {
    margin-top: spacing(500);
    display: grid;
    grid-auto-flow: column;
    gap: spacing(500);
    justify-content: center;
  }

  &__link {
    @include typo(h400, medium);

    display: flex;
    border: 1px solid lightgray;
    color: black;
    padding: spacing(400) spacing(500);
    border-radius: 8px;
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.04);
    text-decoration: none;
    transition: all 200ms ease-out;

    &:hover {
      box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);
    }

    &--active {
      color: red;
    }
  }

  &__main {
    margin-top: spacing(600);
  }
}
</style>
