<template>
  <div v-if="visible" @click="close" class="my-dialog-container">
    <div @click.stop class="my-dialog-inner">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  model: {
    prop: 'visible',
    event: 'close'
  },
  props: {
    visible: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    close() {
      this.$emit('close', false)
    }
  }
}
</script>

<style lang="less" scoped>
.my-dialog-container {
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2000;
  display: flex;
  align-items: center;
  justify-content: center;
}
@keyframes fadeInScale {
}
</style>
