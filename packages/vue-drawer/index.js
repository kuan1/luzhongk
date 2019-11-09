import VueDrawer from './src/VueDrawer.vue'

VueDrawer.install = Vue => {
  Vue.component('vue-drawer', VueDrawer)
}

export default VueDrawer
