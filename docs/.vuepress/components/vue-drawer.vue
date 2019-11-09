<template>
  <div>
    <vue-drawer>
      <template #title>
        <h1 class="title">
          <a href="https://www.luzhongkuan.cn/">Kuan's Blog</a>
        </h1>
      </template>
    </vue-drawer>
  </div>
</template>

<script>
import { VueDrawer } from '@packages/vue/index'

export default {
  components: {
    VueDrawer
  }
}
</script>

<style lang="less" scoped>
.title {
  font-size: 16px;
}
</style>
