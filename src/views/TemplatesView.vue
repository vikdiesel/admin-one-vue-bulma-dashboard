<template>
  <div>
    <modal-box
      :is-active="isModalActive"
      :trash-object-name="trashObject ? trashObject.name_template : null"
      @confirm="trashConfirm"
      @cancel="trashCancel"
    />
    <title-bar :title-stack="titleStack" />
    <hero-bar>
      Plantillas<b-field slot="right" class="file is-primary has-addons-right">
        <b-upload
          v-model="file"
          class="file-label"
          accept=".docx"
          :loading="isLoading"
          @input="uploadTemplate"
        >
          <span class="file-cta has-text-right">
            <b-icon class="file-icon" icon="upload"></b-icon>
            <span class="file-label">Subir tu plantilla</span>
          </span>
        </b-upload>
      </b-field>
    </hero-bar>
    <section class="section is-main-section">
      <card-component title="Plantillas">
        <div>
          <b-table
            :checked-rows.sync="checkedRows"
            :checkable="checkable"
            :paginated="paginated"
            :per-page="perPage"
            :data="data"
            :selected.sync="selected"
            :loading="isLoading"
            striped
            hoverable
          >
            <b-table-column
              v-slot="props"
              label="Nombre de la Plantilla"
              field="title"
            >
              {{ props.row.title }}
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
        <!-- <div>
          <div>
            <router-link
              :to="{
                name: 'render',
                params: {
                  data: { selected }
                }
              }"
            >
              <b-button
                size="is-medium"
                type="is-dark"
                style="margin: 15px 0px"
              >
                Renderizar
              </b-button>
            </router-link>
          </div>
        </div> -->
      </card-component>
    </section>
    <section class="section is-main-section"></section>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import TitleBar from '@/components/TitleBar.vue'
import CardComponent from '@/components/CardComponent.vue'
import HeroBar from '@/components/HeroBar.vue'
import ModalBox from '@/components/ModalBox.vue'

export default defineComponent({
  name: 'TablesView',
  components: {
    HeroBar,
    CardComponent,
    TitleBar,
    ModalBox
  },
  data () {
    return {
      titleStack: ['Admin', 'Plantillas'],
      isModalActive: false,
      trashObject: null,
      data: [],
      isLoading: false
    }
  },
  mounted () {
    this.getData()
  },
  methods: {
    async getData () {
      this.isLoading = true
      try {
        const res = await this.$store.dispatch('templates/getTemplates', {})
        console.log(res)
        this.data = res
      } catch (error) {
        console.log(error)
      } finally {
        this.isLoading = false
      }
    },
    async uploadTemplate (file) {
      this.isLoading = true
      const data = {
        file: file,
        title: file.name,
        description: file.name
      }
      try {
        const formData = new FormData()
        formData.append('file', data.file)
        formData.append('title', data.title)
        formData.append('description', data.description)
        await this.$store.dispatch('templates/uploadTemplate', formData)
        this.$buefy.snackbar.open({
          duration: 5000,
          message: 'Plantilla subida correctamente',
          type: 'is-success',
          queue: false
        })
        this.getData()
      } catch (error) {
        console.log(error)
        this.$buefy.snackbar.open({
          duration: 5000,
          message: 'Error al subir plantilla',
          type: 'is-danger',
          queue: false
        })
      } finally {
        this.file = null
        this.isLoading = false
      }
    },
    trash (id) {
      this.$buefy.dialog.confirm({
        title: 'Eliminar plantilla',
        message:
          'Seguro que quieres eliminar esta plantilla? <b>Esta acción no se puede deshacer</b>',
        confirmText: 'Eliminar',
        cancelText: 'Cancelar',
        type: 'is-danger',
        hasIcon: true,
        onConfirm: async () => {
          this.isLoading = true
          await this.$store.dispatch('templates/deleteTemplate', id)
          this.$buefy.snackbar.open({
            duration: 5000,
            message: 'Plantilla eliminada correctamente',
            type: 'is-success',
            queue: false
          })
          this.getData()
          this.isLoading = false
        }
      })
    }
  }
})
</script>
