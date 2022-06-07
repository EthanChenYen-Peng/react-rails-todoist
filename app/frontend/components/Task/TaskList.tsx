import React from 'react'
import { MdDone } from 'react-icons/md'
import { useForm } from '@inertiajs/inertia-react'
import type { Task } from './types'
import TaskDueDate from './TaskDueDate'

interface Props {
  tasks: Task[]
  setEditingTaskIndex(index: number): void
  setEditModal(arg: boolean): void
}

function TaskList({ tasks, setEditingTaskIndex, setEditModal }: Props) {
  const { put } = useForm({ completed_at: Date.now() })

  const completeTask = (task: Task) => {
    put(`/tasks/${task.id}`)
  }

  return (
    <>
      {tasks.map((task, index) => (
        <div
          className="flex cursor-pointer  flex-col border-b-[1px] border-gray-400 py-5 transition-colors hover:bg-gray-200"
          key={task.id}
          onClick={() => {
            setEditModal(true)
            setEditingTaskIndex(index)
          }}
        >
          <div className="flex items-center">
            <MdDone
              className="mr-2 h-7 w-7 translate-y-[1px] cursor-pointer rounded-full border-[1px] border-gray-500 bg-inherit p-1 text-gray-50 transition-colors duration-300 hover:text-gray-500"
              onClick={(e) => {
                e.stopPropagation()
                completeTask(task)
              }}
            />
            <div className="">
              {task.name}
              <TaskDueDate task={task} />
            </div>
          </div>
        </div>
      ))}
    </>
  )
}

export default TaskList
