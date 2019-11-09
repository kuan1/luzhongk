<template>
  <div class="drawer-nav-container">
    <nav class="drawer-nav">
      <span>导航</span>
      <span>导航</span>
      <span>导航</span>
      <span>导航</span>
    </nav>
    <div @click="toggleNav" class="drawer-mask"></div>
  </div>
</template>

<script>
import toggleNav from './utils/toggleNav.js'

export default {
  methods: {
    toggleNav
  }
}
</script>
