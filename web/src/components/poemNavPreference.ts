const STORAGE_KEY = 'poem-nav-open'

export function getPoemNavOpen(): boolean | null {
  if (typeof localStorage === 'undefined') return null
  const stored = localStorage.getItem(STORAGE_KEY)
  if (stored === 'true') return true
  if (stored === 'false') return false
  return null
}

export function setPoemNavOpen(open: boolean) {
  if (typeof localStorage === 'undefined') return
  localStorage.setItem(STORAGE_KEY, String(open))
}
