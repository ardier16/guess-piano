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
.app {
  @include typo(h300);

  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 100vh;
  font-family:
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;

  &__content {
    @include container;

    flex: 2;
  }
}
</style>
