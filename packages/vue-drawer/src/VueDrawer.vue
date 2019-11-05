<template>
  <div class="vue-drawer-container">
    <div class="vue-drawer-header">
      <toggle-bar v-model="active"/>
    </div>
    <drawer-box v-model="active"/>
  </div>
</template>

<script>
import ToggleBar from './ToggleBar.vue'
import DrawerBox from './DrawerBox.vue'

import './style.less'

export default {
  components: {
    ToggleBar,
    DrawerBox
  },
  data() {
    return {
      active: false
    }
  }
}
</script>
