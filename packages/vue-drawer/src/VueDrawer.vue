<template>
  <div class="vue-drawer-outer">
    <header class="vue-drawer-header">
      <!-- 按钮 -->
      <toggle-bar @click="toggle" class="toggle-bar"/>
      <!-- 标题 -->
      <slot name="title">
        <span></span>
      </slot>
      <!-- 抽屉或者菜单 -->
      <div class="drawer-nav-container">
        <nav class="drawer-nav">
          <NavMenu :data="data" @click="menuClick" :active="active"/>
        </nav>
        <div @click="hideNav" @touchStart="hideNav" class="drawer-mask"></div>
      </div>
    </header>
  </div>
</template>

<script>
import { hideNav, showNav } from './utils'

import ToggleBar from './components/ToggleBar.vue'
import NavMenu from './components/NavMenu.vue'

import './styles/index.less'

export default {
  model: {
    prop: 'active',
    event: 'click'
  },
  components: {
    ToggleBar,
    NavMenu
  },
  props: {
    data: {
      type: Array,
      default: () => []
    },
    active: {
      type: String,
      default: ''
    },
    visible: {
      type: Boolean,
      default: false
    }
  },
  watch: {
    visible(visible) {
      if (visible) {
        this.showNav()
      } else {
        this.hideNav()
      }
    }
  },
  mounted() {
    if (this.visible) {
      this.showNav()
    }
  },
  beforeDestroy() {
    this.hideNav()
  },
  methods: {
    showNav() {
      showNav()
      this.$emit('update:visible', true)
    },
    hideNav() {
      hideNav()
      this.$emit('update:visible', false)
    },
    toggle() {
      if (this.visible) {
        this.hideNav()
      } else {
        this.showNav()
      }
    },
    menuClick(e) {
      this.$emit('click', e)
    }
  }
}
</script>
