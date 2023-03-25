<template>
  <div>
    <title-bar :title-stack="titleStack" />
    <hero-bar> Documentos generados </hero-bar>
    <section class="section is-main-section">
      <card-component title="Documentos" icon="ballot">
        <form>
          <b-field label="Plantilla">
            <b-select
              v-model="selected"
              :loading="isLoading"
              placeholder="Seleccionar plantilla"
              required
              @input="getDocuments()"
            >
              <option
                v-for="option in templates"
                :value="option.id"
                :key="option.id"
              >
                {{ option.title }}
              </option>
            </b-select>
          </b-field>
        </form>
        <br />
        <div>
          <b-table :data="docs" :loading="isLoading" striped hoverable>
            <b-table-column
              v-slot="props"
              label="Nombre de la Plantilla"
              field="title"
            >
              <a :href="props.row.file" target="_blank">{{
                props.row.title
              }}</a>
            </b-table-column>
            <b-table-column v-slot="props" label="Fecha" field="date">
              {{ props.row.created_at | formatDate }}
            </b-table-column>
            <b-table-column v-slot="props" label="Tamaño" field="size">
              {{ props.row.size }}
            </b-table-column>
            <b-table-column
              v-slot="props"
              label="Acciones"
              field="size"
              centered
            >
              <b-button
                size="is-small"
                type="is-danger"
                @click="trash(props.row.id)"
              >
                <b-icon icon="trash-can" size="is-small"></b-icon>
              </b-button>
            </b-table-column>

            <section slot="empty" class="section">
              <div class="content has-text-grey has-text-centered">
                <p>
                  <b-icon icon="emoticon-sad" size="is-large" />
                </p>
                <p>Nothing's here&hellip;</p>
              </div>
            </section>
          </b-table>
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
      titleStack: ['Admin', 'Documentos'],
      text: null,
      docs: [],
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
    async getDocuments () {
      this.docs = []
      this.isLoading = true
      try {
        const res = await this.$store.dispatch('documents/getDocuments', {
          template_id: this.selected
        })
        console.log(res)
        this.docs = res
      } catch (error) {
        console.log(error)
      } finally {
        this.isLoading = false
      }
    },
    trash (id) {
      this.$buefy.dialog.confirm({
        title: 'Eliminar documento',
        message:
          'Seguro que quieres eliminar este documento? <b>Esta acción no se puede deshacer</b>',
        confirmText: 'Eliminar',
        cancelText: 'Cancelar',
        type: 'is-danger',
        hasIcon: true,
        onConfirm: async () => {
          this.isLoading = true
          await this.$store.dispatch('documents/deleteDocument', id)
          this.$buefy.snackbar.open({
            duration: 5000,
            message: 'Documento eliminado correctamente',
            type: 'is-success',
            queue: false
          })
          this.getDocuments()
          this.isLoading = false
        }
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
