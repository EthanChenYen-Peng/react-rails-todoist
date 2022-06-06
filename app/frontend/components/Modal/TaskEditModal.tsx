import React from 'react'
import { Dialog } from '@headlessui/react'
import Modal from './Modal'
import type { Task } from '../Task/types'
import {
  AiOutlineClose,
  AiOutlineArrowUp,
  AiOutlineArrowDown,
} from 'react-icons/ai'

interface Props {
  open: boolean
  onClose(): void
  task: Task
  nextTask(): void
  previousTask(): void
}
export default function TaskEditModal({
  open,
  onClose,
  task,
  nextTask,
  previousTask,
}: Props) {
  return (
    <Modal open={open} onClose={onClose}>
      <Dialog.Panel className="mx-auto w-6/12 rounded-lg bg-white py-2">
        <div className="flex border-b-[1px] border-b-gray-200 px-4 pt-3 pb-4">
          <div className="ml-auto flex gap-3 text-3xl text-gray-600">
            <AiOutlineArrowDown
              className="rounded-md p-[2px] transition-colors hover:bg-red-100"
              onClick={nextTask}
            />
            <AiOutlineArrowUp
              className="rounded-md p-[2px] transition-colors hover:bg-red-100"
              onClick={previousTask}
            />
            <AiOutlineClose
              className="rounded-md p-[2px] transition-colors hover:bg-red-100"
              onClick={onClose}
            />
          </div>
        </div>
        {task.name}
      </Dialog.Panel>
    </Modal>
  )
}
