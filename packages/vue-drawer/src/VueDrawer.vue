<template>
  <div>
    <header class="vue-drawer-header">
      <toggle-bar class="toggle-bar"/>
      <slot name="title">
        <span></span>
      </slot>
    </header>
    <drawer-nav/>
  </div>
</template>

<script>
import ToggleBar from './ToggleBar.vue'
import DrawerNav from './DrawerNav.vue'

import './styles/index.less'

export default {
  components: {
    ToggleBar,
    DrawerNav
  },
  data() {
    return {}
  }
}
</script>
