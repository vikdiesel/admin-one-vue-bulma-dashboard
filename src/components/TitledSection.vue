<template>
  <section
    class="jb-titled-section"
    :class="{ 'is-first':first, 'is-last':last, 'is-default':!first && !last }"
  >
    <slot v-if="custom"/>
    <h1 v-else class="jb-titled-section-title">
      <slot />
    </h1>
  </section>
</template>

<script>
export default {
  name: 'TitledSection',
  props: {
    custom: Boolean,
    first: Boolean,
    last: Boolean
  }
}
</script>
