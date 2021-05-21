<template>
  <header class="app-header">
    <div class="app-header__content">
      <div class="app-header__links">
        <nuxt-link
          class="app-header__link"
          active-class="app-header__link--active"
          to="/season-1"
        >
          Сезон 1
        </nuxt-link>

        <nuxt-link
          class="app-header__link"
          active-class="app-header__link--active"
          to="/season-2"
        >
          Сезон 2
        </nuxt-link>
      </div>

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
      display: none;
    }
  }

  &__link {
    @include typo(h400, medium);

    text-decoration: none;
    color: color(text);
    font-family: var(--logo-font-family);

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
}
</style>
