<template>
  <div class="feedback-container">
    <h2 class="title">@luzhongk/vue-feedback</h2>
    <div class="item">
      <button @click="showLoading" class="k-btn k-btn-primary">loading</button>
    </div>
    <hr>
    <div class="item">
      <input class="k-input" type="text" placeholder="请输入提示信息" v-model="text">
      <button @click="showToast" class="k-btn k-btn-primary">toast</button>
    </div>
  </div>
</template>

<script>
import 'kuan-css'
import { toast, loading } from '@packages/vue-feedback'

export default {
  name: 'feedback',
  data() {
    return {
      text: '提示信息'
    }
  },
  methods: {
    showLoading() {
      loading.show()
      setTimeout(() => {
        loading.hide()
      }, 1000)
    },
    showToast() {
      toast(this.text)
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
