import React from 'react'
import { AiOutlinePlus } from 'react-icons/ai'
import NewTaskForm from '@/components/Task/NewTaskForm'
import TaskList from '@/components/Task/TaskList'
import type { Task } from '@/components/Task/types'

interface Props {
  tasks: Task[]
}

function Home({ tasks }: Props) {
  const [editing, setEditing] = React.useState(false)
  const formRef = React.useRef<HTMLFormElement>(null)
  console.log('render home')
  React.useEffect(() => {
    function handlKeyPress(e: KeyboardEvent) {
      if (e.key !== 'Enter') return
      if (editing) {
        formRef.current?.requestSubmit()
      } else {
        setEditing(true)
      }
    }
    document.addEventListener('keypress', handlKeyPress)
    return () => {
      document.removeEventListener('keypress', handlKeyPress)
    }
  }, [editing])
  return (
    <div className="mx-auto mt-12 w-[90%] md:w-[70%] ">
      <div className="border-b-[1px] border-gray-400 pb-11">
        <h1 className="text-3xl font-bold">Inbox</h1>
      </div>
      <TaskList tasks={tasks} />
      {editing ? (
        <NewTaskForm close={() => setEditing(false)} ref={formRef} />
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
