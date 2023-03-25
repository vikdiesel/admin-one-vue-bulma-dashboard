<template>
  <div>
    <title-bar :title-stack="titleStack" />
    <hero-bar> Render </hero-bar>
    <section class="section is-main-section">
      <card-component title="Render" icon="ballot">
        <form method="POST" @submit.prevent="generate">
          <b-field label="Plantilla">
            <b-select v-model="selected" placeholder="Seleccionar plantilla" required>
              <option
                v-for="option in templates"
                :value="option.id"
                :key="option.id"
              >
                {{ option.title }}
              </option>
            </b-select>
          </b-field>
          <b-field label="Ingrese Formato JSON">
            <b-input type="textarea" v-model="text" required></b-input>
          </b-field>
          <div>
            <b-button
              size="is-medium"
              type="is-dark"
              style="margin: 15px 0px"
              :loading="isLoading"
              @click.prevent="generate"
            >
              Generar
            </b-button>
          </div>
        </form>
        <div></div>
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
      text: null,
      templates: [],
      isLoading: false,
      selected: null
    }
  },
  mounted () {
    this.getTemplates()
  },
  methods: {
    async getTemplates () {
      this.isLoading = true
      try {
        const res = await this.$store.dispatch('templates/getTemplates', {})
        console.log(res)
        this.templates = res
      } catch (error) {
        console.log(error)
      } finally {
        this.isLoading = false
      }
    },
    async generate () {
      if (this.selected === null) {
        this.$buefy.toast.open({
          message: 'Debe seleccionar una plantilla',
          type: 'is-danger'
        })
        return
      } else if (this.text === null) {
        this.$buefy.toast.open({
          message: 'Debe ingresar un formato JSON',
          type: 'is-danger'
        })
        return
      }
      this.isLoading = true
      try {
        const data = {
          template_id: this.selected,
          json_data: JSON.parse(this.text)
        }
        const res = await this.$store.dispatch('documents/generateDocument', data)
        console.log(res)
        window.open(res.data.file, '_blank')
      } catch (error) {
        console.log(error)
      } finally {
        this.isLoading = false
      }
    }
  }
})
</script>

<style>
textarea {
  font-size: 16px;
}
</style>
