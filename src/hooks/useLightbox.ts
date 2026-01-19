'use client'

import { useState, useEffect, useCallback } from 'react'

export function useLightbox<T>() {
  const [selectedItem, setSelectedItem] = useState<T | null>(null)

  const open = useCallback((item: T) => setSelectedItem(item), [])
  const close = useCallback(() => setSelectedItem(null), [])
  const isOpen = selectedItem !== null

  useEffect(() => {
    if (!isOpen) return

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close()
    }

    document.addEventListener('keydown', handleKeyDown)
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = 'unset'
    }
  }, [isOpen, close])

  return { selectedItem, open, close, isOpen }
}
