import React, { useState } from 'react'
import { MdDone} from 'react-icons/md'
import type { Task } from './typse'

interface Props {
  tasks: Task[]
}
function TaskList({ tasks }: Props) {
  return (
    <div>
      {tasks.map((task)=> (
        <div className='border-b-[1px] border-gray-400 py-5 flex items-center'>
          <MdDone className='w-7 h-7 p-1 rounded-full translate-y-[1px] bg-inherit border-[1px] border-gray-500 text-gray-200 hover:text-gray-500 transition-colors duration-300 mr-2 cursor-pointer' />
          {task.name}
        </div>
      ))}
    </div>
  )
}

export default TaskList
