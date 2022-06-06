import React from 'react'
import { MdDone } from 'react-icons/md'
import { useForm } from '@inertiajs/inertia-react'
import moment from 'moment'
import { BsCalendarDate } from 'react-icons/bs'
import type { Task } from './types'

interface Props {
  tasks: Task[]
}

function formatDateString(dateString: string | null) {
  console.log(dateString)
  if (!dateString) return
  const dateObj = new Date(dateString)
  return moment(dateObj).format('MMM DD')
}
function TaskList({ tasks }: Props) {
  const { put } = useForm({ completed_at: Date.now() })

  const handleClick: React.MouseEventHandler<SVGElement> = (e, task: Task) => {
    console.log(task)
    put(`/tasks/${task.id}`)
  }
  return (
    <div>
      {tasks.map((task) => (
        <div
          className="flex flex-col  border-b-[1px] border-gray-400 py-5"
          key={task.id}
        >
          <div className="flex items-center">
            <MdDone
              className="mr-2 h-7 w-7 translate-y-[1px] cursor-pointer rounded-full border-[1px] border-gray-500 bg-inherit p-1 text-gray-200 transition-colors duration-300 hover:text-gray-500"
              onClick={(e) => handleClick(e, task)}
            />
            <div className="">
              {task.name}
              {task.due_date && (
                <div className="flex items-center gap-2 text-sm text-purple-500">
                  <BsCalendarDate />
                  {formatDateString(task.due_date)}
                </div>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default TaskList
