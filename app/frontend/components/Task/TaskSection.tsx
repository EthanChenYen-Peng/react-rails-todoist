import React from 'react'
import type { Task } from './types'
import TaskEditModal from '../Modal/TaskEditModal'
import TaskList from './TaskList'

interface Props {
  tasks: Task[]
}

function TaskSection({ tasks }: Props) {
  const [editModal, setEditModal] = React.useState(false)
  const [editingTaskId, setEditingTaskId] = React.useState<string | null>(null)
  const [nextTaskId, setNextTaskId] = React.useState<string | null>(null)
  const [previousTaskId, setPreviousTaskId] = React.useState<string | null>(
    null
  )

  const editingTask = tasks.find((task) => task.id === editingTaskId)
  React.useEffect(() => {
    const editingTaskIndex = tasks.findIndex(
      (task) => task.id === editingTaskId
    )
    const nextTask = tasks[editingTaskIndex + 1]
    if (nextTask) {
      setNextTaskId(nextTask.id)
    }

    const previousTask = tasks[editingTaskIndex - 1]
    if (previousTask) {
      setPreviousTaskId(previousTask.id)
    }
  }, [editingTaskId, tasks])
  const nextTask = () => {
    setEditingTaskId(nextTaskId)
  }

  const previousTask = () => {
    setEditingTaskId(previousTaskId)
  }
  return (
    <div>
      <TaskList
        tasks={tasks}
        setEditingTaskId={setEditingTaskId}
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
