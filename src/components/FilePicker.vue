<template>
  <div class="jb-file-picker">
    <label class="jb-file-picker-label">
      <jb-button
        as="a"
        label="Upload"
        :icon="mdiUpload"
        color="info"
        :class="{ 'has-sibling-right': file }"
      />
      <input
        type="file"
        ref="input"
        class="jb-file-picker-input"
        :accept="accept"
        @input="upload">
    </label>
    <div v-if="file">
      <span class="jb-file-picker-file-name">{{ file.name }}</span>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import { mdiUpload } from '@mdi/js'
import JbButton from '@/components/JbButton'

export default {
  name: 'FilePicker',
  components: {
    JbButton
  },
  props: {
    modelValue: [Object, File, Array],
    label: String,
    icon: String,
    accept: {
      type: String,
      default: null
    }
  },
  emits: ['update:modelValue'],
  setup (props) {
    const file = ref(props.modelValue)

    return {
      file,
      mdiUpload
    }
  },
  methods: {
    upload (event) {
      const value = event.target.files || event.dataTransfer.files

      this.file = value[0]
      this.$emit('update:modelValue', this.file)

      // Use this as an example for handling file uploads
      // let formData = new FormData()
      // formData.append('file', this.file)

      // axios
      //   .post(window.routeMediaStore, formData, {
      //     headers: {
      //       'Content-Type': 'multipart/form-data'
      //     },
      //     onUploadProgress: this.progressEvent
      //   })
      //   .then(r => {
      //
      //   })
      //   .catch(err => {
      //
      //   })
    }//,
    // progressEvent (progressEvent) {
    //   this.uploadPercent = Math.round(
    //     (progressEvent.loaded * 100) / progressEvent.total
    //   )
    // }
  },
  watch: {
    modelValue (value) {
      this.file = value

      if (!value) {
        this.$refs.input.value = null
      }
    }
  }
}
</script>
