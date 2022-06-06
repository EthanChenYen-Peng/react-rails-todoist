import React, { useState } from 'react'
import type { Task } from './types'
import moment from 'moment'
import { BsCalendarDate } from 'react-icons/bs'

function formatDateString(dateString: string | null) {
  console.log(dateString)
  if (!dateString) return
  const dateObj = new Date(dateString)
  return moment(dateObj).format('MMM DD')
}

function TaskDueDate({ task }: Task) {
  return (
    <>
      {task.due_date && (
        <div className="flex items-center gap-2 text-sm text-purple-500">
          <BsCalendarDate />
          {formatDateString(task.due_date)}
        </div>
      )}
    </>
  )
}

export default TaskDueDate
