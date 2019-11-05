<template>
  <div class="test-container">
    <h2 class="title">@luzhongk/vue-dialog</h2>
    <button @click="visible = true" class="k-btn k-btn-primary">显示</button>
    <vue-dialog v-model="visible">
      <div class="test-inner"></div>
    </vue-dialog>
  </div>
</template>

<script>
import 'kuan-css'
import VueDialog from '@packages/vue-dialog'

export default {
  components: {
    VueDialog
  },
  data() {
    return {
      visible: false
    }
  }
}
</script>

<style lang="less" scoped>
.test-inner {
  width: 200px;
  height: 200px;
  background: white;
}
</style>
