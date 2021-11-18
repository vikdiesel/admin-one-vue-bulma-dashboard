<template>
  <div class="jb-overlay-container" :class="zIndex">
    <transition
      enter-active-class="jb-overlay-transition"
      enter-from-class="enter-from-class"
      enter-to-class="enter-to-class"
      leave-active-class="jb-overlay-transition"
      leave-from-class="leave-from-class"
      leave-to-class="leave-to-class"
    >
      <div
        class="jb-overlay"
        @click="overlayClick"
      ></div>
    </transition>
    <transition
      enter-active-class="jb-overlay-content-enter-active-class"
      enter-from-class="jb-overlay-content-enter-from"
      enter-to-class="jb-overlay-content-enter-to"
      leave-active-class="jb-overlay-content-leave"
    >
      <slot/>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'Overlay',
  emits: ['overlay-click'],
  props: {
    zIndex: {
      type: String,
      default: 'z-default'
    }
  },
  setup (props, { emit }) {
    const overlayClick = event => {
      emit('overlay-click', event)
    }

    return {
      overlayClick
    }
  }
}
</script>
