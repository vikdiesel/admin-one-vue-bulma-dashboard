<template>
  <b-field class="file">
    <b-upload
      v-model="file"
      :accept="accept"
      @input="upload"
    >
      <a class="button is-primary">
        <b-icon
          icon="upload"
          custom-size="default"
        />
        <span>{{ buttonLabel }}</span>
      </a>
    </b-upload>
    <span
      v-if="file"
      class="file-name"
    >{{ file.name }}</span>
  </b-field>
</template>

<script>
import { computed, ref } from '@vue/composition-api'

export default {
  name: 'FilePicker',
  props: {
    accept: {
      type: String,
      default: null
    }
  },
  emits: ['input'],
  setup (props, { emit }) {
    const buttonLabel = computed(() => file.value ? 'Pick another file' : 'Pick a file')

    const file = ref(null)

    const upload = value => {
      file.value = value

      emit('input', value)

      // Use this as an example for handling file uploads
      // let formData = new FormData()
      // formData.append('file', file.value)

      // const mediaStoreRoute = `/your-route/`

      // axios
      //   .post(mediaStoreRoute, formData, {
      //     headers: {
      //       'Content-Type': 'multipart/form-data'
      //     },
      //     onUploadProgress: progressEvent
      //   })
      //   .then(r => {
      //
      //   })
      //   .catch(err => {
      //
      //   })
    }

    // const uploadPercent = ref(0)
    //
    // const progressEvent = progressEvent => {
    //   uploadPercent.value = Math.round(
    //     (progressEvent.loaded * 100) / progressEvent.total
    //   )
    // }

    return {
      buttonLabel,
      file,
      upload
    }
  }
}
</script>
