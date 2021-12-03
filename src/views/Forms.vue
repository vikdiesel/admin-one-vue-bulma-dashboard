<template>
  <div>
    <title-bar :title-stack="titleStack" />
    <hero-bar>
      Forms
      <router-link
        slot="right"
        to="/"
        class="button"
      >
        Dashboard
      </router-link>
    </hero-bar>
    <section class="section is-main-section">
      <card-component
        title="Forms"
        icon="ballot"
      >
        <form @submit.prevent="formAction">
          <b-field
            label="From"
            horizontal
          >
            <b-field>
              <b-input
                v-model="form.name"
                icon="account"
                placeholder="Name"
                name="name"
                required
              />
            </b-field>
            <b-field>
              <b-input
                v-model="form.email"
                icon="email"
                type="email"
                placeholder="E-mail"
                name="email"
                required
              />
            </b-field>
          </b-field>
          <b-field
            message="Do not enter the leading zero"
            horizontal
          >
            <b-field>
              <p class="control">
                <a class="button is-static">
                  +44
                </a>
              </p>
              <b-input
                v-model="form.phone"
                type="tel"
                name="phone"
                expanded
              />
            </b-field>
          </b-field>
          <b-field
            label="Department"
            horizontal
          >
            <b-select
              v-model="form.department"
              placeholder="Select a department"
              required
            >
              <option
                v-for="(department, index) in departments"
                :key="index"
                :value="department"
              >
                {{ department }}
              </option>
            </b-select>
          </b-field>
          <hr>
          <b-field
            label="Subject"
            message="Message subject"
            horizontal
          >
            <b-input
              v-model="form.subject"
              placeholder="e.g. Partnership proposal"
              required
            />
          </b-field>
          <b-field
            label="Question"
            message="Your question. Max 255 characters"
            horizontal
          >
            <b-input
              v-model="form.question"
              type="textarea"
              placeholder="Explain how we can help you"
              maxlength="255"
              required
            />
          </b-field>
          <hr>
          <b-field horizontal>
            <b-field grouped>
              <div class="control">
                <b-button
                  native-type="submit"
                  type="is-primary"
                >
                  Submit
                </b-button>
              </div>
              <div class="control">
                <b-button
                  type="is-primary is-outlined"
                  @click.prevent="formAction"
                >
                  Reset
                </b-button>
              </div>
            </b-field>
          </b-field>
        </form>
      </card-component>
      <card-component
        title="Custom elements"
        icon="ballot-outline"
      >
        <b-field
          label="Checkbox"
          class="has-check"
          horizontal
        >
          <checkbox-radio-picker
            v-model="customElementsForm.checkbox"
            :options="{ lorem: 'Lorem', ipsum: 'Ipsum', dolore: 'Dolore' }"
            type="is-primary"
          />
        </b-field>
        <hr>
        <b-field
          label="Radio"
          class="has-check"
          horizontal
        >
          <checkbox-radio-picker
            v-model="customElementsForm.radio"
            :options="{ one: 'One', two: 'Two' }"
          />
        </b-field>
        <hr>
        <b-field
          label="Switch"
          horizontal
        >
          <b-switch v-model="customElementsForm.switch">
            Default
          </b-switch>
        </b-field>
        <hr>
        <b-field
          label="File"
          horizontal
        >
          <file-picker v-model="customElementsForm.file" />
        </b-field>
      </card-component>
    </section>
  </div>
</template>

<script>
import { reactive } from '@vue/composition-api'
import TitleBar from '@/components/TitleBar'
import CardComponent from '@/components/CardComponent'
import FilePicker from '@/components/FilePicker'
import HeroBar from '@/components/HeroBar'
import CheckboxRadioPicker from '@/components/CheckboxRadioPicker'

export default {
  name: 'Forms',
  components: {
    CheckboxRadioPicker,
    HeroBar,
    FilePicker,
    CardComponent,
    TitleBar
  },
  setup (props, { root: { $buefy } }) {
    const titleStack = ['Admin', 'Forms']

    const departments = ['Business Development', 'Marketing', 'Sales']

    const form = reactive({
      name: null,
      email: null,
      phone: null,
      department: null,
      subject: null,
      question: null
    })

    const customElementsForm = reactive({
      checkbox: ['lorem'],
      radio: 'one',
      switch: true,
      file: null
    })

    const formAction = () => {
      $buefy.snackbar.open({
        message: 'Demo only',
        queue: false
      })
    }

    return {
      titleStack,
      departments,
      form,
      customElementsForm,
      formAction
    }
  }
}
</script>
