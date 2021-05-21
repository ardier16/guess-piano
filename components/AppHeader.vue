<template>
  <header class="app-header">
    <div class="app-header__content">
      <button
        class="app-header__menu"
        @click="isLinksShown = true"
      >
        <span class="app-header__menu-icon material-icons">
          menu
        </span>
      </button>

      <div
        class="app-header__links"
        :class="{ 'app-header__links--shown' : isLinksShown }"
      >
        <nuxt-link
          class="app-header__link"
          active-class="app-header__link--active"
          to="/season-1"
          @click.native="isLinksShown = false"
        >
          Сезон 1
        </nuxt-link>

        <nuxt-link
          class="app-header__link"
          active-class="app-header__link--active"
          to="/season-2"
          @click.native="isLinksShown = false"
        >
          Сезон 2
        </nuxt-link>
      </div>

      <button
        v-if="isLinksShown"
        class="app-header__overlay"
        @click="isLinksShown = false"
      />

      <NuxtLink
        class="app-header__title-wrp"
        to="/"
      >
        <h1 class="app-header__title">
          #GuessPiano
        </h1>
      </NuxtLink>

      <div />
    </div>
  </header>
</template>

<script>
export default {
  name: 'AppHeader',
  data () {
    return {
      isLinksShown: false
    }
  }
}
</script>

<style lang="scss" scoped>
.app-header {
  height: 64px;
  position: sticky;
  top: 0;
  box-shadow: 0 4px 16px rgba(238, 188, 142, 0.2);
  background-color: color(block-bg);
  display: flex;
  align-items: center;
  z-index: 2;

  &__content {
    @include container;

    display: flex;
    justify-content: space-between;
    position: relative;
  }

  &__links {
    display: grid;
    grid-auto-flow: column;
    gap: spacing(600);

    @include respond-to(sm) {
      display: flex;
      transform: translateX(-100%);
      width: 40vw;
      background-color: color(block-bg);
      z-index: 2;
      padding: spacing(400);
      flex-direction: column;
      gap: spacing(400);
      transition: all 200ms ease-out;
    }

    &--shown {
      transform: translateX(0);
    }
  }

  &__links,
  &__overlay {
    @include respond-to(sm) {
      position: fixed;
      top: 0;
      left: 0;
      height: 100vh;
    }
  }

  &__overlay {
    width: 100vw;
    background-color: rgba(0, 0, 0, 0.8);
    z-index: 1;
  }

  &__link {
    @include typo(h400, medium);

    text-decoration: none;
    color: color(text);
    font-family: var(--logo-font-family);

    @include respond-to(sm) {
      padding: spacing(300) 0;
    }

    &:hover {
      text-decoration: underline;
    }

    &--active {
      color: color(text-primary);
    }
  }

  &__title {
    @include typo(h500, medium);

    color: color(text);
    text-align: center;
    font-family: var(--logo-font-family);

    &-wrp {
      text-decoration: none;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }

  &__menu {
    display: none;

    @include respond-to(sm) {
      display: flex;
      background-color: transparent;
      border: none;
    }

    &-icon {
      @include typo(h500);
    }
  }
}
</style>
