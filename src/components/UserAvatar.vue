<template>
  <div class="jb-user-avatar">
    <img :src="avatar" :alt="name" class="jb-user-avatar-image" :class="bg" />
  </div>
</template>

<script>
import { useStore } from 'vuex'
import { computed } from 'vue'

export default {
  name: 'UserAvatar',
  props: {
    username: String,
    bg: {
      type: String,
      default: 'has-bg-default'
    },
    api: {
      type: String,
      default: 'api/avataaars'
    }
  },
  setup (props) {
    const store = useStore()

    const avatar = computed(() => props.username
      ? `https://avatars.dicebear.com/${props.api}/${props.username.replace(/[^a-z0-9]+/i, '-')}.svg`
      : store.state.userAvatar)

    const name = computed(() => props.username ? props.username : store.state.userName)

    return {
      name,
      avatar
    }
  }
}
</script>
