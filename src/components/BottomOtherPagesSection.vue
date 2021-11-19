<template>
  <titled-section last>
    <h1 class="jb-bottom-section-text is-github-line">
        <span class="is-github-line-prefix-label">Please star this project on</span>
        <a
          href="https://github.com/vikdiesel/admin-one-vue-bulma-dashboard"
          class="is-github-line-link"
          target="_blank"
        >
          <icon :path="mdiGithub" size="36" />
          <span>GitHub</span>
        </a>
    </h1>
    <h1 class="jb-bottom-section-text">
      Check out other components and layouts at<br>
      <template v-for="(screen, index) in screens" :key="screen.path">
        <router-link
          :to="screen.path"
        >{{ screen.title }}</router-link>
        <template v-if="index + 1 < screens.length">, </template>
      </template>
      <br>
      screen samples
    </h1>
    <h1 class="jb-bottom-section-text">
      Get more with <a href="https://justboil.me/bulma-admin-template/one/" target="_blank">Premium version</a>
    </h1>
  </titled-section>
</template>

<script>
import { useRouter } from 'vue-router'
import { mdiGithub } from '@mdi/js'
import TitledSection from '@/components/TitledSection'
import Icon from '@/components/Icon'

export default {
  name: 'BottomOtherPagesSection',
  components: {
    TitledSection,
    Icon
  },
  setup () {
    const router = useRouter()

    const routes = router.getRoutes()

    const screens = []

    for (const routeIndex in routes) {
      const path = routes[routeIndex].path
      const title = routes[routeIndex].meta && routes[routeIndex].meta.title ? routes[routeIndex].meta.title : null

      if (title) {
        screens.push({
          path,
          title
        })
      }
    }

    return {
      screens,
      mdiGithub
    }
  }
}
</script>
