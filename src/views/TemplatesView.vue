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
        <b-upload v-model="file" class="file-label" accept=".docx, .odt">
          <span class="file-cta has-text-right">
            <b-icon class="file-icon" icon="upload"></b-icon>
            <span class="file-label">Subir tu plantilla</span>
          </span>
          <span class="file-name" v-if="file">
            {{ file.name }}
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
            default-sort="name"
            striped
            hoverable
          >
            <b-table-column v-slot="props" label="Nombre de la Plantilla" field="name_template" sortable>
              {{ props.row.name_template }}
            </b-table-column>
            <b-table-column
              v-slot="props"
              label="Fecha"
              field="date"
              sortable
            >
              {{ props.row.date }}
            </b-table-column>
            <b-table-column v-slot="props" label="Tamaño" field="size" sortable>
              {{ props.row.size }}
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
    return (
      {
        titleStack: ['Admin', 'Plantillas'],
        isModalActive: false,
        trashObject: null
      },
      {
        data: [
          {
            id: 1,
            name_template: 'CyberInsuranceCertificateTemplate',
            date: '2016-10-15 13:43:27',
            size: '131 KB'
          },
          {
            id: 2,
            name_template: 'CertificateTemplate',
            date: '2016-12-15 06:00:53',
            size: '141 KB'
          },
          {
            id: 3,
            name_template: 'ExampleTemplate',
            date: '2016-04-26 06:26:28',
            size: '231 KB'
          }
        ]
      }
    )
  },
  methods: {
    trashModalOpen (obj) {
      console.log('delete')
      this.trashObject = obj
      this.isModalActive = true
    },
    trashConfirm () {
      this.isModalActive = false

      this.$buefy.snackbar.open({
        message: 'Confirmed',
        queue: false
      })
    },
    trashCancel () {
      this.isModalActive = false
    }
  }
})
</script>
