<template>
  <card-component title="Edit Profile" icon="account-circle">
    <form @submit.prevent="submit">
      <b-field horizontal label="Avatar">
        <file-picker/>
      </b-field>
      <hr>
      <b-field horizontal label="Name" message="Required. Your name">
        <b-input v-model="form.name" name="name" required/>
      </b-field>
      <b-field horizontal label="E-mail" message="Required. Your e-mail">
        <b-input v-model="form.email" name="email" type="email" required/>
      </b-field>
      <hr>
      <b-field horizontal>
        <div class="control">
          <button type="submit" class="button is-primary" :class="{'is-loading':isLoading}">
            Submit
          </button>
        </div>
      </b-field>
    </form>
  </card-component>
</template>

<script>
import { mapState } from 'vuex'
import FilePicker from '@/components/FilePicker'
import CardComponent from '@/components/CardComponent'

export default {
  name: 'ProfileUpdateForm',
  components: {
    CardComponent,
    FilePicker
  },
  data () {
    return {
      isFileUploaded: false,
      isLoading: false,
      form: {
        name: null,
        email: null
      }
    }
  },
  computed: {
    ...mapState([
      'userName',
      'userEmail'
    ])
  },
  mounted () {
    this.form.name = this.userName
    this.form.email = this.userEmail
  },
  methods: {
    submit () {
      this.isLoading = true
      setTimeout(() => {
        this.isLoading = false
        this.$store.commit('user', this.form)
        this.$buefy.snackbar.open({
          message: 'Updated',
          queue: false
        })
      }, 500)
    }
  },
  watch: {
    userName (newValue) {
      this.form.name = newValue
    },
    userEmail (newValue) {
      this.form.email = newValue
    }
  }
}
</script>
