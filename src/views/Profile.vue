<template>
  <div>
    <title-bar :title-stack="titleStack"/>
    <hero-bar>
      Profile
      <router-link slot="right" to="/" class="button">
        Dashboard
      </router-link>
    </hero-bar>
    <section class="section is-main-section">
      <tiles>
        <profile-update-form class="tile is-child"/>
        <card-component title="Profile" icon="account" class="tile is-child">
          <div class="image is-user-avatar">
            <img :src="userAvatar" :alt="userName" class="is-rounded"/>
          </div>
          <hr>
          <b-field label="Name">
            <b-input :value="userName" custom-class="is-static" readonly/>
          </b-field>
          <hr>
          <b-field label="E-mail">
            <b-input :value="userEmail" custom-class="is-static" readonly/>
          </b-field>
        </card-component>
      </tiles>
      <password-update-form/>
    </section>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import CardComponent from '@/components/CardComponent'
import TitleBar from '@/components/TitleBar'
import HeroBar from '@/components/HeroBar'
import ProfileUpdateForm from '@/components/ProfileUpdateForm'
import PasswordUpdateForm from '@/components/PasswordUpdateForm'
import Tiles from '@/components/Tiles'
export default {
  name: 'Profile',
  components: { Tiles, PasswordUpdateForm, ProfileUpdateForm, HeroBar, TitleBar, CardComponent },
  computed: {
    titleStack () {
      return [
        'Admin',
        'Profile'
      ]
    },
    ...mapState([
      'userName',
      'userEmail',
      'userAvatar'
    ])
  }
}
</script>
