import React from 'react'
import { AiOutlinePlus } from 'react-icons/ai'
import NewTaskForm from '@/components/Task/NewTaskForm'
import TaskSection from '@/components/Task/TaskSection'
import type { Task } from '@/components/Task/types'

interface Props {
  tasks: Task[]
}

function Home({ tasks }: Props) {
  const [editing, setEditing] = React.useState(false)
  React.useEffect(() => {
    function handleKeyPress(e: KeyboardEvent) {
      if (e.key !== 'Enter') return
      if (!editing) {
        setEditing(true)
      }
    }
    document.addEventListener('keypress', handleKeyPress)
    return () => {
      document.removeEventListener('keypress', handleKeyPress)
    }
  }, [editing])

  return (
    <div className="mx-auto mt-12 w-[90%] md:w-[70%] ">
      <div className="border-b-[1px] border-gray-400 pb-11">
        <h1 className="text-3xl font-bold">Inbox</h1>
      </div>
      <TaskSection tasks={tasks} />
      {editing ? (
        <NewTaskForm close={() => setEditing(false)} />
      ) : (
        <div
          className="group cursor-pointer py-3"
          onClick={() => setEditing(true)}
        >
          <button className="flex items-center gap-5 text-xl text-gray-400">
            <AiOutlinePlus className="h-6 w-6 rounded-full text-primary transition-colors group-hover:bg-primary group-hover:text-white" />
            <span className="transition-colors group-hover:text-primary">
              Add task
            </span>
          </button>
        </div>
      )}
    </div>
  )
}

export default Home
