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
          #GUESSPIANO
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
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.04);
  background-color: #fff;
  display: flex;
  align-items: center;

  &__content {
    @include container;

    display: flex;
    justify-content: space-between;
    position: relative;
  }

  &__links {
    display: grid;
    grid-auto-flow: column;
    gap: spacing(500);
  }

  &__title {
    @include typo(h500, medium);

    color: black;
    text-align: center;

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
