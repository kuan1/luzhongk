<template>
  <div class="vue-drawer-container">
    <div class="vue-drawer-header">
      <toggle-bar class="toggle-bar" v-model="active"/>
    </div>
  </div>
</template>

<script>
import ToggleBar from './ToggleBar.vue'

export default {
  components: {
    ToggleBar,
  },
  data() {
    return {
      active: false
    }
  }
}
</script>

<style lang="less" scoped>
@mobile-width: 768px;

.vue-drawer-header {
  height: 50px;
  padding: 0 20px;
  display: flex;
  align-items: center;
  color: rgba(255, 255, 255, 0.7);
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.12);
}

// 大屏幕
@media screen and (min-width: @mobile-width) {
  .toggle-bar {
    display: none;
  }
}
</style>
