<template>
  <div>
    <ClientOnly>
      <components v-if="is" :is="is"></components>
    </ClientOnly>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      is: ""
    };
  },
  mounted() {
    import("./vue-qrcode").then(module => {
      console.log(module);
      this.is = module.default;
    });
  }
};
</script>

<style></style>
