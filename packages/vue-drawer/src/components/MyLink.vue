<template>
  <a v-if="href" :href="href" @click="handleClick">
    {{name}}
    <slot></slot>
  </a>
  <router-link v-else-if="to.name || to.path" :to="to" @click.native="handleClick">
    {{name}}
    <slot></slot>
  </router-link>
  <span v-else @click="handleClick">
    {{name}}
    <slot></slot>
  </span>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: ''
    },
    href: {
      type: String,
      default: ''
    },
    to: {
      type: Object,
      default: () => ({})
    }
  },
  methods: {
    handleClick() {
      this.$emit('click')
    }
  }
}
</script>

<style>
</style>
