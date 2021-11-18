<template>
  <icon
    :path="icon"
    class="jb-control-icon is-control-icon"
    :class="h"
  />
</template>

<script>
import Icon from '@/components/Icon'

export default {
  name: 'ControlIcon',
  components: {
    Icon
  },
  props: {
    icon: String,
    h: String
  }
}
</script>
