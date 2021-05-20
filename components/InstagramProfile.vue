<template>
  <div class="instagram-profile">
    {{ name }}

    <img
      :src="`/avatars/${nickname}.jpg`"
      :alt="name"
    >
  </div>
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

</style>
