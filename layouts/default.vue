<template>
  <div class="app scheme scheme--light">
    <AppHeader />
    <Nuxt class="app__content" />
    <AppFooter />
  </div>
</template>

<script>
import AppHeader from '@/components/AppHeader.vue'
import AppFooter from '@/components/AppFooter.vue'

export default {
  components: {
    AppHeader,
    AppFooter
  }
}
</script>

<style lang="scss">
@import '@/styles/fonts';

:root {
  --app-font-family:
    'Inter',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  --logo-font-family: 'Pacifico', cursive;
}

html,
button {
  font-family: var(--app-font-family);
  color: color(text);
}

.app {
  @include typo(h300);

  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 100vh;
  background-color: color(app-bg);
  background: url('/bg.png');

  &__content {
    @include container;

    flex: 2;
    padding-top: spacing(600);
    padding-bottom: spacing(600);
  }
}
</style>
