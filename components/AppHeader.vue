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
  background: red;
  height: 48px;

  &__title {
    font-weight: 300;
    color: #35495e;
    letter-spacing: 1px;
    text-align: center;
  }
}
</style>
