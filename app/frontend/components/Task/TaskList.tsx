import React, { useState } from 'react'
import { MdDone } from 'react-icons/md'
import { useForm } from '@inertiajs/inertia-react'
import type { Task } from './types'

interface Props {
  tasks: Task[]
}
function TaskList({ tasks }: Props) {
  const { put} = useForm({ completed_at: Date.now()})


  const handleClick: React.MouseEventHandler<SVGElement> = (e, task: Task) => {
    console.log(task)
    put(`/tasks/${task.id}`)

  }
  return (
    <div>
      {tasks.map((task) => (
        <div className="flex items-center border-b-[1px] border-gray-400 py-5">
          <MdDone className="mr-2 h-7 w-7 translate-y-[1px] cursor-pointer rounded-full border-[1px] border-gray-500 bg-inherit p-1 text-gray-200 transition-colors duration-300 hover:text-gray-500" onClick={(e)=> handleClick(e,task)}/>
          {task.name}
        </div>
      ))}
    </div>
  )
}

export default TaskList
