import React from 'react'
import { AiOutlinePlus } from 'react-icons/ai'

function Home({ user }) {
  return (
    <div className="mx-auto mt-12 w-[70%]">
      <div className="border-b-[1px] border-gray-400 pb-11">
        <h1 className="text-3xl font-bold">Inbox</h1>
      </div>
      <div className="py-3 group cursor-pointer">
        <button className="flex items-center text-xl text-gray-400 gap-5">
          <AiOutlinePlus className="w-6 h-6 rounded-full text-primary transition-colors group-hover:bg-primary group-hover:text-white" />
          <span className="group-hover:text-primary transition-colors">Add task</span>
        </button>
      </div>
    </div>
  )
}

export default Home
