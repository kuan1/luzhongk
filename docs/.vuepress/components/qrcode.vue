<template>
  <div class="test-container">
    <h2>@luzhongk/vue-qrcode</h2>
    <div>
      <qrcode :url="url"/>
    </div>
    <input class="k-btn" type="text" v-model="url">
  </div>
</template>

<script>
import Qrcode from '@packages/vue-qrcode'

export default {
  components: {
    Qrcode
  },
  data() {
    return {
      url: "https://www.baidu.com/"
    }
  }
}
</script>

<style lang="less" scoped>
@import '~kuan-css';
.test-container {
  max-width: 1000px;
  margin: 0 auto;
}
.k-input {
  text-align: left;
}
</style>