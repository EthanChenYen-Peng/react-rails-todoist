import React from 'react'
import type { Task } from './types'
import TaskEditModal from '../Modal/TaskEditModal'
import TaskList from './TaskList'

interface Props {
  tasks: Task[]
}

function TaskSection({ tasks }: Props) {
  const [editModal, setEditModal] = React.useState(false)
  const [editingTaskIndex, setEditingTaskIndex] = React.useState<number | null>(
    null
  )

  const nextTask = () => {
    if (editingTaskIndex === null) return
    setEditingTaskIndex(editingTaskIndex + 1)
  }

  const previousTask = () => {
    if (editingTaskIndex === null) return
    setEditingTaskIndex(editingTaskIndex - 1)
  }

  const editingTask = editingTaskIndex !== null ? tasks[editingTaskIndex] : null
  return (
    <div>
      <TaskList
        tasks={tasks}
        setEditingTaskIndex={setEditingTaskIndex}
        setEditModal={setEditModal}
      />
      {editingTask && (
        <TaskEditModal
          open={editModal}
          onClose={() => setEditModal(false)}
          task={editingTask}
          nextTask={nextTask}
          previousTask={previousTask}
        />
      )}
    </div>
  )
}

export default TaskSection
