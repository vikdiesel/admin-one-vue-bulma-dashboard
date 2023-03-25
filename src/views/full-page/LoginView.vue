<template>
  <card-component title="Login" icon="lock">
    <router-link slot="button" to="/" class="button is-small">
      Dashboard
    </router-link>

    <form method="POST" @submit.prevent="submit">
      <b-field label="Username">
        <b-input v-model="form.username" name="username" required />
      </b-field>

      <b-field label="Contraseña">
        <b-input
          v-model="form.password"
          type="password"
          name="password"
          required
        />
      </b-field>

      <hr />

      <b-field grouped>
        <div class="control">
          <b-button native-type="submit" type="is-black" :loading="isLoading">
            Login
          </b-button>
        </div>
      </b-field>
    </form>
  </card-component>
</template>

<script>
import { defineComponent } from 'vue'
import CardComponent from '@/components/CardComponent.vue'
import redirect from '@/mixins/redirect'

export default defineComponent({
  name: 'LoginView',
  components: { CardComponent },
  mixins: [redirect],
  data () {
    return {
      isLoading: false,
      form: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    async submit () {
      // Marca la función como asíncrona
      this.isLoading = true

      try {
        await this.$store.dispatch('auth/login', this.form)
        this.$router.push({
          path: this.redirect || '/',
          query: this.otherQuery
        })
      } catch (error) {
        // Si la petición falla, muestra un mensaje de error
        this.isLoading = false
        console.error(error)
        this.$buefy.snackbar.open({
          duration: 5000,
          message: 'Credenciales incorrectas.',
          type: 'is-danger',
          queue: false
        })
      }
    }
  }
})
</script>
