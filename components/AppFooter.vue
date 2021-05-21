<template>
  <footer class="app-footer">
    <p class="app-footer__copy">
      © ardier16
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
  background-color: color(text);
  display: flex;
  align-items: center;
  padding: spacing(600) 0;

  &__copy {
    @include container;
    @include typo(h300, medium);

    text-align: center;
    color: color(text-inverse);
  }
}
</style>
