import { useEffect, useState } from 'react'

import type { KommanderProps } from './kommander.model'
import { registerKommanderHotkey } from './adapters/hotkey'

import './kommander.styles.css'

export const Kommander = ({ title = 'Kommander' }: KommanderProps) => {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(
    () =>
      registerKommanderHotkey({
        enabled: true,
        onTrigger: () => setIsOpen(!isOpen)
      }),
    [isOpen]
  )

  if (!isOpen) return null

  return (
    <div role='dialog' aria-label={title}>
      <h2>{title}</h2>
    </div>
  )
}
