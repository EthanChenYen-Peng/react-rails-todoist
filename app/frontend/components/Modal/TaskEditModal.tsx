import React from 'react'
import { MdDone, MdOutlineDescription } from 'react-icons/md'
import { Dialog } from '@headlessui/react'
import Modal from './Modal'
import type { Task } from '../Task/types'
import ModalHeader from './ModalHeader'
import TaskEditForm from '@/components/Task/TaskEditForm'

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
  const [editing, setEditing] = React.useState(false)
  return (
    <Modal open={open} onClose={onClose}>
      <Dialog.Panel className="mx-auto w-11/12 rounded-lg bg-white py-2 md:w-6/12">
        <ModalHeader
          onClose={onClose}
          nextTask={nextTask}
          previousTask={previousTask}
        />
        <div className="flex items-start px-5 py-4">
          <MdDone
            className="mr-2 h-7 w-7 translate-y-[1px] cursor-pointer rounded-full border-[1px] border-gray-500 bg-inherit p-1 text-gray-50 transition-colors duration-300 hover:text-gray-500"
            onClick={(e) => {
              e.stopPropagation()
            }}
          />
          <div className="min-h-[300px] flex-1">
            {editing ? (
              <TaskEditForm close={() => setEditing(false)} task={task} />
            ) : (
              <TaskDisplay task={task} handleClick={() => setEditing(true)} />
            )}
          </div>
        </div>
      </Dialog.Panel>
    </Modal>
  )
}

function TaskDisplay({
  task,
  handleClick,
}: {
  task: Task
  handleClick(): void
}) {
  return (
    <div className="cursor-pointer" onClick={handleClick}>
      <h2 className="text-3xl ">{task.name}</h2>
      <div className="my-3 text-xl">
        {task.description || (
          <div className="flex items-center gap-2 text-gray-500 ">
            <MdOutlineDescription className="text-2xl" />
            Description
          </div>
        )}
      </div>
    </div>
  )
}
