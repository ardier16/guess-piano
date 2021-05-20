<template>
  <a
    class="instagram-profile"
    :href="`https://instagram.com/${nickname}`"
    target="_blank"
    rel="noopener nofollow noreferrer"
  >
    <img
      :src="`/avatars/${nickname}.jpg`"
      :alt="name"
      class="instagram-profile__avatar"
    >

    <p class="instagram-profile__avatar-stub">
      🙂
    </p>

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
    name: { type: String, required: true }
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
  text-decoration: none;
  color: #111;
  position: relative;

  &:hover {
    text-decoration: underline;
  }

  &__avatar {
    width: 48px;
    height: 48px;
    border-radius: 50%;
    z-index: 1;

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
    }
  }

  &__name {
    @include typo(h400, medium);

    margin-left: spacing(400);
  }
}
</style>
