<template>
  <header class="app-header">
    <div class="app-header__content">
      <div class="app-header__links">
        <nuxt-link
          class="app-header__link"
          to="/season-1"
        >
          Сезон 1
        </nuxt-link>

        <nuxt-link
          class="app-header__link"
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
    gap: spacing(700);
  }

  &__link {
    @include typo(h300, medium);

    text-decoration: none;
    color: color(text);

    &:hover {
      text-decoration: underline;
    }
  }

  &__title {
    @include typo(h600, medium);

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
