import Toast from '../components/Toast.vue'
import Monitor from './VueMonitor'

let monitor
let timer

function toast(text, time = 2000) {
  if (!monitor) {
    monitor = new Monitor(Toast)
  }
  monitor.show(text)
  if (timer) clearTimeout(timer)
  timer = setTimeout(() => {
    monitor.hide()
  }, time)
}

export default toast
