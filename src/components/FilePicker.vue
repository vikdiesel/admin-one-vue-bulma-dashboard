<template>
  <b-field
    class="file"
  >
    <b-upload
      v-model="file"
      :accept="accept"
      @input="upload"
    >
      <a
        class="button"
        :class="type"
      >
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
export default {
  name: 'FilePicker',
  props: {
    accept: {
      type: String,
      default: null
    },
    type: {
      type: String,
      default: 'is-primary'
    }
  },
  emits: ['input'],
  data () {
    return {
      file: null
      // uploadPercent: 0
    }
  },
  computed: {
    buttonLabel () {
      return this.file ? 'Pick another file' : 'Pick a file'
    }
  },
  methods: {
    upload (value) {
      this.file = value

      this.$emit('input', value)

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
    // progressEvent (progressEvent) {
    //   this.uploadPercent = Math.round(
    //     (progressEvent.loaded * 100) / progressEvent.total
    //   )
    // }
  }
}
</script>
