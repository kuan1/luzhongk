<template>
  <div class="feedback-container">
    <h2 class="title">@luzhongk/vue-request</h2>
    <div class="item">
      <button @click="test" class="k-btn k-btn-primary">test</button>
    </div>
  </div>
</template>

<script>
import 'kuan-css'
import { createApi } from '@packages/vue-request'
const request = createApi()

export default {
  name: 'request',
  data() {
    return {
      text: '提示信息'
    }
  },
  methods: {
    async test() {
      const data = await request({
        url: 'https://www.luzhongkuan.cn/api/blog/article/218'
      })
      console.log(data)
    }
  }
}
</script>

<style scoped lang="less">
.feedback-container {
  max-width: 800px;
  padding: 100px;
  margin: 0 auto;
}
.title {
  margin-bottom: 50px;
}
.item {
  padding-bottom: 30px;
}
</style>
