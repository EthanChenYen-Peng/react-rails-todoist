import React from 'react'
import { Dialog } from '@headlessui/react'

interface Props {
  open: boolean
  onClose(): void
  children: React.ReactNode
}
export default function Modal({ open, onClose, children }: Props) {
  return (
    <Dialog open={open} onClose={onClose} className="relative z-50">
      {/* The backdrop, rendered as a fixed sibling to the panel container */}
      <div className="fixed inset-0 bg-black/30" aria-hidden="true" />

      {/* Full-screen scrollable container */}
      <div className="fixed inset-0 flex w-full items-center justify-center p-4">
        {/* Container to center the panel */}
        <div className="flex min-h-full w-full items-center justify-center">
          {/* The actual dialog panel  */}
          {children}
        </div>
      </div>
    </Dialog>
  )
}
