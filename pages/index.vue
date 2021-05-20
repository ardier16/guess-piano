<template>
  <div class="home">
    <div>
      <h1 class="home__title">
        #GUESSPIANO
      </h1>

      <div class="home__seasons">
        <nuxt-link to="/season-1">
          Сезон 1
        </nuxt-link>

        <nuxt-link to="/season-2">
          Сезон 2
        </nuxt-link>
      </div>
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
    @include typo(h100, medium);

    font-weight: 300;
    font-size: 100px;
    color: #35495e;
    letter-spacing: 1px;
  }
}
</style>
