<template>
  <div class="is-user-avatar">
    <img
      :src="newAvatar"
    >
  </div>
</template>

<script>
export default {
  name: 'UserAvatar',
  props: {
    avatar: {
      type: String,
      default: null
    }
  },
  computed: {
    newAvatar () {
      return this.avatar ? this.avatar : this.$store.state.userAvatar
    }
  }
}
</script>
