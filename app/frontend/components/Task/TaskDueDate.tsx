import React from 'react'
import type { Task } from './types'
import moment from 'moment'
import { BsCalendarDate } from 'react-icons/bs'

function TaskDueDate({ task }: { task: Task }) {
  let formattedDateString
  let color
  if (task.due_date) {
    const dateObj = new Date(task.due_date)
    formattedDateString = moment(dateObj).format('MMM DD')
    if (moment(dateObj).isBefore(Date.now(), 'day')) {
      color = 'text-red-500'
    } else if (moment(dateObj).isAfter(Date.now(), 'day')) {
      color = 'text-purple-500'
    } else {
      color = 'text-black'
    }
  }
  return (
    <>
      {task.due_date && (
        <div className={`${color} flex items-center gap-2 text-sm`}>
          <BsCalendarDate />
          {formattedDateString}
        </div>
      )}
    </>
  )
}

export default TaskDueDate
