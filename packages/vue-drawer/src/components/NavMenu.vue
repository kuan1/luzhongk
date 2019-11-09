<template>
  <ul class="nav-ul">
    <li v-for="(item) in data" :key="item.name">
      <div
        class="link-wrap"
        :class="{
          'has-child': item.children && item.children.length, 
          active: activeName === item.name,
          open: childrenVisible(item)
        }"
      >
        <my-link
          class="my-link"
          :name="item.name"
          :to="item.to"
          :href="item.href"
          @click="handleClick(item)"
        >
          <img
            v-if="item.children && item.children.length"
            src="../images/arrow.svg"
            class="link-arrow"
          >
        </my-link>
      </div>
      <transition-view
        v-if="item.children && item.children.length"
        :visible="childrenVisible(item)"
        @toggle="toggleVisible(item)"
      >
        <nav-menu :data="item.children" :active="activeName" @click="childrenClick"></nav-menu>
      </transition-view>
    </li>
  </ul>
</template>

<script>
import MyLink from './MyLink.vue'
import TransitionView from './TransitionView.vue'

export default {
  name: 'NavMenu',
  model: {
    prop: 'active',
    event: 'click'
  },
  components: {
    MyLink,
    TransitionView
  },
  props: {
    data: {
      type: Array,
      default: () => []
    },
    active: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      activeName: this.active,
      collapse: [], // 展开name
    }
  },
  watch: {
    active(active) {
      this.activeName = active
    }
  },
  methods: {
    handleClick(item) {
      const { name } = item
      if (item.children && item.children.length) {
        this.toggleVisible(item)
      } else {
        this.childrenClick(name)
      }
    },
    childrenClick(name) {
      this.activeName = name
      this.$emit('click', name)
    },
    childrenVisible(item) {
      return this.collapse.includes(item.name)
    },
    toggleVisible(item) {
      const { name } = item
      if (this.collapse.includes(name)) {
        this.collapse = this.collapse.filter(item => item !== name)
      } else {
        this.collapse.push(name)
      }
    }
  }
}
</script>

<style>
</style>
