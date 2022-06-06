import React from 'react'
import { MdDone } from 'react-icons/md'
import { useForm } from '@inertiajs/inertia-react'
import type { Task } from './types'
import TaskDueDate from './TaskDueDate'
import TaskEditModal from '../Modal/TaskEditModal'

interface Props {
  tasks: Task[]
}

function TaskList({ tasks }: Props) {
  const { put } = useForm({ completed_at: Date.now() })
  const [editModal, setEditModal] = React.useState(false)

  const completeTask = (task: Task) => {
    put(`/tasks/${task.id}`)
  }
  return (
    <div>
      {tasks.map((task) => (
        <div
          className="flex flex-col  border-b-[1px] border-gray-400 py-5"
          key={task.id}
          onClick={() => {
            setEditModal(true)
            console.log('werwqer')
          }}
        >
          <div className="flex items-center">
            <MdDone
              className="mr-2 h-7 w-7 translate-y-[1px] cursor-pointer rounded-full border-[1px] border-gray-500 bg-inherit p-1 text-gray-50 transition-colors duration-300 hover:text-gray-500"
              onClick={() => completeTask(task)}
            />
            <div className="">
              {task.name}
              <TaskDueDate task={task} />
            </div>
          </div>
        </div>
      ))}
      <TaskEditModal open={editModal} onClose={() => setEditModal(false)} />
    </div>
  )
}

export default TaskList
