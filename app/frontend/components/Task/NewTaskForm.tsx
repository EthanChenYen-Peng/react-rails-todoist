import React from 'react'

interface Props {
  close: () => void
}
function NewTaskForm({ close }: Props) {
  return (
    <div>
      <form className="my-3 rounded-lg border-[1px] border-gray-400 p-5">
        <input
          type="text"
          placeholder="Task name"
          className="w-full bg-inherit text-lg text-black focus:outline-none"
        />

        <input
          type="text"
          placeholder="Description"
          className="mt-1 mb-4 w-full bg-inherit text-lg text-black focus:outline-none"
        />
      </form>
      <div className="flex justify-end gap-5">
        <button
          className="rounded-md bg-gray-300 px-3 py-3 text-xl text-gray-800"
          onClick={close}
        >
          Cancel
        </button>
        <button className="rounded-md bg-primary px-3 py-3 text-xl text-white">
          Add task
        </button>
      </div>
    </div>
  )
}

export default NewTaskForm
