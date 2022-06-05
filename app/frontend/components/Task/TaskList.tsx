import React, { useState } from 'react'
import type { Task } from './typse'

interface Props {
  tasks: Task[]
}
function TaskList({ tasks }: Props) {
  return (
    <div>
      <p>TaskList</p>
    </div>
  )
}

export default TaskList
