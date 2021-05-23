<template>
  <div class="home">
    <h1 class="home__title">
      #GuessPiano
    </h1>

    <div class="home__seasons">
      <nuxt-link
        class="home__season"
        to="/season-1"
      >
        <p class="home__season-txt">
          Сезон 1
        </p>

        <status-badge
          class="home__season-status"
          status="finished"
        />
      </nuxt-link>

      <nuxt-link
        class="home__season"
        to="/season-2"
      >
        <p class="home__season-txt">
          Сезон 2
        </p>

        <status-badge
          class="home__season-status"
          status="going"
        />
      </nuxt-link>
    </div>
  </div>
</template>

<script>
import StatusBadge from '@/components/StatusBadge'

export default {
  name: 'Home',
  components: { StatusBadge }
}
</script>

<style lang="scss">
.home {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  &__title {
    @include typo(h800, medium);

    color: color(text-primary);
    font-family: var(--logo-font-family);

    @include respond-to(sm) {
      @include typo(h700, medium);
    }
  }

  &__seasons {
    margin-top: spacing(900);
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: spacing(700);

     @include respond-to(sm) {
      margin-top: spacing(600);
      gap: spacing(400);
    }
  }

  &__season {
    @include typo(h600, medium);

    display: flex;
    flex-direction: column;
    border: 3px solid color(text);
    color: color(text);
    padding: spacing(500) spacing(700);
    border-radius: 8px;
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.04);
    text-decoration: none;
    transition: all 200ms ease-out;
    font-family: var(--logo-font-family);

    @include respond-to(sm) {
      @include typo(h500, medium);

      padding: spacing(400);
      white-space: nowrap;
    }

    &:hover {
      box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);
      color: color(text-primary);
      border-color: color(text-primary);
    }

    &-status {
      @include typo(h400);

      margin-top: spacing(300);

      @include respond-to(sm) {
        @include typo(h200);
      }
    }
  }
}
</style>
