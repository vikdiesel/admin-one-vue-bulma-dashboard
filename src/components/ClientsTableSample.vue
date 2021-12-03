<template>
  <div>
    <modal-box
      :is-active="isModalActive"
      :trash-object-name="trashObject ? trashObject.name : null "
      @confirm="trashConfirm"
      @cancel="trashCancel"
    />
    <b-table
      :checked-rows.sync="checkedRows"
      :checkable="checkable"
      :paginated="paginated"
      :per-page="perPage"
      :data="clients"
      default-sort="name"
      striped
      hoverable
    >
      <b-table-column
        v-slot="props"
        cell-class="has-no-head-mobile is-image-cell"
      >
        <div class="image">
          <img
            :src="props.row.avatar"
            class="is-rounded"
          >
        </div>
      </b-table-column>
      <b-table-column
        v-slot="props"
        label="Name"
        field="name"
        sortable
      >
        {{ props.row.name }}
      </b-table-column>
      <b-table-column
        v-slot="props"
        label="Company"
        field="company"
        sortable
      >
        {{ props.row.company }}
      </b-table-column>
      <b-table-column
        v-slot="props"
        label="City"
        field="city"
        sortable
      >
        {{ props.row.city }}
      </b-table-column>
      <b-table-column
        v-slot="props"
        cell-class="is-progress-col"
        label="Progress"
        field="progress"
        sortable
      >
        <progress
          class="progress is-small is-primary"
          :value="props.row.progress"
          max="100"
        >
          {{ props.row.progress }}
        </progress>
      </b-table-column>
      <b-table-column
        v-slot="props"
        label="Created"
      >
        <small
          class="has-text-grey is-abbr-like"
          :title="props.row.created"
        >{{ props.row.created }}</small>
      </b-table-column>
      <b-table-column
        v-slot="props"
        custom-key="actions"
        cell-class="is-actions-cell"
      >
        <div class="buttons is-right no-wrap">
          <router-link
            :to="{name:'client.edit', params: {id: props.row.id}}"
            class="button is-small is-primary"
          >
            <b-icon
              icon="account-edit"
              size="is-small"
            />
          </router-link>
          <button
            class="button is-small is-danger"
            type="button"
            @click.prevent="trashModalOpen(props.row)"
          >
            <b-icon
              icon="trash-can"
              size="is-small"
            />
          </button>
        </div>
      </b-table-column>

      <section
        slot="empty"
        class="section"
      >
        <div class="content has-text-grey has-text-centered">
          <p>
            <b-icon
              icon="emoticon-sad"
              size="is-large"
            />
          </p>
          <p>Nothing's here&hellip;</p>
        </div>
      </section>
    </b-table>
  </div>
</template>

<script>
import { computed, ref } from '@vue/composition-api'
import { useStore } from '@/store'
import ModalBox from '@/components/ModalBox'

export default {
  name: 'ClientsTableSample',
  components: { ModalBox },
  props: {
    checkable: Boolean,
    isEmpty: Boolean
  },
  setup (props, { root: { $buefy } }) {
    const store = useStore()

    const clients = computed(() => props.isEmpty ? [] : store.state.clients)

    const perPage = ref(10)

    const paginated = computed(() => clients.value.length > perPage.value)

    const checkedRows = ref([])

    const isModalActive = ref(false)

    const trashObject = ref(null)

    const trashModalOpen = obj => {
      trashObject.value = obj
      isModalActive.value = true
    }

    const trashConfirm = () => {
      isModalActive.value = false

      $buefy.snackbar.open({
        message: 'Confirmed',
        queue: false
      })
    }

    const trashCancel = () => {
      isModalActive.value = false
    }

    return {
      clients,
      perPage,
      paginated,
      checkedRows,
      isModalActive,
      trashObject,
      trashModalOpen,
      trashConfirm,
      trashCancel
    }
  }
}
</script>
