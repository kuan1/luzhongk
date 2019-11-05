import VueDrawer from './src/VueDrawer.vue'

VueDrawer.install = Vue => {
  Vue.component('vue-dialog', VueDrawer)
}

export default VueDrawer
