<template>
  <div class="season-viewer">
    <h2 class="season-viewer__title">
      Сезон #{{ season.id }}
    </h2>

    <div class="season-viewer__links">
      <nuxt-link
        class="season-viewer__link"
        :class="{ 'season-viewer__link--active': !$route.hash }"
        active-class="season-viewer__link--active"
        to="#winners"
      >
        <p class="season-viewer__link-txt">
          Победители
        </p>

        <status-badge
          class="season-viewer__link-status"
          :status="season.status"
        />
      </nuxt-link>

      <nuxt-link
        v-for="(episode, i) in season.episodes"
        :key="i"
        class="season-viewer__link"
        active-class="season-viewer__link--active"
        :to="`#episode-${i + 1}`"
      >
        <p class="season-viewer__link-txt">
          Серия {{ i + 1 }}
        </p>

        <status-badge
          class="season-viewer__link-status"
          :status="episode.status"
        />
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
import EpisodeViewer from './EpisodeViewer'
import StatusBadge from './StatusBadge'

export default {
  name: 'SeasonViewer',
  components: { EpisodeViewer, StatusBadge },

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
    color: color(text);
    font-family: var(--logo-font-family);

    @include respond-to(sm) {
      @include typo(h600, medium);
    }
  }

  &__links {
    margin-top: spacing(500);
    display: grid;
    grid-auto-flow: column;
    gap: spacing(500);
    justify-content: center;

    @include respond-to(sm) {
      margin-top: spacing(700);
      gap: spacing(400);
      overflow-x: auto;
      overflow-y: hidden;
      justify-content: flex-start;
      white-space: nowrap;
    }
  }

  &__link {
    display: grid;
    border: 1px solid color(text);
    color: color(text);
    padding: spacing(400) spacing(500);
    border-radius: 8px;
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.04);
    text-decoration: none;
    transition: all 200ms ease-out;

    @include respond-to(sm) {
      grid-auto-flow: row;
      padding: spacing(300) spacing(400);
      width: 100%;
    }

    &:hover {
      box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);
    }

    &--active {
      color: color(text-primary);
      border-color: color(text-primary);
    }

    &-txt {
      @include typo(h400, medium);
    }
  }

  &__main {
    margin-top: spacing(600);
  }
}
</style>
