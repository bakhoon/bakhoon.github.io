import { useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'
import { CloseIcon } from './Icons'

export default function Modal({ open, onClose, labelledBy, children, variant = 'a' }) {
  const panelRef = useRef(null)

  useEffect(() => {
    if (!open) return
    const prevFocus = document.activeElement
    const onKey = (e) => e.key === 'Escape' && onClose()
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    panelRef.current?.focus()
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
      prevFocus?.focus?.()
    }
  }, [open, onClose])

  if (!open) return null

  return createPortal(
    <div className="backdrop" onClick={onClose}>
      <div
        ref={panelRef}
        className={`modal modal-${variant}`}
        role="dialog"
        aria-modal="true"
        aria-labelledby={labelledBy}
        tabIndex={-1}
        onClick={(e) => e.stopPropagation()}
      >
        <button type="button" className="close-btn wobble-sm" aria-label="Close" onClick={onClose}>
          <CloseIcon />
        </button>
        {children}
      </div>
    </div>,
    document.body,
  )
}
