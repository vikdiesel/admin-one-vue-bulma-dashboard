<template>
  <card-component rounded="">
    <level type="around">
      <user-avatar class="is-in-user-card"/>
      <div class="jb-user-info">
        <div class="jb-user-control">
          <check-radio-picker
            name="sample-switch"
            type="switch"
            v-model="userSwitchVal"
            :options="{ one: 'Notifications' }"/>
        </div>
        <h1>Howdy, <b>{{ userName }}</b>!</h1>
        <p>Last login <b>12 mins ago</b> from <b>127.0.0.1</b></p>
        <div class="jb-user-checkmark">
          <pill text="Verified" type="info" :icon="mdiCheckDecagram"/>
        </div>
      </div>
    </level>
  </card-component>
</template>

<script>
import { computed, ref } from 'vue'
import { useStore } from 'vuex'
import { mdiCheckDecagram } from '@mdi/js'
import Level from '@/components/Level'
import UserAvatar from '@/components/UserAvatar'
import CardComponent from '@/components/CardComponent'
import CheckRadioPicker from '@/components/CheckRadioPicker'
import Pill from '@/components/Pill'

export default {
  name: 'UserCard',
  components: {
    Level,
    UserAvatar,
    CardComponent,
    CheckRadioPicker,
    Pill
  },
  setup () {
    const store = useStore()

    const userName = computed(() => store.state.userName)

    const userSwitchVal = ref([])

    return {
      userName,
      userSwitchVal,
      mdiCheckDecagram
    }
  }
}
</script>
