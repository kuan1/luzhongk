<template>
  <div @click="toggleNav" class="nav-toggle-bar">
    <span class="nav-bar-item"></span>
    <span class="nav-bar-item"></span>
    <span class="nav-bar-item"></span>
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
