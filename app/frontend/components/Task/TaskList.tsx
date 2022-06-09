import React from 'react'
import { MdDone } from 'react-icons/md'
import { useForm } from '@inertiajs/inertia-react'
import type { Task } from './types'
import TaskDueDate from './TaskDueDate'

const priorityColors = {
  p1: 'border-red-600 border-2 bg-red-50 text-red-50',
  p2: 'border-orange-400 border-2 bg-orange-50 text-orange-50',
  p3: 'border-blue-600 border-2 bg-blue-50 text-blue-50',
  p4: '',
}
interface Props {
  tasks: Task[]
  setEditingTaskId(id: string): void
  setEditModal(arg: boolean): void
}

function TaskList({ tasks, setEditingTaskId, setEditModal }: Props) {
  const { put } = useForm({ completed_at: Date.now() })

  const completeTask = (task: Task) => {
    put(`/tasks/${task.id}`)
  }

  return (
    <>
      {tasks.map((task) => (
        <div
          className="flex cursor-pointer  flex-col border-b-[1px] border-gray-400 py-5 transition-colors hover:bg-gray-200 "
          key={task.id}
          onClick={() => {
            setEditModal(true)
            setEditingTaskId(task.id)
          }}
        >
          <div className="flex items-center">
            <MdDone
              className={`mr-2 h-7 w-7 translate-y-[1px] cursor-pointer rounded-full border-[1px] border-gray-500 bg-inherit p-1 text-gray-50 transition-colors duration-300 hover:text-gray-500 ${
                priorityColors[task.priority]
              }`}
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
