<template>
  <footer class="app-footer">
    <p class="app-footer__copy">
      <span class="app-footer__copy-nick">
        #GuessPiano
      </span>

      <span>©</span>

      <span class="app-footer__copy-nick">
        ardier16
      </span>
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
  padding: spacing(500) 0;

  &__copy {
    @include container;
    @include typo(h400, medium);

    text-align: center;
    color: color(text-inverse);
    opacity: 0.7;

    &-nick {
      font-family: var(--logo-font-family);
    }
  }
}
</style>
