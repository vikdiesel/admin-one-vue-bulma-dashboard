<template>
  <section class="section is-title-bar">
    <div class="level">
      <div class="level-left">
        <div class="level-item">
          <ul>
            <li
              v-for="(title, index) in titleStack"
              :key="index"
            >
              {{ title }}
            </li>
          </ul>
        </div>
      </div>
      <div class="level-right">
        <div class="level-item">
          <div class="buttons is-right">
            <a
              href="https://github.com/vikdiesel/admin-one-vue-bulma-dashboard"
              target="_blank"
              class="button is-info"
            >
              <b-icon
                icon="github-circle"
                custom-size="default"
              />
              <span>Star on GitHub</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'TitleBar',
  props: {
    titleStack: {
      type: Array,
      default: () => []
    }
  }
}
</script>
