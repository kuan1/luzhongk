<template>
  <div class="test-container">
    <h2 class="title">@luzhongk/vue-qrcode</h2>
    <mycode :url="url" />
    <div class="split-line"></div>
    <input class="k-input" type="text" v-model="url" />
  </div>
</template>

<script>
import Mycode from "@packages/vue-qrcode";

console.log(Mycode);

export default {
  components: {
    Mycode
  },
  data() {
    return {
      url: "https://www.baidu.com/"
    };
  }
};
</script>

<style lang="less" scoped>
@import "~kuan-css";
.test-container {
  max-width: 1000px;
  margin: 0 auto;
}
</style>
