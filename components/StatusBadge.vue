<template>
  <div
    class="status-badge"
    :class="`status-badge--${status}`"
  >
    <div class="status-badge__pin" />

    <p class="status-badge__txt">
      {{ statusText }}
    </p>
  </div>
</template>

<script>
import { STATUSES } from '@/constants/statuses'

export default {
  name: 'StatusBadge',

  props: {
    status: { type: String, required: true }
  },

  computed: {
    statusText () {
      const STATUS_TEXT_MAP = {
        [STATUSES.coming]: 'Скоро',
        [STATUSES.going]: 'Идёт',
        [STATUSES.finished]: 'Завершено'
      }

      return STATUS_TEXT_MAP[this.status]
    }
  }
}
</script>

<style lang="scss" scoped>
.status-badge {
  display: grid;
  grid-auto-flow: column;
  gap: spacing(300);
  justify-content: center;
  align-items: center;

  &--going { color: color(text-success); }
  &--coming { color: color(text-primary); }
  &--finished {
    color: color(text-error);
    opacity: 0.7;
  }

  &--finished &__pin { background-color: color(text-error); }
  &--coming &__pin { background-color: color(text-primary); }
  &--going &__pin {
    background-color: color(text-success);
    animation: blink 1.5s infinite;
  }

  &__pin {
    width: 6px;
    height: 6px;
    background-color: inherit;
    border-radius: 50%;
  }

  &__txt {
    @include typo(h200, medium);

    color: inherit;
  }
}

@keyframes blink {
  0% { opacity: 100%; }
  40% { opacity: 0%; }
  100% { opacity: 100%; }
}
</style>
