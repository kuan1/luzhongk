import Vue from 'vue'
import Loading from './index.vue'

const Instance = Vue.extend(Loading)

let loading

function show(tips) {
  if (typeof window === 'undefined') return
  if (!loading) {
    loading = new Instance({
      el: document.createElement('div')
    })
    document.body.appendChild(loading.$el)
  }
  Vue.nextTick(() => {
    loading.tips = tips
    loading.show()
  })
}

function hide() {
  if (!loading) return
  Vue.nextTick(() => {
    loading.hide()
  })
}

export default {
  show,
  hide
}
