function isFormField(target) {
  if (!target || typeof target.closest !== 'function') return false
  return Boolean(target.closest('input, textarea, select, [contenteditable="true"]'))
}

function blockEvent(event) {
  if (isFormField(event.target)) return
  event.preventDefault()
  event.stopPropagation()
  return false
}

function isInspectShortcut(event) {
  const key = event.key
  const lower = key.toLowerCase()
  const ctrl = event.ctrlKey || event.metaKey

  if (key === 'F12') return true
  if (ctrl && event.shiftKey && ['i', 'j', 'c', 'k'].includes(lower)) return true
  if (ctrl && ['u', 's'].includes(lower)) return true
  if (ctrl && ['c', 'x', 'a'].includes(lower) && !isFormField(event.target)) return true
  return false
}

function ensureLockScreen() {
  if (document.querySelector('.inspection-lock-screen')) return
  const screen = document.createElement('div')
  screen.className = 'inspection-lock-screen'
  screen.setAttribute('role', 'alert')
  screen.innerHTML = '<div><h1>Viewing is restricted</h1><p>Page inspection and copying are not allowed.</p></div>'
  document.body.appendChild(screen)
}

function setInspectionLock(active) {
  ensureLockScreen()
  document.documentElement.classList.toggle('inspection-locked', active)
}

function watchDevTools() {
  const threshold = 180
  let locked = false

  const check = () => {
    const widthGap = window.outerWidth - window.innerWidth > threshold
    const heightGap = window.outerHeight - window.innerHeight > threshold
    const next = widthGap || heightGap
    if (next !== locked) {
      locked = next
      setInspectionLock(locked)
    }
  }

  check()
  window.setInterval(check, 800)
  window.addEventListener('resize', check)
}

export function enableContentGuard() {
  document.addEventListener('contextmenu', blockEvent, true)
  document.addEventListener('copy', blockEvent, true)
  document.addEventListener('cut', blockEvent, true)
  document.addEventListener('selectstart', blockEvent, true)
  document.addEventListener('dragstart', blockEvent, true)

  document.addEventListener(
    'keydown',
    (event) => {
      if (!isInspectShortcut(event)) return
      event.preventDefault()
      event.stopPropagation()
      return false
    },
    true,
  )

  watchDevTools()
}
