import React from 'react'
import { Dialog } from '@headlessui/react'
import Modal from './Modal'
import type { Task } from '../Task/types'

interface Props {
  open: boolean
  onClose(): void
  task: Task
}
export default function TaskEditModal({ open, onClose, task }: Props) {
  return (
    <Modal open={open} onClose={onClose}>
      <Dialog.Panel className="mx-auto w-6/12 rounded bg-white px-4 py-2">
        {task.name}
      </Dialog.Panel>
    </Modal>
  )
}
