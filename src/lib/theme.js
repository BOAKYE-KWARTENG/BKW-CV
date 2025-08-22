export function useTheme() {
  const set = (mode) => {
    const root = document.documentElement
    if (mode === 'dark') root.classList.add('dark')
    else root.classList.remove('dark')
    localStorage.setItem('theme', mode)
  }
  const init = () => {
    const stored = localStorage.getItem('theme')
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    set(stored ?? (prefersDark ? 'dark' : 'light'))
  }
  return { set, init }
}
