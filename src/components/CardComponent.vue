<template>
  <component
    :is="form ? 'form' : 'div'"
    class="jb-card"
    :class="[rounded]"
    @submit="submit"
  >
    <header
      v-if="title"
      class="jb-card-header">
      <p class="jb-card-header-label" :class="[ icon ? 'has-icon' : 'has-no-icon' ]">
        <icon v-if="icon" :path="icon" class="is-card-header-icon" />
        {{ title }}
      </p>
      <a
        v-if="computedHeaderIcon"
        href="#"
        class="jb-card-header-clickable-icon jb-ring-focus"
        aria-label="more options"
        @click.prevent="headerIconClick"
      >
        <icon :path="computedHeaderIcon" />
      </a>
    </header>
    <div v-if="empty" class="jb-card-empty">
      <p>Nothing's here…</p>
    </div>
    <div v-else :class="{'jb-card-body':!hasTable}">
      <slot />
    </div>
  </component>
</template>

<script>
import { mdiCog } from '@mdi/js'
import { computed } from 'vue'
import Icon from '@/components/Icon'

export default {
  name: 'CardComponent',
  components: { Icon },
  props: {
    title: String,
    icon: String,
    headerIcon: String,
    hasTable: Boolean,
    empty: Boolean,
    form: Boolean,
    rounded: {
      type: String,
      default: 'is-rounded-default'
    }
  },
  emits: ['header-icon-click', 'submit'],
  setup (props, { emit }) {
    const computedHeaderIcon = computed(() => props.headerIcon ?? mdiCog)

    const headerIconClick = () => {
      emit('header-icon-click')
    }

    // const headerFooterBorder = 'border-gray-100 dark:border-gray-700'

    // const headerBorder = 'border-b'

    const submit = e => {
      emit('submit', e)
    }

    return {
      computedHeaderIcon,
      headerIconClick,
      // headerFooterBorder,
      // headerBorder,
      submit
    }
  }
}
</script>
