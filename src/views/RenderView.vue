<template>
  <div>
    <title-bar :title-stack="titleStack" />
    <hero-bar>
      Render
    </hero-bar>
    <section class="section is-main-section">
      <card-component title="Render" icon="ballot"
        ><div>
          <b-field label="Ingrese Formato JSON">
            <b-input type="textarea" v-model="text"></b-input>
          </b-field>
        </div>
        <div>
          <b-button size="is-medium"
          type="is-dark" style="margin: 15px 0px;">
                Generar
            </b-button>
        </div>
      </card-component>
    </section>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import TitleBar from '@/components/TitleBar.vue'
import CardComponent from '@/components/CardComponent.vue'
import HeroBar from '@/components/HeroBar.vue'

export default defineComponent({
  name: 'FormsView',
  components: {
    HeroBar,
    CardComponent,
    TitleBar
  },
  data () {
    return {
      titleStack: ['Admin', 'Render'],
      departments: ['Business Development', 'Marketing', 'Sales'],
      form: {
        name: null,
        email: null,
        phone: null,
        department: null,
        subject: null,
        question: null
      }
    }
  },
  methods: {
    formAction () {
      this.$buefy.snackbar.open({
        message: 'Demo only',
        queue: false
      })
    }
  }
})
</script>

<style>
textarea {
  font-size: 16px;
}
</style>
