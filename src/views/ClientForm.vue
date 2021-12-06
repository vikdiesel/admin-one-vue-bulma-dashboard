<template>
  <div>
    <title-bar :title-stack="titleStack" />
    <hero-bar>
      {{ heroTitle }}
      <router-link
        slot="right"
        :to="heroRouterLinkTo"
        class="button"
      >
        {{ heroRouterLinkLabel }}
      </router-link>
    </hero-bar>
    <section class="section is-main-section">
      <notification class="is-info">
        <div>
          <span><b>Demo only.</b> No data will be saved/updated</span>
        </div>
      </notification>
      <tiles>
        <card-component
          :title="formCardTitle"
          icon="account-edit"
          class="tile is-child"
        >
          <form @submit.prevent="submit">
            <b-field
              label="ID"
              horizontal
            >
              <b-input
                v-model="form.id"
                custom-class="is-static"
                readonly
              />
            </b-field>
            <hr>
            <b-field
              label="Avatar"
              horizontal
            >
              <file-picker type="is-info" />
            </b-field>
            <hr>
            <b-field
              label="Name"
              message="Client name"
              horizontal
            >
              <b-input
                v-model="form.name"
                placeholder="e.g. John Doe"
                required
              />
            </b-field>
            <b-field
              label="Company"
              message="Client's company name"
              horizontal
            >
              <b-input
                v-model="form.company"
                placeholder="e.g. Berton & Steinway"
                required
              />
            </b-field>
            <b-field
              label="City"
              message="Client's city"
              horizontal
            >
              <b-input
                v-model="form.city"
                placeholder="e.g. Geoffreyton"
                required
              />
            </b-field>
            <b-field
              label="Created"
              horizontal
            >
              <b-datepicker
                v-model="form.created_date"
                placeholder="Click to select..."
                icon="calendar-today"
                @input="dateInput"
              />
            </b-field>
            <hr>
            <b-field
              label="Progress"
              horizontal
            >
              <b-slider
                v-model="form.progress"
                type="is-info"
              />
            </b-field>
            <hr>
            <b-field horizontal>
              <b-button
                type="is-info"
                :loading="isLoading"
                native-type="submit"
              >
                Submit
              </b-button>
            </b-field>
          </form>
        </card-component>
        <card-component
          v-if="isProfileExists"
          title="Client Profile"
          icon="account"
          class="tile is-child"
        >
          <user-avatar
            :avatar="form.avatar"
            class="image has-max-width is-aligned-center"
          />
          <hr>
          <b-field label="Name">
            <b-input
              :value="form.name"
              custom-class="is-static"
              readonly
            />
          </b-field>
          <b-field label="Company">
            <b-input
              :value="form.company"
              custom-class="is-static"
              readonly
            />
          </b-field>
          <b-field label="City">
            <b-input
              :value="form.city"
              custom-class="is-static"
              readonly
            />
          </b-field>
          <b-field label="Created">
            <b-input
              :value="createdReadable"
              custom-class="is-static"
              readonly
            />
          </b-field>
          <hr>
          <b-field label="Progress">
            <b-progress
              :value="form.progress"
              type="is-info"
              show-value
              format="percent"
            />
          </b-field>
        </card-component>
      </tiles>
    </section>
  </div>
</template>

<script>
import { useRouter } from '@/router'
import { useStore } from '@/store'
import { reactive, computed, ref, watch } from '@vue/composition-api'
import find from 'lodash/find'
import TitleBar from '@/components/TitleBar.vue'
import HeroBar from '@/components/HeroBar.vue'
import Tiles from '@/components/Tiles.vue'
import CardComponent from '@/components/CardComponent.vue'
import FilePicker from '@/components/FilePicker.vue'
import UserAvatar from '@/components/UserAvatar.vue'
import Notification from '@/components/Notification.vue'

export default {
  name: 'ClientForm',
  components: {
    UserAvatar,
    FilePicker,
    CardComponent,
    Tiles,
    HeroBar,
    TitleBar,
    Notification
  },
  props: {
    id: {
      type: [String, Number],
      default: null
    }
  },
  setup (props, { root: { $buefy } }) {
    const isProfileExists = ref(false)

    const titleStack = computed(() => ['Admin', 'Clients', isProfileExists.value ? form.name : 'New Client'])

    const heroTitle = computed(() => isProfileExists.value ? form.name : 'Create Client')

    const heroRouterLinkTo = computed(() => isProfileExists.value ? { name: 'client.new' } : { name: 'home' })

    const heroRouterLinkLabel = computed(() => isProfileExists.value ? 'New client' : 'Dashboard')

    const formCardTitle = computed(() => isProfileExists.value ? 'Edit client' : 'Create client')

    const form = reactive({
      id: null,
      name: null,
      company: null,
      city: null,
      created_date: new Date(),
      progress: 0
    })

    const createdReadable = ref(null)

    const store = useStore()

    const clients = computed(() => store.state.clients)

    const router = useRouter()

    const clientId = computed(() => props.id)

    const getData = () => {
      if (clientId.value) {
        const item = find(
          clients.value,
          (item) => item.id === parseInt(clientId.value)
        )

        if (item) {
          isProfileExists.value = true

          form.id = item.id
          form.name = item.name
          form.company = item.company
          form.city = item.city
          form.progress = item.progress
          form.created_date = new Date(item.created_mm_dd_yyyy)

          createdReadable.value = new Date(item.created_mm_dd_yyyy).toLocaleDateString()
        } else {
          router.push({ name: 'client.new' })
        }
      }
    }

    getData()

    watch(clientId, newValue => {
      isProfileExists.value = false

      if (!newValue) {
        form.id = null
        form.name = null
        form.company = null
        form.city = null
        form.created_date = new Date()
        createdReadable.value = new Date().toLocaleDateString()
      } else {
        getData()
      }
    })

    const dateInput = v => {
      createdReadable.value = new Date(v).toLocaleDateString()
    }

    const isLoading = ref(false)

    const submit = () => {
      isLoading.value = true

      setTimeout(() => {
        isLoading.value = false

        $buefy.snackbar.open({
          message: 'Demo only',
          queue: false
        })
      }, 750)
    }

    return {
      isProfileExists,
      titleStack,
      heroTitle,
      heroRouterLinkTo,
      heroRouterLinkLabel,
      formCardTitle,
      form,
      createdReadable,
      dateInput,
      isLoading,
      submit
    }
  }
}
</script>
