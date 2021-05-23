<template>
  <a
    class="instagram-profile"
    :class="{ 'instagram-profile--short': short }"
    :href="`https://instagram.com/${nickname}`"
    target="_blank"
    rel="noopener nofollow noreferrer"
  >
    <template v-if="!short">
      <img
        :src="`/avatars/${nickname}.jpg`"
        :alt="name"
        class="instagram-profile__avatar"
      >

      <p class="instagram-profile__avatar-stub">
        🙂
      </p>
    </template>

    <p class="instagram-profile__name">
      {{ name }}
    </p>
  </a>
</template>

<script>
import instagramAvatars from '@/data/instagram-avatars.json'

export default {
  name: 'InstagramProfile',

  props: {
    name: { type: String, required: true },
    short: { type: Boolean, default: false }
  },

  computed: {
    nickname () {
      return this.name.replace('@', '')
    },

    avatarSrc () {
      return instagramAvatars[this.nickname] || ''
    }
  }
}
</script>

<style lang="scss" scoped>
.instagram-profile {
  display: flex;
  align-items: center;
  color: color(text);
  position: relative;

  &__avatar {
    width: 48px;
    height: 48px;
    border-radius: 50%;
    z-index: 1;

    @include respond-to(sm) {
      width: 40px;
      height: 40px;
    }

    &-stub {
      @include typo(h500);

      position: absolute;
      top: 50%;
      left: 0;
      transform: translateY(-50%);
      background-color: #ddd;
      width: 48px;
      height: 48px;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;

      @include respond-to(sm) {
        width: 40px;
        height: 40px;
      }
    }
  }

  &__name {
    @include typo(h400, medium);

    margin-left: spacing(400);
    font-family: var(--logo-font-family);

    @include respond-to(sm) {
      @include typo(h300, medium);

      word-break: break-all;
      margin-left: spacing(300);
    }
  }

  &--short &__name {
    @include typo(h200, medium);

    margin-left: 0;
  }
}
</style>
