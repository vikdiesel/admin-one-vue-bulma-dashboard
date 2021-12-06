<template>
  <card-component
    title="Edit Profile"
    icon="account-circle"
  >
    <form @submit.prevent="submit">
      <b-field
        horizontal
        label="Avatar"
      >
        <file-picker type="is-info" />
      </b-field>
      <hr>
      <b-field
        horizontal
        label="Name"
        message="Required. Your name"
      >
        <b-input
          v-model="userName"
          name="name"
          required
        />
      </b-field>
      <b-field
        horizontal
        label="E-mail"
        message="Required. Your e-mail"
      >
        <b-input
          v-model="userEmail"
          name="email"
          type="email"
          required
        />
      </b-field>
      <hr>
      <b-field horizontal>
        <b-field grouped>
          <div class="control">
            <b-button
              native-type="submit"
              type="is-info"
              :loading="isLoading"
            >
              Submit
            </b-button>
          </div>
          <div class="control">
            <b-button
              type="is-info"
              native-type="button"
              outlined
            >
              Reset
            </b-button>
          </div>
        </b-field>
      </b-field>
    </form>
  </card-component>
</template>

<script>
import { computed, ref } from '@vue/composition-api'
import { useStore } from '@/store'
import FilePicker from '@/components/FilePicker.vue'
import CardComponent from '@/components/CardComponent.vue'

export default {
  name: 'ProfileUpdateForm',
  components: {
    CardComponent,
    FilePicker
  },
  setup (props, { root: { $buefy } }) {
    const store = useStore()

    const userName = computed({
      get: () => store.state.userName,
      set: name => {
        store.commit('user', { name })
      }
    })

    const userEmail = computed({
      get: () => store.state.userEmail,
      set: email => {
        store.commit('user', { email })
      }
    })

    const isLoading = ref(false)

    const submit = () => {
      isLoading.value = true

      setTimeout(() => {
        isLoading.value = false

        $buefy.snackbar.open({
          message: 'Demo only',
          queue: false
        })
      }, 750)
    }

    return {
      userName,
      userEmail,
      isLoading,
      submit
    }
  }
}
</script>
