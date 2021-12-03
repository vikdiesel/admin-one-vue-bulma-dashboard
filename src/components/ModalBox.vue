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
      </header>
      <section class="modal-card-body">
        <p>
          This will permanently delete <b>{{ trashObjectName }}</b>
        </p>
        <p>Action can not be undone.</p>
      </section>
      <footer class="modal-card-foot">
        <button
          class="button"
          type="button"
          @click="cancel"
        >
          Cancel
        </button>
        <button
          class="button is-danger"
          @click="confirm"
        >
          Delete
        </button>
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
