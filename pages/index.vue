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
        Сезон 1
      </nuxt-link>

      <nuxt-link
        class="home__season"
        to="/season-2"
      >
        Сезон 2
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home'
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

    color: #35495e;
    font-family: var(--logo-font-family);
  }

  &__seasons {
    margin-top: spacing(700);
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: spacing(700);
  }

  &__season {
    @include typo(h600, medium);

    display: flex;
    border: 1px solid lightgray;
    color: black;
    padding: spacing(700);
    border-radius: 8px;
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.04);
    text-decoration: none;
    transition: all 200ms ease-out;

    &:hover {
      box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);
    }
  }
}
</style>
