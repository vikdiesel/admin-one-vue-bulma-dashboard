<template>
  <b-modal
    :active.sync="isModalActive"
    has-modal-card
  >
    <div class="modal-card">
      <header class="modal-card-head">
        <p class="modal-card-title">
          Confirm action
        </p>
        <button
          type="button"
          class="delete"
          @click="cancel"
        />
      </header>
      <section class="modal-card-body">
        <p>
          This will permanently delete <b>{{ trashObjectName }}</b>
        </p>
        <p>Action can not be undone.</p>
      </section>
      <footer class="modal-card-foot">
        <b-button
          native-type="button"
          type="is-danger"
          outlined
          @click="cancel"
        >
          Cancel
        </b-button>
        <b-button
          type="is-danger"
          @click="confirm"
        >
          Delete
        </b-button>
      </footer>
    </div>
  </b-modal>
</template>

<script>
import { computed } from '@vue/composition-api'

export default {
  name: 'ModalBox',
  props: {
    isActive: Boolean,
    trashObjectName: {
      type: String,
      default: null
    }
  },
  emits: ['cancel', 'confirm'],
  setup (props, { emit }) {
    const isModalActive = computed({
      get: () => props.isActive,
      set: value => {
        if (!value) {
          cancel()
        }
      }
    })

    const confirm = () => {
      emit('confirm')
    }

    const cancel = () => {
      emit('cancel')
    }

    return {
      isModalActive,
      confirm,
      cancel
    }
  }
}
</script>
