<template>
  <card-component title="Login" icon="lock">
    <router-link slot="button" to="/" class="button is-small">
      Dashboard
    </router-link>

    <form method="POST" @submit.prevent="submit">
      <b-field label="Dirección E-mail">
        <b-input v-model="form.email" name="email" type="email" required />
      </b-field>

      <b-field label="Contraseña">
        <b-input
          v-model="form.password"
          type="password"
          name="password"
          required
        />
      </b-field>

      <b-field>
        <b-checkbox v-model="form.remember" type="is-black" class="is-thin">
          Recuerdame
        </b-checkbox>
      </b-field>

      <hr />

      <b-field grouped>
        <div class="control">
          <b-button native-type="submit" type="is-black" :loading="isLoading">
            Login
          </b-button>
        </div>
        <div class="control">
          <router-link to="/" class="button is-outlined is-black">
            Dashboard
          </router-link>
        </div>
      </b-field>
    </form>
  </card-component>
</template>

<script>
import { defineComponent } from 'vue'
import CardComponent from '@/components/CardComponent.vue'
import axios from 'axios'

export default defineComponent({
  name: 'LoginView',
  components: { CardComponent },
  data () {
    return {
      isLoading: false,
      form: {
        email: '',
        password: '',
        remember: false
      }
    }
  },
  methods: {
    async submit () {
      // Marca la función como asíncrona
      this.isLoading = true

      try {
        // Realiza una petición POST al endpoint /login de tu backend
        await axios.post('http://localhost:3000/login', {
          email: this.form.email,
          password: this.form.password
        })

        // Si la petición es exitosa, redirecciona al usuario a la página principal
        this.isLoading = false
        this.$router.push('/')
      } catch (error) {
        // Si la petición falla, muestra un mensaje de error
        this.isLoading = false
        console.error(error)
        alert(
          'Ha ocurrido un error al iniciar sesión. Inténtalo de nuevo más tarde.'
        )
      }
    }
  }
})
</script>
