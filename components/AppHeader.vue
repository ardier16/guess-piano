<template>
  <header class="app-header">
    <NuxtLink to="/">
      <h1 class="app-header__title">
        #GUESSPIANO
      </h1>
    </NuxtLink>
  </header>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.app-header {
  &__title {
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
    font-size: 48px;
    color: #35495e;
    letter-spacing: 1px;
    text-align: center;
  }
}
</style>
