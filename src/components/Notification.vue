<template>
  <div
    v-if="!isDismissed"
    class="notification"
  >
    <div class="level">
      <div class="level-left">
        <div class="level-item">
          <slot />
        </div>
      </div>
      <div class="level-right">
        <slot
          v-if="hasRightSlot"
          name="right"
        />
        <b-button
          v-else
          native-type="button"
          type="is-white"
          size="is-small"
          @click="dismiss"
        >
          Dismiss
        </b-button>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, ref } from '@vue/composition-api'

export default {
  name: 'Notification',
  setup (props, { root: { $buefy }, slots }) {
    const isDismissed = ref(false)

    const dismiss = () => {
      isDismissed.value = true

      $buefy.snackbar.open({
        message: 'Dismissed',
        queue: false
      })
    }

    const hasRightSlot = computed(() => slots.right)

    return {
      isDismissed,
      dismiss,
      hasRightSlot
    }
  }
}
</script>
