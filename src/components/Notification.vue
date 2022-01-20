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
export default {
  name: 'Notification',
  data () {
    return {
      isDismissed: false
    }
  },
  computed: {
    hasRightSlot () {
      return this.$slots.right
    }
  },
  methods: {
    dismiss () {
      this.isDismissed = true

      this.$buefy.snackbar.open({
        message: 'Dismissed',
        queue: false
      })
    }
  }
}
</script>
