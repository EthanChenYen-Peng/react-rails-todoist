import React from 'react'
import { Dialog } from '@headlessui/react'

interface Props {
  open: boolean
  onClose(): void
}
export default function TaskEditModal({ open, onClose }: Props) {
  return (
    <Dialog open={open} onClose={onClose}>
      <Dialog.Panel>
        <Dialog.Title>Deactivate account</Dialog.Title>
        <Dialog.Description>
          This will permanently deactivate your account
        </Dialog.Description>

        <p>
          Are you sure you want to deactivate your account? All of your data
          will be permanently removed. This action cannot be undone.
        </p>

        <button onClick={onClose}>Cancel</button>
      </Dialog.Panel>
    </Dialog>
  )
}
