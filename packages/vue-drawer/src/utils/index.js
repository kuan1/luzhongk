const name = 'vue-drawer-collapse'

export function toggleNav() {
  document.body.classList.toggle(name)
}

export function showNav() {
  document.body.classList.add(name)
}

export function hideNav() {
  document.body.classList.remove(name)
}
