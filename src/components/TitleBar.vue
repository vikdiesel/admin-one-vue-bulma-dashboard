<template>
  <section class="jb-title-bar">
    <level>
      <ul>
        <li
          v-for="(title, index) in titleStack"
          :key="index"
        >
          {{ title }}
        </li>
      </ul>
      <jb-button
        href="https://github.com/vikdiesel/admin-one-vue-bulma-dashboard"
        color="info"
        label="Star on GitHub"
        target="_blank"
        :icon="mdiGithub"
      />
    </level>
  </section>
</template>

<script>
import { mdiGithub } from '@mdi/js'
import Level from '@/components/Level'
import JbButton from '@/components/JbButton'

export default {
  name: 'TitleBar',
  components: {
    Level,
    JbButton
  },
  props: {
    titleStack: {
      type: Array,
      default: () => []
    }
  },
  setup () {
    return {
      mdiGithub
    }
  }
}
</script>
