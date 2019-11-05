import Qrcode from './src/Qrcode.vue'

Qrcode.install = Vue => {
  Vue.component('qrcode', Qrcode)
}

export default Qrcode
