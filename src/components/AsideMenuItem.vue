<template>
  <li :class="{ 'is-active': isDropdownActive }">
    <component
      :is="componentIs"
      :to="item.to"
      :href="item.href"
      :target="item.target"
      exact-active-class="is-active"
      :class="{ 'has-icon': !!item.icon, 'has-dropdown-icon': hasDropdown }"
      @click="menuClick"
    >
      <b-icon
        v-if="item.icon"
        :icon="item.icon"
        :class="{ 'has-update-mark': item.updateMark }"
        custom-size="default"
      />
      <span
        v-if="item.label"
        :class="{ 'menu-item-label': !!item.icon }"
      >{{
        item.label
      }}</span>
      <div
        v-if="hasDropdown"
        class="dropdown-icon"
      >
        <b-icon
          :icon="dropdownIcon"
          custom-size="default"
        />
      </div>
    </component>
    <aside-menu-list
      v-if="hasDropdown"
      :menu="item.menu"
      is-submenu-list
    />
  </li>
</template>

<script>
import { computed, ref } from '@vue/composition-api'

export default {
  name: 'AsideMenuItem',
  components: {
    AsideMenuList: () => import('@/components/AsideMenuList.vue')
  },
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  emits: ['menu-click'],
  setup (props, { emit }) {
    const componentIs = computed(() => props.item.to ? 'router-link' : 'a')

    const isDropdownActive = ref(false)

    const hasDropdown = computed(() => !!props.item.menu)

    const dropdownIcon = computed(() => isDropdownActive.value ? 'minus' : 'plus')

    const menuClick = () => {
      emit('menu-click', props.item)

      if (hasDropdown.value) {
        isDropdownActive.value = !isDropdownActive.value
      }
    }

    return {
      componentIs,
      isDropdownActive,
      hasDropdown,
      dropdownIcon,
      menuClick
    }
  }
}
</script>
