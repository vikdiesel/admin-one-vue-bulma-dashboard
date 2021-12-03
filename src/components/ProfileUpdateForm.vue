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
        <file-picker />
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
        <div class="control">
          <button
            type="submit"
            class="button is-primary"
            :class="{ 'is-loading': isLoading }"
          >
            Submit
          </button>
        </div>
      </b-field>
    </form>
  </card-component>
</template>

<script>
import { computed, ref } from '@vue/composition-api'
import { useStore } from '@/store'
import FilePicker from '@/components/FilePicker'
import CardComponent from '@/components/CardComponent'

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
