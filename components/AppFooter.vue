<template>
  <footer class="app-footer">
    <p class="app-footer__copy">
      #GUESSPIANO © ardier16
    </p>
  </footer>
</template>

<script>
export default {
  name: 'AppFooter'
}
</script>

<style lang="scss" scoped>
.app-footer {
  background-color: #eee;
  display: flex;
  align-items: center;
  padding: spacing(600) 0;

  &__copy {
    @include container;
    @include typo(h300, medium);

    text-align: center;
    color: #111;
  }
}
</style>
