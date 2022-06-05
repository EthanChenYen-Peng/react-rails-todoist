import React from 'react'
import { useForm } from '@inertiajs/inertia-react'

interface Props {
  close: () => void
}
function NewTaskForm({ close }: Props) {
  const { data, setData, post, wasSuccessful } = useForm({
    name: '',
    description: '',
  })

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault()
    post('/tasks')
  }
  const disableSubmit = data.name === ''

  React.useEffect(() => {
    if (wasSuccessful) {
      close()
    }
  }, [wasSuccessful])
  return (
    <div>
      <form className="my-3 rounded-lg border-[1px] border-gray-400 p-5">
        <input
          type="text"
          placeholder="Task name"
          className="w-full bg-inherit text-lg text-black focus:outline-none"
          onChange={(e) => setData('name', e.target.value)}
        />

        <input
          type="text"
          placeholder="Description"
          className="mt-1 mb-4 w-full bg-inherit text-lg text-black focus:outline-none"
          onChange={(e) => setData('description', e.target.value)}
        />
      </form>
      <div className="flex justify-end gap-5">
        <button
          className="rounded-md bg-gray-300 px-3 py-3 text-xl text-gray-800"
          onClick={close}
        >
          Cancel
        </button>
        <button
          className={`rounded-md px-3 py-3 text-xl text-white ${
            disableSubmit ? 'bg-red-300' : 'bg-primary'
          }`}
          type="submit"
          onClick={handleSubmit}
          disable={disableSubmit}
        >
          Add task
        </button>
      </div>
    </div>
  )
}

export default NewTaskForm
