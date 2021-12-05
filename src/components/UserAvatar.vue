<template>
  <div class="is-user-avatar">
    <img
      :src="newAvatar"
    >
  </div>
</template>

<script>
import { computed } from '@vue/composition-api'
import { useStore } from '@/store'

export default {
  name: 'UserAvatar',
  props: {
    avatar: {
      type: String,
      default: null
    }
  },
  setup (props) {
    const store = useStore()

    const newAvatar = computed(() => props.avatar ? props.avatar : store.state.userAvatar)

    return {
      newAvatar
    }
  }
}
</script>
