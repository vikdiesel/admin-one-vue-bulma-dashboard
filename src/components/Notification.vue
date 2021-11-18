<template>
  <div
    v-if="!isDismissed"
    :class="componentClass"
    class="jb-notification"
  >
    <level>
      <div class="jb-notification-container">
        <icon v-if="icon" :path="icon" size="24" class="is-notification-icon" />
        <span class="jb-notification-message"><slot /></span>
      </div>
      <slot v-if="hasRightSlot" name="right" />
      <jb-button
        v-else
        :icon="mdiClose"
        :outline="outline || (darkMode && ['white', 'light'].indexOf(color) < 0)"
        @click="dismiss"
        small
      />
    </level>
  </div>
</template>

<script>
import { ref, computed } from 'vue'
import { useStore } from 'vuex'
import { mdiClose } from '@mdi/js'
import { colorsBg, colorsBorders, colorsOutline } from '@/colors.js'
import Level from '@/components/Level'
import Icon from '@/components/Icon'
import JbButton from '@/components/JbButton'

export default {
  name: 'Notification',
  components: {
    Icon,
    Level,
    JbButton
  },
  props: {
    icon: String,
    outline: Boolean,
    color: {
      type: String,
      required: true
    }
  },
  setup (props, { slots }) {
    const componentClass = computed(() => props.outline
      ? colorsOutline[props.color]
      : [...colorsBg[props.color], ...colorsBorders[props.color]])

    const isDismissed = ref(false)

    const dismiss = () => {
      isDismissed.value = true
    }

    const hasRightSlot = computed(() => slots.right)

    const store = useStore()

    const darkMode = computed(() => store.state.darkMode)

    return {
      componentClass,
      isDismissed,
      dismiss,
      hasRightSlot,
      darkMode,
      mdiClose
    }
  }
}
</script>
