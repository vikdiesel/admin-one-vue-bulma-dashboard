<template>
  <span class="jb-icon">
    <svg viewBox="0 0 24 24" :width="size" :height="size">
      <path :d="path" />
    </svg>
  </span>
</template>

<script>
export default {
  name: 'Icon',
  props: {
    path: {
      required: true
    },
    size: {
      default: 16
    }
  }
}
</script>
