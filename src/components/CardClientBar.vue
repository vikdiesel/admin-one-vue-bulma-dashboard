<template>
  <card-component class="is-card-client-bar" hoverable>
    <level>
      <level type="start">
        <user-avatar class="is-in-card-client-bar" :username="name"/>
        <div class="jb-card-client-bar-content">
          <h4>{{ name }} <span>@{{ login }}</span></h4>
          <p>{{ date }}</p>
        </div>
      </level>
      <pill :type="pillType" :text="pillText" :icon="pillIcon"/>
    </level>
  </card-component>
</template>

<script>
import { computed } from 'vue'
import { mdiTrendingDown, mdiTrendingUp, mdiTrendingNeutral } from '@mdi/js'
import CardComponent from '@/components/CardComponent'
import Level from '@/components/Level'
import Pill from '@/components/Pill'
import UserAvatar from '@/components/UserAvatar'

export default {
  name: 'CardClientBar',
  components: { CardComponent, Level, Pill, UserAvatar },
  props: {
    name: String,
    login: String,
    date: String,
    progress: Number,
    text: String,
    type: String
  },
  setup (props) {
    const pillType = computed(() => {
      if (props.type) {
        return props.type
      }

      if (props.progress) {
        if (props.progress >= 60) {
          return 'success'
        }
        if (props.progress >= 40) {
          return 'warning'
        }

        return 'danger'
      }

      return 'info'
    })

    const pillIcon = computed(() => {
      return {
        success: mdiTrendingUp,
        warning: mdiTrendingNeutral,
        danger: mdiTrendingDown,
        info: null
      }[pillType.value]
    })

    const pillText = computed(() => props.text ?? `${props.progress}%`)

    return {
      pillType,
      pillIcon,
      pillText
    }
  }
}
</script>
