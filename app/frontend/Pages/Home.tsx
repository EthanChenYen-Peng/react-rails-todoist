import React from 'react'
import { AiOutlinePlus } from 'react-icons/ai'
import NewTaskForm from '@/components/Task/NewTaskForm'

function Home({ tasks }) {
  console.log(tasks)
  const [editing, setEditing] = React.useState(false)
  return (
    <div className="mx-auto mt-12 w-[90%] md:w-[70%] ">
      <div className="border-b-[1px] border-gray-400 pb-11">
        <h1 className="text-3xl font-bold">Inbox</h1>
      </div>
      {editing ? (
        <NewTaskForm close={() => setEditing(false)} />
      ) : (
        <div
          className="py-3 cursor-pointer group"
          onClick={() => setEditing(true)}
        >
          <button className="flex items-center text-xl text-gray-400 gap-5">
            <AiOutlinePlus className="w-6 h-6 rounded-full text-primary transition-colors group-hover:bg-primary group-hover:text-white" />
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
