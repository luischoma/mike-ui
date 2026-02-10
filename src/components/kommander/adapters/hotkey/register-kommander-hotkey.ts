import type { RegisterKommanderHotkeyOptions } from './register-kommander-hotkey.model'

const noop = () => {}

export const registerKommanderHotkey = ({
  enabled,
  onTrigger,
  preventDefault = true
}: RegisterKommanderHotkeyOptions): (() => void) => {
  if (!enabled) return noop

  const handler = (event: KeyboardEvent) => {
    const isHotkeyMatch = event.key.toLowerCase() === 'k' && (event.metaKey || event.ctrlKey)

    if (!isHotkeyMatch) return

    if (preventDefault) event.preventDefault()

    onTrigger()
  }

  window.addEventListener('keydown', handler)

  return () => window.removeEventListener('keydown', handler)
}
