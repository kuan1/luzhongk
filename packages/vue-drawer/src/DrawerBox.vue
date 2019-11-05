<template>
  <div @click="handleClick" :class="{active: active}" class="drawer-box">
    <div @click.stop class="drawer-inner"></div>
  </div>
</template>

<script>
const className = 'nav-toggle-active'

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
  watch: {
    active(active) {
      if (active) {
        document.body.classList.add(className)
      } else {
        document.body.classList.remove(className)
      }
    }
  },
  methods: {
    handleClick() {
      this.$emit('click', !this.active)
    }
  }
}
</script>

