<template>
  <div :class="{active: active}" @click="handleClick" class="nav-toggle-bar">
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
  methods: {
    handleClick() {
      this.$emit('click', !this.active)
    }
  }
}
</script>

<style lang="less" scoped>
@font-color: #333;
@toggle-bar-height: 16px;

.nav-toggle-bar {
  width: @toggle-bar-height + 4px;
  height: @toggle-bar-height;
  position: relative;
  opacity: 0.6;
  cursor: pointer;
  &.active .nav-bar-item {
    &:nth-child(1) {
      transform: rotate(45deg);
    }
    &:nth-child(2) {
      opacity: 0;
    }
    &:nth-child(3) {
      transform: rotate(-45deg);
    }
  }
  .nav-bar-item {
    background: @font-color;
    position: absolute;
    left: 0;
    width: 100%;
    height: 2px;
    transition: 0.4s;
    transform-origin: 0;
    border-radius: 2px;
    transform: rotate(0);
    opacity: 1;
    &:nth-child(1) {
      top: 0;
    }
    &:nth-child(2) {
      top: (@toggle-bar-height - 2px) / 2;
    }
    &:nth-child(3) {
      top: @toggle-bar-height - 2px;
    }
  }
}
</style>

