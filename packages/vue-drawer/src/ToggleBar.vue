<template>
  <div :class="{active: dataActive}" @click="handleClick" class="nav-toggle-bar">
    <span class="nav-bar-item"></span>
    <span class="nav-bar-item"></span>
    <span class="nav-bar-item"></span>
  </div>
</template>

<script>
export default {
  model: {
    prop: 'active',
    event: 'click'
  },
  props: {
    active: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      dataActive: this.active
    }
  },
  watch: {
    active(active) {
      this.dataActive = active
    }
  },
  methods: {
    handleClick() {
      this.dataActive = !this.dataActive
      this.$emit('click', this.dataActive)
    }
  }
}
</script>
